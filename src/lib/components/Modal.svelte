<script>
	// Libraries
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Close from 'svelte-material-icons/Close.svelte';
	import GithubCircle from 'svelte-material-icons/GithubCircle.svelte';
	import Linkedin from 'svelte-material-icons/Linkedin.svelte';

	// Props
	export let data;

	// Variables
	const dispatch = createEventDispatcher();
	let { firstName, lastName, avatar, email, github, linkedIn } = data;
</script>

<div
	class="left"
	in:fly={{ x: -500, duration: 500 }}
	out:fly={{ x: -500, duration: 500, delay: 200 }}
/>
<div class="modal">
	<div class="content" in:fade={{ duration: 200, delay: 500 }} out:fade={{ duration: 200 }}>
		<div class="actions">
			<button
				on:click={() => {
					dispatch('hideModal');
				}}
				aria-label="Ukryj szczegóły"
			>
				<Close size={'2rem'} />
			</button>
		</div>
		<img src={'https:' + avatar.fields.file.url} alt={avatar.fields.title} />
		<h2>{firstName} {lastName}</h2>
		<p>{email}</p>
		<div class="links">
			<a href={linkedIn}>
				<Linkedin size={'2rem'} />
			</a>
			<a href={github}>
				<GithubCircle size={'2rem'} />
			</a>
		</div>
	</div>
</div>
<div
	class="right"
	in:fly={{ x: 500, duration: 500 }}
	out:fly={{ x: 500, duration: 500, delay: 200 }}
/>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
	}
	.content {
		position: relative;
		background-color: var(--bg-color);
		padding: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.actions {
		display: flex;
		justify-content: flex-end;
		width: 100%;
	}
	img {
		max-width: 250px;
		border-radius: 100%;
		box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.2);
	}
	h2 {
		margin-bottom: 0.5rem;
	}
	p {
		margin-top: 0;
	}
	.links {
		display: flex;
		gap: 0.5rem;
	}
	.left {
		background-color: var(--accent-color);
		position: fixed;
		top: 0;
		left: -50%;
		width: 100%;
		height: 100vh;
		z-index: 1;
		transform: skew(-10deg);
	}
	.right {
		background-color: black;
		position: fixed;
		bottom: 0%;
		right: -50%;
		width: 100%;
		height: 100vh;
		z-index: 1;
		transform: skew(-10deg);
	}
	/* Desktop */
	@media only screen and (min-width: 900px) {
		.content {
			padding: 2rem 4rem;
		}
	}
</style>
