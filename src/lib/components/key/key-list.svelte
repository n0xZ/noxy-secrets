<script lang="ts">
	import type { ProjectKey } from '@prisma/client';
	import KeyItem from './key-item.svelte';

	export let projectKeys: ProjectKey[];

</script>

<article class="w-full px-4 pt-16">
	<div class="mx-auto w-full max-w-3xl rounded-2xl bg-neutral-50 p-2 space-y-4">
		{#each projectKeys as projectKey}
			<KeyItem {projectKey} />
		{/each}
	</div>
</article>
