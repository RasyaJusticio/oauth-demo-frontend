<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	$effect(() => {
		const authStatus = page.url.searchParams.get('status');
        
		if (authStatus === 'success') {
            localStorage.setItem('isLoggedIn', 'true');
			goto('/');
		} else {
            localStorage.removeItem('isLoggedIn');
			goto('/sign-in');
		}
	});
</script>
