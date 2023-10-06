<script lang="ts">
	import type { UserType } from '$lib/types/UserType';

	export let data: UserType;
</script>

<main class="flex flex-col p-4">
	<section class="mt-4 flex flex-col justify-center items-center">
		<div class="flex flex-col justify-center items-center">
			<img
				class="rounded-full w-32 h-32 sm:w-52 sm:h-52 md:w-64 md:h-64"
				src={data.avatar_url}
				alt="Taco"
			/>
			<div class="flex flex-col justify-center items-center mt-4 pt-12 mr-24">
				<h1 class="ml-20">{data.name}</h1>
				<blockquote class="text-slate-700 ml-48 md:ml-20 mt-6 italic font-serif flex-wrap">
					{data.bio}
				</blockquote>
			</div>
		</div>
	</section>
	<section />
	<section />
</main>

<!-- <Form /> -->
