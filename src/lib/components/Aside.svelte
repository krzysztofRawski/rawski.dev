<script>
	// Libraries
	import Account from 'svelte-material-icons/Account.svelte';
	import ChevronDown from 'svelte-material-icons/ChevronDown.svelte';

	// Components
	import Modal from './Modal.svelte';

	// Props
	export let data;

	// Variables
	let { firstName, lastName, avatar, technologies } = data;
	let showModal = false;
</script>

<aside>
	<div class="avatar">
		<a href="/"><img src={'https:' + avatar.fields.file.url} alt={avatar.fields.title} /></a>
		<button class="btn" on:click={() => (showModal = true)} aria-label="Pokaż dane kontaktowe"
			><Account size={'2rem'} /></button
		>
	</div>
	<div class="description">
		<article class="json">
			<p class="yellow">{'{'}</p>
			<p class="indent-one">
				"<span class="green">imię</span>" : "<span class="blue">{firstName}</span>",
			</p>
			<p class="indent-one">
				"<span class="green">nazwisko</span>" : "<span class="blue">{lastName}</span>",
			</p>
			<div class="indent-one">
				"<span class="green">technologie</span>" : <span class="purple">{'['}</span> <br />
				{#each technologies as skill}
					<p class="indent-two">
						"<span class="blue">{skill}</span>",
						<br />
					</p>
				{/each}
				<span class="purple">{']'}</span>
			</div>
			<p class="yellow">{'}'}</p>
		</article>
	</div>
	<div class="bounce">
		<ChevronDown size={'2rem'} />
	</div>
</aside>
{#if showModal}
	<Modal on:hideModal={() => (showModal = false)} {data} />
{/if}

<style>
	aside {
		grid-area: aside;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-top: 2rem;
	}
	.avatar {
		position: relative;
	}
	img {
		max-width: 250px;
		border-radius: 100%;
		box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.2);
	}
	button {
		position: absolute;
		top: 70%;
		left: 70%;
		width: 70px;
		height: 70px;
		padding: 0;
		border-radius: 100%;
	}
	.bounce {
		width: fit-content;
		margin: 0 auto;
	}
	.json {
		line-height: 0.7rem;
	}

	.yellow {
		color: var(--yellow);
	}
	.green {
		color: var(--green);
	}
	.blue {
		color: var(--blue);
	}
	.purple {
		color: var(--purple);
	}
	.indent-one {
		margin-left: 1rem;
	}
	.indent-two {
		margin-left: 2rem;
	}
</style>
