import { error, fail } from '@sveltejs/kit';
import { z } from 'zod';
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad, Actions } from './$types';

const createKeySchema = z.object({
	name: z.string().min(3, { message: 'Campo requerido' }),
	value: z.string().min(3, { message: 'Campo requerido' })
});
export const load: PageServerLoad = async ({ params, locals }) => {
	const session = await locals.getSession();
	const id = params.id;
	const existingProject = await prisma.project.findUnique({ where: { id } });

	if (!existingProject) throw error(404, { message: 'Este proyecto no existe.' });
	const projectKeysByProjectId = await prisma.projectKey.findMany({
		where: { relatedProject: { id } }
	});

	if (!projectKeysByProjectId)
		throw error(500, { message: 'Hubo un error al cargar la keys de tu proyecto' });
	return { keys: projectKeysByProjectId, projectTitle: existingProject.name, session };
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const requestedFormData = Object.fromEntries(await request.formData()) as z.infer<
			typeof createKeySchema
		>;
		const validateFormData = createKeySchema.safeParse(requestedFormData);
		if (validateFormData.success) {
			const projectId = params.id;

			const newProject = await prisma.projectKey.create({
				data: {
					name: validateFormData.data.name,
					value: validateFormData.data.value,
					relatedProject: { connect: { id: projectId } }
				}
			});
			return { newProject };
		}
		const containsErrors = Boolean(
			validateFormData.error.formErrors.fieldErrors.name ||
				validateFormData.error.formErrors.fieldErrors.value
		);
		return fail(400, {
			containsErrors,
			fields: {
				name: validateFormData.error.formErrors.fieldErrors.name?.[0],
				value: validateFormData.error.formErrors.fieldErrors.value?.[0]
			}
		});
	}
};
