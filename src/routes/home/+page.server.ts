import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const userId = locals.userId;
	if (!userId) throw redirect(302, '/');
	const userProjects = await prisma.project.findMany({
		where: { user: { id: userId } }
	});
	return { projects: userProjects };
};
export const actions: Actions = {
	default: async ({ cookies }) => {
		cookies.delete('user-session');
		throw redirect(302, '/');
	}
};
