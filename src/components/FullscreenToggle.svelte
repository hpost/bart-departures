<script>
  import IconButton from './IconButton.svelte'

  let isFullscreen = false
  document.documentElement.addEventListener('fullscreenchange', () => isFullscreen = document.fullscreenElement)

  function handleFullscreen() {
    document.documentElement.requestFullscreen()
  }
</script>

<IconButton icon="fa-expand" title="Fullscreen" on:click={handleFullscreen} hidden={isFullscreen}/>
