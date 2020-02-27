<script>
	import { selectedStation, direction } from './stores.js'
	import Header from './components/Header.svelte'
	import Trains from './components/Trains.svelte'
	import Footer from './components/Footer.svelte'
</script>

<div class="content">
	<Header/>
	<main>
		<!-- TODO two columns, northbound and soutbound, below each other on small screens -->
		<h4>{$direction === 's' ? 'Southbound' : 'Nortbound'}</h4>
		<Trains station={$selectedStation} direction={$direction} />
	</main>
</div>
<Footer/>

<style>
	:global(html, body) {
		height: 100%;
	}
	:global(body) {
		display: flex;
		flex-direction: column;
	}
	.content {
		flex: 1 0 auto;
	}

	h4 {
		color: var(--text-color-secondary);
		border-bottom: 2px dashed var(--text-color-secondary);
		padding-bottom: var(--s-3);
		margin-bottom: var(--s1);
	}
</style>