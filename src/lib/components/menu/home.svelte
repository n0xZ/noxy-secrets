<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { Transition, Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
	import { LogOutIcon, PlusIcon } from 'lucide-svelte';
	import MenuIcon from '../icon/menu.svelte';
	import Button from '$components/ui/button.svelte';
	import { env } from '$env/dynamic/public';

	const callbackUrl = env.PUBLIC_AUTH_ORIGIN_URL;
</script>

<Menu class="relative xl:hidden lg:hidden inline-block text-left">
	<div>
		<MenuButton
			class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
		>
			<MenuIcon />
		</MenuButton>
	</div>
	<Transition
		enter="transition ease-out duration-100"
		enterFrom="transform opacity-0 scale-95"
		enterTo="transform opacity-100 scale-100"
		leave="transition ease-in duration-75"
		leaveFrom="transform opacity-100 scale-100"
		leaveTo="transform opacity-0 scale-95"
	>
		<MenuItems
			class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
		>
			<div class="px-1 py-1">
				<MenuItem>
					<a
						href="/home/project/create"
						class=" p-2 inline-flex items-center space-x-2 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
					>
						<PlusIcon class="h-5 w-5" />
						<span>Crear nuevo proyecto</span>
					</a>
				</MenuItem>
				<MenuItem>
					<Button
						class="w-full flex flex-row items-center space-x-2"
						on:click={() => signOut({ redirect: true, callbackUrl })}
					>
						<LogOutIcon class="h-5 w-5" />
						<span>Cerrar sesión</span></Button
					>
				</MenuItem>
			</div>
		</MenuItems>
	</Transition>
</Menu>
