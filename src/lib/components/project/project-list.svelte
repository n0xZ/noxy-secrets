<script lang="ts">
	import type { Project } from '@prisma/client';
	import ProjectItem from './project-item.svelte';

	export let projects: Project[];
</script>

<article class="grid grid-rows-3 h-full container mx-auto gap-5 xl:p-0 p-2">
	{#each projects as project}
		<ProjectItem {project} />
	{/each}
</article>
