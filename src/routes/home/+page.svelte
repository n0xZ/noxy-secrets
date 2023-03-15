<script lang="ts">
	import ProjectList from '$lib/components/project/project-list.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>
<svelte:head>

<title>Noxy - secrets | Mis proyectos actuales</title>
</svelte:head>

<main class="container mx-auto max-w-3xl  mt-10 space-y-5">
	<h2 class="text-center text-3xl font-bold mb-10">Proyectos actuales</h2>

	{#if !data.projects.length}
		<p>No tiene proyectos creados por el momento.</p>
	{:else}
		<ProjectList projects={data.projects} />
	{/if}
</main>
