<script>
	import { signOut } from '@auth/sveltekit/client';
	import Button from '$components/ui/button.svelte';
	import HomeMenu from '$lib/components/menu/home.svelte';
</script>

<header class="p-5 border-b-2 border-gray-50">
	<nav class="flex flex-row items-center justify-between container mx-auto max-w-4xl">
		<a href="/home">Home</a>

		<ul class="xl:flex lg:flex hidden flex-row items-center space-x-5">
			<a href="/home/project/create">Crear nuevo proyecto</a>

			<Button
				type="submit"
				value="LOGOUT"
				on:click={() => signOut({ redirect: true, callbackUrl: 'http://localhost:5173' })}
				>Cerrar sesión</Button
			>
		</ul>
		<HomeMenu />
	</nav>
</header>
<slot />
