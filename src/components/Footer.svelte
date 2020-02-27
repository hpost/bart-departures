<script>
  import FullscreenToggle from './FullscreenToggle.svelte'
</script>

<footer>
	<p>
		Made by a public transit rider.
    <a href="https://github.com/hpost/bart-departures" target="_blank" rel="noopener" title="Source on GitHub">
      <i class="fab fa-github"></i>
    </a>
	</p>
	<div>
    <FullscreenToggle/>
	</div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 0.8rem;
    color: var(--text-color-secondary);
    padding: var(--s0) var(--s1);
  }
</style>
