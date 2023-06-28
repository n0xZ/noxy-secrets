<script lang="ts">
	import ProjectList from '$lib/components/project/project-list.svelte';
	import Paragraph from '$components/ui/paragraph.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Noxy - secrets | Mis proyectos actuales</title>
</svelte:head>

<main class="container mx-auto max-w-3xl mt-10 space-y-5">
	<h2
		class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center mb-3"
	>
		Proyectos actuales
	</h2>

	{#if !data.projects.length}
		<section class="h-full w-full grid place-items-center">
			<Paragraph >No tiene proyectos creados por el momento.</Paragraph>
		</section>
	{:else}
		<ProjectList projects={data.projects} />
	{/if}
</main>
