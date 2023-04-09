<script lang="ts">
	import type { ProjectKey } from '@prisma/client';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
	import DownArrowIcon from '../icon/down-arrow.svelte';
	import ClipboardIcon from '../icon/clipboard.svelte';
	import DeleteIcon from '../icon/delete.svelte';
	import { enhance } from '$app/forms';
	export let projectKey: ProjectKey;

	$: id = projectKey.id;
</script>

<Disclosure let:open>
	<DisclosureButton
		class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
	>
		<span class="font-bold"> {projectKey.name}</span>
		<DownArrowIcon classStyles={`${open ? 'rotate-180 transform' : ''}`} />
	</DisclosureButton>

	<DisclosurePanel class="p-5 flex flex-row items-center  space-x-5 	 min-h-32 h-full w-full">
		<div class="flex flex-col   w-full space-y-2 ">
			<label for="value">Valor actual</label>
			•••••••••••••••
		</div>

		<div class="flex flex-row items-center justify-center space-x-3">
			<ClipboardIcon text={projectKey.value} />
			<form method="post" action={`/home/project?/deleteKey`} use:enhance>
				<button type="submit" name="keyId" value={id}><DeleteIcon /></button>
			</form>
		</div>
	</DisclosurePanel>
</Disclosure>
