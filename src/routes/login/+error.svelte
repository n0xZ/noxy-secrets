<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$components/ui/button.svelte';
	import Paragraph from '$components/ui/paragraph.svelte';

	const refreshPage = () => {
		window.location.reload();
	};
</script>

<main class="h-screen flex flex-col justify-center space-y-2 container mx-auto max-w-4xl">
	<h2
		class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center"
	>
		Ups! Al parecer ocurrió un error al ingresar a tu cuenta 😥
	</h2>
	<Paragraph classStyles="text-center opacity-80">Por favor, intentalo más tarde. ({$page.error?.message})</Paragraph>
	<Button on:click={refreshPage}>Refrescar página</Button>
</main>
