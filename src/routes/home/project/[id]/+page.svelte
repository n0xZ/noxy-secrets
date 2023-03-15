<script lang="ts">
	import type { PageServerData } from './$types';
	import { page } from '$app/stores';
	import KeyList from '$lib/components/key/key-list.svelte';
	let id = $page.params.id;
	export let data: PageServerData;
</script>

<svelte:head>
	<title>Noxy - secrets | Proyecto actual</title>
</svelte:head>

<main class="h-full container mx-auto max-w-3xl">
	{#if !data.keys.length}
		<p>No tienes variables de entorno declaradas en este proyecot.</p>
	{:else}
		<KeyList projectKeys={data.keys} />
	{/if}
</main>
