<script lang="ts">
	import type { Project } from '@prisma/client';
	import GotoIcon from '../icon/goto.svelte';

	export let project: Project;
</script>

<a
	href={`/home/project/${project.id}`}
	class="h-42  w-full rounded-lg shadow-md p-5 flex flex-row justify-between items-center  space-y-3 hover:opacity-50 duration-100 ease-in-out"
>
	<aside class="flex flex-col space-y-3">
		<h2 class="font-bold text-xl">{project.name}</h2>
		<p class="c-neutral-400">{project.description}</p>
	</aside>
	<GotoIcon />
</a>
