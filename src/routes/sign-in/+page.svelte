<script lang="ts">
</script>

<main class="grid h-screen place-items-center bg-neutral-100">
	<div class="flex flex-col gap-4">
		<h1 class="text-center text-5xl">Sign In</h1>
		<div class="w-96 rounded bg-white p-6 shadow-md">
			<form class="flex flex-col gap-3">
				<div class="flex flex-col">
					<label for="email">Email</label>
					<input
						type="email"
						name="email"
						class="form-input rounded"
						placeholder="myemail@gmail.com"
					/>
				</div>
				<div class="flex flex-col">
					<label for="password">Password</label>
					<input type="password" name="password" class="form-input rounded" />
				</div>
				<div class="flex flex-col">
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
