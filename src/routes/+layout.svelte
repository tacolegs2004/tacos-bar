<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	let y: number;
	let innerWidth = 0;
	let innerHeight = 0;

	export function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div>
	<Header />
	<!-- <Main /> -->
	<Footer />
</div>

<slot />
