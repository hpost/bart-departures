<script>
  import IconButton from './IconButton.svelte'

  function handleThemeToggle() {
    // add class that transitions everything
    document.documentElement.classList.add('color-theme-in-transition')
    // toggle between light and dark theme
    const theme = document.documentElement.getAttribute('data-theme')
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark')
    // remove transition class afterwards
    window.setTimeout(() => {
      document.documentElement.classList.remove('color-theme-in-transition')
    }, 1000)
  }
</script>

<IconButton icon="fa-adjust" title="Switch Theme" on:click={handleThemeToggle}/>
