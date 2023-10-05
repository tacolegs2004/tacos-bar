<script lang="ts">
	export let tabs = [
		{ name: 'Home', link: '/', id: 1 },
		{ name: 'Projects', link: '#projects', id: 2 },
		{ name: 'Blog', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', id: 3 },
		{ name: 'About me', link: '#about', id: 4 }
	];

	// $: isToggled = false;
</script>

<header
	class=" z-[10] top-4 p-4 bgNav border-b-slate-800 duration-200 flex items-center justify-between"
>
	<div>
		<p class="font-bold text-lg">
			<a href="/" aria-labelledby="Taco's Bar">Taco's bar</a>
		</p>
	</div>
	<div>
		<div class="sm:flex gap-8 hidden items-center">
			{#each tabs as tab}
				<a href={tab.link}>
					<button
						class="text-lg hover:text-violet-400 duration-200"
						aria-labelledby={tab.name}
						tabindex={tab.id}
					>
						{tab.name}
					</button>
				</a>
			{/each}
		</div>
	</div>
	<button
		class="bg-gradient-to-r from-violet-500 to-violet-500 hover:from-violet-400 hover:to-violet-600 cursor-auto p-2 rounded-lg text-slate-200 duration-200 border-spacing-2"
		>Get in touch</button
	>
	<!-- {#if isToggled === true}
		<Form />
	{:else}
		{null}
	{/if} -->
</header>
