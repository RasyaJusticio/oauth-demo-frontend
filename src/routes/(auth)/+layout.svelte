<script lang="ts">
	import { goto } from '$app/navigation';
	import axiosClient from '$lib/axios';

	let { children } = $props();
	let isLoggedIn = $state(false);

	$effect(() => {
		if (!localStorage.getItem('isLoggedIn')) {
			goto('/sign-in');
		} else {
			isLoggedIn = true;
		}
	});

	async function logout() {
		try {
			await axiosClient.post('auth/logout');
		} catch (error) {
			//
		} finally {
			localStorage.removeItem('isLoggedIn');
			goto('/sign-in');
		}
	}
</script>

{#if isLoggedIn}
	<header class="sticky top-0 z-50 flex items-center bg-blue-500 px-4 py-3 text-white">
		<a href="/">
			<h1 class="text-xl font-bold">OAuth Demo</h1>
		</a>

		<button class="ml-auto hover:text-neutral-200" onclick={logout}> Logout </button>
	</header>
	{@render children()}
{/if}
