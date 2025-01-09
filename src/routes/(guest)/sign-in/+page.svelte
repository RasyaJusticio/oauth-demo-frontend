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
		<div class="flex flex-col">
			<a
				class="flex items-center justify-start align-center gap-2 rounded border border-neutral-300 bg-white hover:bg-neutral-100 shadow-lg px-3 py-2"
				href="http://127.0.0.1:8000/auth/google/redirect"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="22"
					height="22"
					viewBox="0 0 48 48"
				>
					<path
						fill="#FFC107"
						d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
					></path><path
						fill="#FF3D00"
						d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
					></path><path
						fill="#4CAF50"
						d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
					></path><path
						fill="#1976D2"
						d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
					></path>
				</svg>
				Sign In with Google
			</a>
		</div>
	</div>
</main>
