<script>
	import Stations from './Stations.svelte'
	import ThemeToggle from './ThemeToggle.svelte'
</script>

<header>
	<Stations/>
	<div>
		<ThemeToggle/>
	</div>
</header>

<style>
	header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: baseline;
		color: #aaa;
	}
	div {
		display: flex;
		flex-flow: row nowrap;
	}
</style>