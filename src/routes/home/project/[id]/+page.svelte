<script lang="ts">
	import type { ActionData, PageServerData } from './$types';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import KeyList from '$lib/components/key/key-list.svelte';
	import { page } from '$app/stores';
	import AddKey from '$lib/components/icon/add-key.svelte';
	import Button from '$components/ui/button.svelte';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$components/ui/dialog';
	import Input from '$components/ui/input.svelte';
	import Label from '$components/ui/label.svelte';
	import { enhance } from '$app/forms';

	let id = $page.params.id;
	let loading = false;
	let isMounted = false;
	
	export let data: PageServerData;
	export let form: ActionData;

	const addKey: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update();
		};
	};

	onMount(() => {
		isMounted = true;
	});
</script>

<svelte:head>
	<title>Noxy - secrets | Proyecto actual: {data.projectTitle}</title>
</svelte:head>
<aside class="p-5 flex container mx-auto max-w-3xl flex-row justify-end">
	<Dialog modal={true} >
		<DialogTrigger>
			<Button class="flex flex-row items-center space-x-2">
				<AddKey />
				<span>Agregar nueva llave</span></Button
			></DialogTrigger
		>
		<DialogContent class="max-w-xs w-full">
			<DialogHeader>
				<DialogTitle>Crear nueva llave</DialogTitle>
				<DialogDescription>
					Crea tu nueva llave para tu proyecto. Al completar el formulario, se te mostrará la llave
					generada.
				</DialogDescription>
			</DialogHeader>
			<form
				method="post"
				class=" flex flex-col justify-center space-y-2"
				action="/home/project/{id}/?create-key"
				use:enhance={addKey}
			>
				<aside class="flex flex-col justify-center space-y-3 max-w-2xl">
					<Label for="email">Nombre</Label>
					<Input
						type="text"
						name="name"
						placeholder="Mi nueva key!"
						disabled={loading}
						class="px-4 py-3 rounded-lg outline-none bg-light-400 c-gray-800 max-w-2xl"
						data-test-id="nameField"
					/>
					<span class="h-5 text-red-500 text-sm"
						>{#if form?.containsErrors && form?.fields?.name}
							<p data-test-id="emailErrors">{form?.fields?.name}</p>
						{/if}</span
					>
				</aside>
				<aside class="flex flex-col justify-center space-y-3 max-w-2xl">
					<Label for="email">Valor de la llave</Label>
					<Input
						type="password"
						name="value"
						placeholder="*********"
						disabled={loading}
						class="px-4 py-3 rounded-lg outline-none bg-light-400 c-gray-800 max-w-2xl"
						data-test-id="valueField"
					/>
					<span class="h-5 text-red-500 text-sm"
						>{#if form?.containsErrors && form?.fields?.value}
							<p data-test-id="emailErrors">{form?.fields?.value}</p>
						{/if}</span
					>
				</aside>
				<Button type="submit" disabled={loading}>Crear</Button>
			
			</form>
		</DialogContent>
	</Dialog>
</aside>
<main class="h-full container mx-auto max-w-3xl mt-10">
	<h2 class="text-3xl text-center font-bold">{data.projectTitle}</h2>

	{#if !data.keys.length}
		<p>No tienes variables de entorno declaradas en este proyecto.</p>
	{:else}
		<KeyList projectKeys={data.keys} />
	{/if}
</main>

{#if isMounted}
	<SvelteToast />
{/if}
