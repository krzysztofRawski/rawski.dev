<script>
	export let item;

	let { title, slug, shortDescription, thumbnail, github, link, video } = item.fields;

	const url = '/case-studies/' + slug;

	let types = [];

	if (github) {
		types.push('GitHub');
	}
	if (link) {
		types.push('Live');
	}
	if (video) {
		types.push('Video');
	}
</script>

<a href={url}>
	<article>
		<div class="ribbon">
			{#each types as type}
				<span>{type}</span>
			{/each}
		</div>
		<img src={'https:' + thumbnail.fields.file.url} alt={thumbnail.fields.title} />
		<h2>{title}</h2>
		<p>{shortDescription}</p>
	</article>
</a>

<style>
	article {
		border: 1px solid var(--accent-color);
		padding: 1rem;
		margin-bottom: 0;
		position: relative;
	}
	.ribbon {
		position: absolute;
		top: 5%;
		left: 0;
		background-color: var(--accent-color);
		color: var(--bg-color);
		padding: 0.2rem 0.5rem;
		display: flex;
		gap: 0.5rem;
	}
	img {
		max-width: 100%;
	}
	h2 {
		margin-bottom: 0;
		font-size: 1.2rem;
	}
	p {
		margin: 0;
	}
	/* Tablet */
	@media only screen and (min-width: 900px) {
		h2 {
			font-size: 1rem;
		}
	}
	/* Desktop */
	@media only screen and (min-width: 1300px) {
		h2 {
			font-size: 1.2rem;
		}
	}
</style>
