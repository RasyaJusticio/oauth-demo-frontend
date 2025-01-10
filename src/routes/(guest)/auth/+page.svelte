<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import axiosClient from '$lib/axios';

	async function verifyAuthCode() {
		const authCode = page.url.searchParams.get('code');
        
		if (authCode) {
			try {
				await axiosClient.post('auth/google/exchange', { code: authCode });
				localStorage.setItem('isLoggedIn', 'true');
				goto('/');
			} catch (error) {
				console.error(error)
				goto('/sign-in');
			}
		} else {
			goto('/sign-in');
		}
	}

	$effect(() => {
		verifyAuthCode();
	});
</script>
