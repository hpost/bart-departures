<script>
  import { createEventDispatcher } from 'svelte'

  export let title
  export let icon
  export let toggled = false
  export let hidden = false

  const dispatch = createEventDispatcher()
  const handleClick = () => {
    toggled = !toggled
    dispatch('click', { toggled })
  }
</script>

<button class:toggled class:hidden on:click={handleClick} {title}>
  <i class="fas {icon}"></i>
</button>

<style>
  button {
    font-size: 1rem;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    color: currentcolor;
    cursor: pointer;
    padding: 0.25em 0.5em;
    margin-left: 0.25em;
    transition: transform 300ms ease-in-out;
  }
  button:hover {
    background-color: var(--background-color-secondary);
    color: var(--text-color-primary);
  }
  .toggled {
    transform: rotate(180deg);
  }
  .hidden {
    display: none;
  }
</style>
