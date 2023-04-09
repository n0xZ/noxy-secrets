<script lang="ts">
	import type { ActionData, PageServerData } from './$types';
	import type { SubmitFunction } from '$app/forms';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import KeyList from '$lib/components/key/key-list.svelte';
	import CreateKeyModal from '$lib/components/modal/create-key.svelte';
	import AddKey from '$lib/components/icon/add-key.svelte';
	import { onMount } from 'svelte';

	let loading = false;
	let isOpen = false;
	let isMounted = false;
	export let data: PageServerData;
	export let form: ActionData;

	const addKey: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			isOpen = false;
			await update();
		};
	};

	const closeModal = () => {
		isOpen = false;
	};

	onMount(() => {
		isMounted = true;
	});
	
</script>

<svelte:head>
	<title>Noxy - secrets | Proyecto actual: {data.projectTitle}</title>
</svelte:head>

<aside class="p-5 flex container mx-auto max-w-3xl flex-row justify-end">
	<button
		class="p-3 rounded-lg flex flex-row items-center justify-center space-x-2 bg-violet-600 c-white font-bold "
		on:click={() => (isOpen = !isOpen)}
	>
		<AddKey />
		<span>Agregar nueva llave</span></button
	>
</aside>
<main class="h-full container mx-auto max-w-3xl mt-10">
	<h2 class="text-3xl text-center font-bold">{data.projectTitle}</h2>
	<CreateKeyModal {isOpen} {closeModal} {form} {loading} {addKey} />
	{#if !data.keys.length}
		<p>No tienes variables de entorno declaradas en este proyecto.</p>
	{:else}
		<KeyList projectKeys={data.keys} />
	{/if}
</main>

{#if isMounted}
	<SvelteToast />
{/if}
