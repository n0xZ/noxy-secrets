<script>
	import { enhance } from '$app/forms';
	import HomeMenu from '$lib/components/menu/home.svelte';
</script>

<header class="p-5 border-b-2 border-gray-50 ">
	<nav
		class="flex flex-row items-center justify-between container mx-auto max-w-3xl  font-jost xl:text-xl text-lg"
	>
		<a href="/home">Home</a>

		<ul class="xl:flex lg:flex hidden flex-row items-center space-x-5 ">
			<a href="/home/project/create">Crear nuevo proyecto</a>
			<li>
				<form method="post" action="/home/?logout" use:enhance>
					<button
						class="p-3 rounded-lg bg-violet-400 c-white font-bold"
						type="submit"
						value="LOGOUT"
					>
						Cerrar sesión
					</button>
				</form>
			</li>
		</ul>
				<HomeMenu/>
	</nav>
</header>
<slot />
