<script lang="ts">
	import { goto } from '$app/navigation';

	let { children } = $props();

	$effect(() => {
		if (localStorage.getItem('isLoggedIn')) {
			goto('/');
		}
	});
</script>

{@render children()}
