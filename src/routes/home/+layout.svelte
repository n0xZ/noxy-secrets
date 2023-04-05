<script>
	import { enhance } from '$app/forms';
</script>

<header class="p-5 border-b-2 border-gray-50 ">
	<nav
		class="flex flex-row items-center justify-between container mx-auto max-w-3xl  font-jost xl:text-xl text-lg"
	>
		<a href="/home">Home</a>

		<ul class="flex flex-row items-center space-x-5">
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
	</nav>
</header>
<slot />
