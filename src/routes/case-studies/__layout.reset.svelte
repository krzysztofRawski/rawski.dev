<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('../user.json');
		const { data, error } = await res.json();

		if (error) {
			const errorObject = JSON.parse(error);
			return {
				status: errorObject.status,
				error: new Error(errorObject.message)
			};
		}

		return {
			props: {
				data: data
			}
		};
	}
</script>

<script>
	// Libraries
	import '../../css/global.css';

	// Components
	import Aside from '$lib/components/Aside.svelte';

	// Props
	export let data;
</script>

<div class="page">
	<Aside {data} />
	<main>
		<slot />
	</main>
</div>

<style>
	.page {
		width: 100%;
		min-height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		grid-template-areas:
			'main'
			'aside';
	}
	@media only screen and (min-width: 900px) {
		.page {
			grid-template-columns: 1fr 2fr;
			grid-template-rows: auto;
			grid-template-areas: 'aside main';
		}
	}
</style>
