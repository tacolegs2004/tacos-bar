<script lang="ts">
	export let tabs = [
		{ name: 'Home', link: '/' },
		{ name: 'Projects', link: '#projects' },
		{ name: 'Blog', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
		{ name: 'About me', link: '#about' }
	];
	// $: isToggled = false;
</script>

<header
	class="px-2 z-[10] top-4 pb-2 pt-4 bgNav border-b-slate-800 duration-200 flex items-center justify-between"
>
	<div>
		<p class="font-bold text-lg">
			<a href="/">Taco's bar</a>
		</p>
	</div>
	<div>
		<div class="sm:flex gap-8 hidden items-center">
			{#each tabs as tab}
				<a class="text-lg hover:text-violet-600 duration-200" href={tab.link}>{tab.name + ' '}</a>
			{/each}
		</div>
	</div>
	<button
		class="bg-gradient-to-r from-violet-500 to-violet-500 hover:from-violet-300 hover:to-violet-500 cursor-auto p-2 rounded-lg text-slate-200 border-spacing-2"
		>Get in touch</button
	>
	<!-- {#if isToggled === true}
		<Form />
	{:else}
		{null}
	{/if} -->
</header>
