<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
	let loading = false;

	const registerUser: SubmitFunction = ({}) => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update();
		};
	};
</script>

<svelte:head><title>Noxy - secrets | Crear nueva cuenta</title></svelte:head>

<section class="h-screen grid place-items-center font-mukta">
	<form
		action="/register?/registerUser"
		use:enhance={registerUser}
		method="post"
		class=" flex flex-col justify-center space-y-6 max-w-2xl w-full xl:p-0 p-1"
	>
		<h1 class="xl:text-3xl text-2xl text-center font-semibold">Crea tu cuenta en Secrets!</h1>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl">
			<label for="username" class="font-semibold">Nombre de usuario</label>
			<input
				type="text"
				name="username"
				placeholder="janedoe"
				disabled={loading}
				class="px-4 py-3 rounded-lg outline-none bg-light-400 c-gray-800 max-w-2xl"
			/>
			<span class="h-5 c-red-500"
				>{#if form?.containsErrors && form?.fields?.username}
					<p>{form?.fields?.username}</p>
				{/if}</span
			>
		</aside>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl">
			<label for="email" class="font-semibold">Correo electrónico</label>
			<input
				type="email"
				name="email"
				placeholder="janedoe@email.net"
				disabled={loading}
				class="px-4 py-3 rounded-lg outline-none bg-light-400 c-gray-800 max-w-2xl"
			/>
			<span class="h-5 c-red-500"
				>{#if form?.containsErrors && form?.fields?.email}
					<p>{form?.fields?.email}</p>
				{/if}</span
			>
		</aside>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl">
			<label for="password" class="font-semibold">Contraseña</label>

			<input
				type="password"
				name="password"
				placeholder="•••••••••••••••"
				disabled={loading}
				class="px-4 py-3 rounded-lg outline-none bg-light-400 c-gray-800 max-w-2xl"
			/>
			<span class="h-5 c-red-500"
				>{#if form?.containsErrors && form?.fields?.password}
					<p>{form?.fields?.password}</p>
				{/if}</span
			>
		</aside>
		<button
			type="submit"
			disabled={loading}
			class="px-5 py-3 rounded-lg  bg-purple-600 c-gray-50 font-semibold w-full max-w-2xl"
			>{!loading ? 'Crear nueva cuenta' : 'Creando...'}</button
		>
		<span class="h-5 c-red-500"
			>{#if form?.containsErrors && form?.externalErrors}
				<p>{form?.externalErrors}</p>
			{/if}
		</span>
		<a href="/login" class="text-center underline">Ya tengo una cuenta</a>
	</form>
</section>
