<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/omnie.json');
		const { data, error } = await res.json();

		if (error) {
			const errorObject = JSON.parse(error);
			return {
				status: errorObject.status,
				error: new Error(errorObject.message)
			};
		}

		if (data) {
			return {
				props: {
					data: data
				}
			};
		}
	}
</script>

<script>
	// Libraries
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	// Props
	export let data;

	// Variables
	let { title, content, thumbnail, ogdescription } = data;
	content = documentToHtmlString(content);
</script>

<svelte:head>
	<title>Krzysztof Rawski - Web Developer</title>
	<meta name="description" content={ogdescription} />
	<meta property="og:description" content={ogdescription} />
	<meta name="image" property="og:image" content={'https:' + thumbnail.fields.file.url} />
</svelte:head>

<header>
	<h1>{title}</h1>
</header>
<article>{@html content}</article>
<div class="actions">
	<a class="btn" href="/case-studies/">Case Studies</a>
</div>
