<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/case-studies.json');
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
				page: data.page,
				caseStudies: data.caseStudies
			}
		};
	}
</script>

<script>
	// Libraries
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	// Components
	import CaseStudyItem from '$lib/components/CaseStudyItem.svelte';

	// Props
	export let page;
	export let caseStudies;

	// Logic
	let { title, content, ogdescription } = page;
	content = documentToHtmlString(content);
</script>

<svelte:head>
	<title>Krzysztof Rawski - Lista Case Studies</title>
	<meta name="description" content={ogdescription} />
</svelte:head>

<header>
	<h1 id="case-study">{title}</h1>
</header>
<section>{@html content}</section>
<section class="grid">
	{#each caseStudies as item}
		<CaseStudyItem {item} />
	{/each}
</section>
<div class="actions">
	<a class="btn" href="/">Wróć</a>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin-bottom: 2rem;
	}
	/* Tablet */
	@media only screen and (min-width: 900px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	/* Desktop */
	@media only screen and (min-width: 1300px) {
		.grid {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
