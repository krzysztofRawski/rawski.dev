<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let error;
	export let status;
</script>

<header>
	<h1>Błąd!</h1>
</header>
<section>
	<p>Coś poszło nie tak, może ten komunikat powie Ci coś więcej:</p>
	<h2>{status}</h2>
	<h2>{error.message}</h2>
	<p>... jeżeli nic Ci to nie mówi skontaktuj się ze mną.</p>
</section>
