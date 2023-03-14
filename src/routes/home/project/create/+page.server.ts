import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { prisma } from '$lib/server/prisma';
import type { Actions } from './$types';

const createProjectSchema = z.object({
	name: z.string(),
	description: z.string()
});
export const actions: Actions = {
	'create-project': async ({ request, locals }) => {
		const userId = locals.userId;
		const requestedFormData = Object.fromEntries(await request.formData()) as z.infer<
			typeof createProjectSchema
		>;
		const validateFormData = createProjectSchema.safeParse(requestedFormData);
		if (validateFormData.success) {
			const newProject = await prisma.project.create({
				data: {
					name: validateFormData.data.name,
					description: validateFormData.data.description,
					user: { connect: { id: userId } }
				}
			});
			if (!newProject)
				throw new Response('Ocurrió un error al crear el nuevo proyecto', {
					status: 500,
					statusText: 'Hubo un error al crear el proyecto. Por favor, vuelva a intentarlo más tarde'
				});
			throw redirect(302, '/home');
		}
		const containsErrors = Boolean(
			validateFormData.error.formErrors.fieldErrors.name ||
				validateFormData.error.formErrors.fieldErrors.description
		);
		return fail(400, {
			containsErrors,
			fields: {
				name: validateFormData.error.formErrors.fieldErrors.name?.[0],
				description: validateFormData.error.formErrors.fieldErrors.description?.[0]
			}
		});
	}
};
