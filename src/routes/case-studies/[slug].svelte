<script context="module">
	export async function load({ params, fetch }) {
		const slug = params.slug;
		const res = await fetch(`/case-studies/${slug}.json`);
		const { data, error } = await res.json();
		console.log(error);

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
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	export let data;
	let {
		title,
		shortDescription,
		thumbnail,
		description,
		technologies,
		github,
		link,
		video,
		ogdescription
	} = data;
	description = documentToHtmlString(description);
	technologies = documentToHtmlString(technologies);
</script>

<svelte:head>
	<title>Krzysztof Rawski - projekt {title}</title>
	<meta name="description" content={ogdescription} />
	<meta property="og:description" content={ogdescription} />
	<meta name="image" property="og:image" content={'https:' + thumbnail.fields.file.url} />
</svelte:head>

<header>
	<h1>{title}</h1>
	<p>{shortDescription}</p>
	<figure>
		<img src={'https:' + thumbnail.fields.file.url} alt={thumbnail.fields.title} />
	</figure>
</header>
<section>
	<h3>Opis</h3>
	<div>{@html description}</div>
</section>
<section>
	<h3>Technologie</h3>
	<div>{@html technologies}</div>
</section>

{#if video}
	<section>
		<h3>Video</h3>
		<div class="video">
			<iframe
				src={video}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</section>
{/if}

{#if github}
	<section>
		<h3>GitHub</h3>
		<a href={github}>{github}</a>
	</section>
{/if}

{#if link}
	<section>
		<h3>Live</h3>
		<a href={link}>{link}</a>
	</section>
{/if}

<div class="actions">
	<a class="btn" href="/case-studies/">Wróć</a>
</div>

<style>
	figure {
		display: flex;
		justify-content: center;
		padding: 0;
		margin: 2rem 0;
	}
	img {
		max-width: 100%;
		box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.2);
	}
	.video {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	iframe {
		width: 100%;
		aspect-ratio: 16 / 9;
	}
	a {
		word-break: break-all;
	}
	.actions {
		margin-top: 1rem;
	}
	@media only screen and (min-width: 900px) {
		img {
			max-width: 70%;
		}
		iframe {
			width: 70%;
		}
	}
</style>
