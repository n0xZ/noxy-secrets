<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';

	export let text: string;
	const addToClipboard = async () => {
		await navigator.clipboard.writeText(text);
		toast.push('Variable de entorno agregada al clipboard!', {
			theme: {

				'--toastColor': 'white',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A'
			}
		});
	};
</script>

<button type="button" on:click={addToClipboard}>
	<svg
		fill="none"
		stroke-width="0"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		viewBox="0 0 24 24"
		height="1em"
		width="1em"
		class="h-6 w-6 cursor-pointer  "
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0 3-3m-3 3 3 3"
		/>
	</svg>
</button>
