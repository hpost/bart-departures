<script>
  export let minutes
</script>

<span>
  {minutes}
</span>

<style>
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-color-accent);
  }
  span + span::before {
    content: ', ';
  }
</style>
