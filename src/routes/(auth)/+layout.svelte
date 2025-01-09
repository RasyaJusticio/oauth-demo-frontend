<script lang="ts">
	import { goto } from '$app/navigation';

	let { children } = $props();
	let isLoggedIn = $state(false);

	$effect(() => {
		if (!localStorage.getItem('isLoggedIn')) {
			goto('/sign-in');
		} else {
			isLoggedIn = true;
		}
	});
</script>

{#if isLoggedIn}
	{@render children()}
{/if}
