<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ActionData } from './$types';
	import Button from '$components/ui/button.svelte';
	import Input from '$components/ui/input.svelte';
	import Label from '$components/ui/label.svelte';

	export let form: ActionData;
	let loading = false;
	const createProject: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update();
		};
	};
</script>

<svelte:head>
	<title>Noxy - secrets | Crear nuevo proyecto</title>
</svelte:head>
<main class="h-full">
	<form
		method="post"
		action="/home/project/create?/create-project"
		use:enhance={createProject}
		class="flex flex-col justify-center space-y-6 container w-full mx-auto max-w-2xl xl:p-0 p-2 mt-20"
	>
		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">Nuevo proyecto!</h1>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl w-full">
			<Label for="name">Nombre del proyecto</Label>
			<Input
				type="text"
				name="name"
				placeholder="Mi primer proyecto en secrets!"
				disabled={loading}
			/>
			<span class="h-5 text-red-500 text-sm"
				>{#if form?.containsErrors && form?.fields?.name}
					<p>{form?.fields?.name}</p>
				{/if}</span
			>
		</aside>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl w-full">
			<Label for="description">Descripción breve del proyecto</Label>
			<Input
				type="text"
				name="description"
				placeholder="Proyecto sobre mantenimiento de robots."
				disabled={loading}
			/>
			<span class="h-5 text-red-500 text-sm"
				>{#if form?.containsErrors && form?.fields?.description}
					<p>{form?.fields?.description}</p>
				{/if}</span
			>
		</aside>
		<Button type="submit" disabled={loading}>
			{!loading ? 'Crear nuevo proyecto' : 'Creando proyecto...'}
		</Button>
	</form>
</main>
