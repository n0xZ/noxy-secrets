import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	throw redirect(302, '/home');
};

export const actions: Actions = {
	deleteKey: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('keyId') as string;

		const deletedProject = await prisma.projectKey.delete({ where: { id } });
		return {
			deletedProject
		};
	}
};
