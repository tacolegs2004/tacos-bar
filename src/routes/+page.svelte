<script lang="ts">
	import type { UserType } from '$lib/types/UserType';
	import Main from '../components/Main.svelte';
	export let data: UserType;
</script>

<Main {data} />
