<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';

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

<main class="h-full ">
	<form
	method="post"
	action="/home/project/create?/create-project"
		use:enhance={createProject}
		class="flex flex-col justify-center space-y-6 container w-full mx-auto max-w-2xl xl:p-0 p-2 mt-20"
	>
		<h1 class="text-center text-3xl">Nuevo proyecto!</h1>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl w-full">
			<label class="font-bold" for="name"> Nombre del proyecto </label>
			<input
				class="px-5 py-4 rounded-lg outline-none bg-sky-50"
				type="text"
				name="name"
				placeholder="Mi primer proyecto en Preactyx!"
				disabled={loading}
			/>
			<span class="h-5 c-red-500"
				>{#if form?.containsErrors && form?.fields?.name}
					<p>{form?.fields?.name}</p>
				{/if}</span
			>
		</aside>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl w-full">
			<label class="font-bold" for="description"> Descripción breve del proyecto </label>
			<input
				class="px-5 py-4 rounded-lg outline-none bg-sky-50"
				type="text"
				name="description"
				placeholder="Proyecto sobre mantenimiento de robots."
				disabled={loading}
			/>
			<span class="h-5 c-red-500"
				>{#if form?.containsErrors && form?.fields?.description}
					<p>{form?.fields?.description}</p>
				{/if}</span
			>
		</aside>
		<button
			type="submit"
			disabled={loading}
			class="px-5 py-3 rounded-lg  w-full max-w-2xl bg-purple-400 font-bold c-white"
		>
			{!loading ? 'Crear nuevo proyecto' : 'Creando proyecto...'}
		</button>
	</form>
</main>
