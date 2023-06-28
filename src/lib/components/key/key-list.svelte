<script lang="ts">
	import type { ProjectKey } from '@prisma/client';
	import KeyItem from './key-item.svelte';
	import { Accordion } from '$components/ui/accordion/';

	export let projectKeys: ProjectKey[];
</script>

<article class="w-full px-4 pt-16">
	<Accordion type="single" collapsible class="w-full">
		{#each projectKeys as projectKey}
			<KeyItem {projectKey} />
		{/each}
	</Accordion>
</article>
