<script>

	import Paragraph from "$components/ui/paragraph.svelte";

</script>
<svelte:head>
	<title>Bienvenido a Noxy - secrets!</title>
</svelte:head>
<header class="p-5 ">
	<nav
		class="flex flex-row items-center justify-between container mx-auto  font-jost max-w-3xl text-foreground/70"
	>
		<a href="/" class="font-bold">Noxy - secrets</a>
		<ul class="flex flex-row items-center space-x-5">
			<li>
				<a href="/login">Unete ya!</a>
			</li>
			<li />
		</ul>
	</nav>
</header>
<main
	class="h-full min-h-screen flex flex-col justify-center items-center space-y-3 container mx-auto"
>
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
		Llegó la hora de guardar los secretos de tu proyecto, de manera efectiva y segura.
	</h1>
	<Paragraph classStyles="text-center ">
		Con Noxy - secrets , guardarás todas tus variables de entorno relacionadas a tu proyecto, de
		manera eficaz, rápida y sencilla.
	</Paragraph>
	<a href="/login" class="underline">Comenzar ya!</a>
</main>
<footer class="p-5  text-center text-lg">
	<p>Powered by <a href="https://kit.svelte.dev/" class="c-orange-500">Sveltekit 🧡</a></p>
</footer>
