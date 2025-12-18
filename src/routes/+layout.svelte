<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "$lib/styles/reset.css";
	import "$lib/styles/app.css";
	import "$lib/styles/utilities.css";
	import "$lib/styles/variables.css";

	import Nav from '$lib/components/+nav.svelte';
	import Footer from '$lib/components/+footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="page">
	<header></header>

	<Nav/>

	<main>
		{@render children()}
	</main>
	
	<Footer/>
</div>

<style>
	html, body {
		height: 100%;
		margin: 0;
	}

	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;     /* pushes footer to bottom when content is short */
	}
</style>