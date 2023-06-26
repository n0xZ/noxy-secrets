<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ActionData } from './$types';
	import Label from '$components/ui/label.svelte';
	import Input from '$components/ui/input.svelte';
	import Button from '$components/ui/button.svelte';
	export let form: ActionData;
	let loading = false;

	const registerUser: SubmitFunction = () => {
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
		class=" flex flex-col justify-center space-y-3 max-w-2xl w-full xl:p-0 p-1"
	>
		<h2
			class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center"
		>
			Crea tu cuenta en Secrets!
		</h2>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl">
			<Label for="username">Nombre de usuario</Label>
			<Input type="text" name="username" placeholder="janedoe" disabled={loading} />
			<span class="h-5 text-red-500 text-sm"
				>{#if form?.containsErrors && form?.fields?.username}
					<p data-test-id="usernameErrors">{form?.fields?.username}</p>
				{/if}</span
			>
		</aside>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl">
			<Label for="email">Correo electrónico</Label>
			<Input type="email" name="email" placeholder="janedoe@email.net" disabled={loading} />
			<span class="h-5 text-red-500 text-sm"
				>{#if form?.containsErrors && form?.fields?.email}
					<p data-test-id="emailErrors">{form?.fields?.email}</p>
				{/if}</span
			>
		</aside>
		<aside class="flex flex-col justify-center space-y-3 max-w-2xl">
			<Label for="password">Contraseña</Label>

			<Input type="password" name="password" placeholder="•••••••••••••••" disabled={loading} />
			<span class="h-5 text-red-500 text-sm"
				>{#if form?.containsErrors && form?.fields?.password}
					<p data-test-id="passwordErrors">{form?.fields?.password}</p>
				{/if}</span
			>
		</aside>
		<Button type="submit" disabled={loading}
			>{!loading ? 'Crear nueva cuenta' : 'Creando...'}</Button
		>
		<span class="h-3 text-red-500 text-sm" data-test-id="externalErrors"
			>{#if form?.containsErrors && form?.externalErrors}
				<p>{form?.externalErrors}</p>
			{/if}
		</span>
		<a href="/login" class="text-center underline">Ya tengo una cuenta</a>
	</form>
</section>
