<script>
	import { signOut } from '@auth/sveltekit/client';
	import { env } from '$env/dynamic/public';
	import Button from '$components/ui/button.svelte';
	import HomeMenu from '$lib/components/menu/home.svelte';
	const callbackUrl = env.PUBLIC_AUTH_ORIGIN_URL;
</script>

<header class="p-5 border-b-2 border-gray-50">
	<nav class="flex flex-row items-center justify-between container mx-auto max-w-4xl">
		<a href="/home">Home</a>

		<ul class="xl:flex lg:flex hidden flex-row items-center space-x-5">
			<a href="/home/project/create">Crear nuevo proyecto</a>

			<Button  on:click={() => signOut({ redirect: true, callbackUrl })}
				>Cerrar sesión</Button
			>
		</ul>
		<HomeMenu />
	</nav>
</header>
<slot />
