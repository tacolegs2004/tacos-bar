<script lang="ts">
	export let y: number;

	export let tabs = [
		{ name: 'Home', link: '/' },
		{ name: 'Projects', link: '#projects' },
		{ name: 'About me', link: '#about' },
		{ name: 'Blog', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
	];
</script>

<header class="sticky px-2 z-[10] top-4 duration-200 flex items-center justify-between">
	<div>
		<p class="font-bold text-lg">Taco's bar</p>
	</div>
	<div>
		<div class="sm:flex gap-4 hidden items-center">
			{#each tabs as tab}
				<a class="text-lg hover:text-violet-600 duration-200" href={tab.link}>{tab.name + ' '}</a>
			{/each}
		</div>
	</div>
	<button
		class="bg-gradient-to-r from-violet-500 to-violet-600 cursor-auto p-2 rounded-lg text-slate-200 border-spacing-2"
		>Get in touch</button
	>
</header>
