import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;
	const existingProject = await prisma.project.findUnique({ where: { id } });
	if (!existingProject) throw error(404, { message: 'Este proyecto no existe.' });
	const projectKeysByProjectId = await prisma.projectKey.findMany({
		where: { relatedProject: { id } }
	});
	console.log(projectKeysByProjectId);
	if (!projectKeysByProjectId)
		throw error(500, { message: 'Hubo un error al cargar la keys de tu proyecto' });
	return { keys: projectKeysByProjectId };
};
