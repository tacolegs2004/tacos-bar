<script lang="ts">
	import type { UserType } from '$lib/types/UserType';

	export let data: UserType;
</script>

<main class="flex flex-col flex-1 p-4">
	<section class="grid grid-cols-1 lg:grid-cols-2">
		<h1>Projects</h1>
		{data.followers}
	</section>
	<section />
	<section />
</main>

<!-- <Form /> -->
