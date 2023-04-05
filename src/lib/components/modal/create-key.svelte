<script lang="ts">
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		Transition,
		TransitionChild
	} from '@rgossiaux/svelte-headlessui';
	import { page } from '$app/stores';
	import type { ActionData } from '../../../routes/home/project/[id]/$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	let id = $page.params.id;

	export let isOpen: boolean;
	export let closeModal: () => void;
	export let loading: boolean;
	export let form: ActionData;
	export let addKey: SubmitFunction;
</script>

<Transition show={isOpen}>
	<Dialog class="fixed inset-0 z-10 overflow-y-auto" open={isOpen} on:close={closeModal}>
		<DialogOverlay />

		<div class="min-h-screen px-4 flex items-center justify-center">
			<TransitionChild
				enter="ease-out duration-200"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<DialogOverlay class="fixed inset-0 bg-dark-800 bg-opacity-50" />
			</TransitionChild>

			<TransitionChild
				enter="ease-out duration-300"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<div
					class="inline-block flex  xl:w-[40rem]  flex-col justify-between items-center  w-[22rem] p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white  shadow-xl rounded-2xl h-full"
				>
					<DialogTitle as="h3" class="text-xl font-medium leading-6 mb-12">
						Agregar llave
					</DialogTitle>

					<form
						method="post"
						class="w-full"
						action="/home/project/{id}/?create-key"
						use:enhance={addKey}
					>
						<aside class="flex flex-col justify-center space-y-3 max-w-2xl w-full">
							<label class="font-medium" for="name"> Nombre de la llave </label>
							<input
								class="px-5 py-4 rounded-lg  outline-none bg-light-300"
								type="text"
								name="name"
								placeholder="MI_VARIABLE_DE_ENTORNO"
								disabled={loading}
							/>
							<span class="h-5 c-red-500"
								>{#if form?.containsErrors && form?.fields?.name}
									<p>{form?.fields?.name}</p>
								{/if}</span
							>
						</aside>
						<aside class="flex flex-col justify-center space-y-3 max-w-2xl w-full">
							<label class="font-medium" for="value"> Valor de la llave </label>
							<input
								class="px-5 py-4 rounded-lg outline-none bg-light-300"
								type="password"
								name="value"
								placeholder="HOLA!"
								disabled={loading}
							/>
							<span class="h-5 c-red-500"
								>{#if form?.containsErrors && form?.fields?.value}
									<p>{form?.fields?.value}</p>
								{/if}</span
							>
						</aside>
						<div class="flex flex-row w-full justify-center items-center space-x-5 c-white">
							<button
								type="submit"
								class="p-3  p-3 w-48 rounded-lg bg-purple-500"
								disabled={loading}>{loading ? 'Agregando...' : 'Agregar'}</button
							>
							<button
								class="p-3 w-48 rounded-lg bg-red-500 hover:opacity-70 duration-100 ease-in-out"
								disabled={loading}
								on:click={closeModal}>Cancelar</button
							>
						</div>
					</form>
				</div>
			</TransitionChild>
		</div>
	</Dialog>
</Transition>
