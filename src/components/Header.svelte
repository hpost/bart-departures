<script>
	import { direction } from '../stores.js'
	import Stations from './Stations.svelte'
	import ThemeToggle from './ThemeToggle.svelte'
	import IconButton from './IconButton.svelte'

	function handleDirectionToggle() {
		direction.update(dir => dir === 's' ? 'n' : 's')
	}
</script>

<header>
	<Stations/>
	<div>
		<IconButton icon="fa-compass" title="Direction (North/South)" on:click={handleDirectionToggle} toggled={$direction === 's'}/>
		<ThemeToggle/>
	</div>
</header>

<style>
	header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: var(--s1);
		color: #aaa;
	}
	div {
		display: flex;
		flex-flow: row nowrap;
	}
</style>