<script lang="ts">
	import { goto } from '$app/navigation';
	import axiosClient from '$lib/axios';
	import axios from 'axios';

	type ErrorsResponse = {
		message?: string;
		email?: string | string[];
		password?: string | string[];
	};

	let errors = $state({
		message: undefined,
		email: undefined,
		password: undefined
	} as ErrorsResponse);

	async function login(event: SubmitEvent) {
		event.preventDefault();

		const formElement = event.target as HTMLFormElement;
		const formData = new FormData(formElement);

		try {
			await axiosClient.post('auth/login', formData);

			localStorage.setItem('isLoggedIn', 'true');
			goto('/');
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const data = error.response?.data.data;
				if (data) {
					if (data.errors) {
						const errorsData = data.errors as ErrorsResponse;

						if (errorsData.message) {
							errors.message = errorsData.message;
						}

						if (errorsData.email) {
							errors.email = errorsData.email;
						}

						if (errorsData.password) {
							errors.password = errorsData.password;
						}
					}
				}
			}
		}
	}
</script>

<main class="grid h-screen place-items-center bg-neutral-100">
	<div class="flex flex-col gap-4">
		<h1 class="text-center text-5xl">Sign In</h1>
		<div class="w-96 rounded bg-white p-6 shadow-md">
			<form class="flex flex-col gap-3" onsubmit={login}>
				<div class="flex flex-col">
					<label for="email">Email</label>
					<input
						type="email"
						name="email"
						class="form-input rounded"
						placeholder="myemail@gmail.com"
						required
					/>
					<p class="text-sm text-red-600">{errors.email}</p>
				</div>
				<div class="flex flex-col">
					<label for="password">Password</label>
					<input type="password" name="password" class="form-input rounded" required />
					<p class="text-sm text-red-600">{errors.password}</p>
				</div>
				<div class="flex flex-col">
					<p class="text-sm text-red-600">{errors.message}</p>
					<button type="submit" class="rounded bg-blue-500 py-1.5 text-white hover:bg-blue-600"
						>Sign In</button
					>
				</div>
				<div>
					<p>
						Don't yet have an account?
						<a href="/sign-up" class="text-blue-600 hover:text-blue-800">Create one now</a>
					</p>
				</div>
			</form>
		</div>
	</div>
</main>
