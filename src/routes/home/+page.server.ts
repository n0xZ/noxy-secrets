import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const userSess = await locals.getSession();
	if (!userSess) throw redirect(302, '/');
	const userProjects = await prisma.project.findMany({
		where: { user: { email: userSess.user?.email ?? '' } }
	});
	return { projects: userProjects, session: userSess };
};
