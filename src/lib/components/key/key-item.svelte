<script lang="ts">
	import type { ProjectKey } from '@prisma/client';

	import ClipboardIcon from '../icon/clipboard.svelte';
	import DeleteIcon from '../icon/delete.svelte';
	import { enhance } from '$app/forms';
	import { AccordionContent, AccordionItem, AccordionTrigger } from '$components/ui/accordion';
	import Label from '$components/ui/label.svelte';

	export let projectKey: ProjectKey;

	$: id = projectKey.id;
</script>

<AccordionItem value={'item' + projectKey.name} class="w-full">
	<AccordionTrigger class="font-bold">{projectKey.name}</AccordionTrigger>
	<AccordionContent class="flex flex-row justify-between items-center w-full">
		<Label for="value">Valor actual: •••••••••••••••</Label>

		<form
			method="post"
			action={`/home/project?/deleteKey`}
			use:enhance
			class="flex flex-row items-center space-x-2"
		>
			<ClipboardIcon text={projectKey.value} />
			<button type="submit" name="keyId" value={id}><DeleteIcon /></button>
		</form>
	</AccordionContent>
</AccordionItem>
