<svelte:options immutable={true}/>

<script>
  import Time from './Time.svelte'

  export let destination
  export let estimates
</script>

<div class="train">
  <div>
    {#each estimates as estimate}
      <Time minutes={estimate.minutes}/>
    {/each}
  </div>
  <span>
    <span class="train-color" data-color={estimates[0].hexcolor}></span>
    {destination}
  </span>
</div>

<style>
  span {
    font-size: 1.1rem;
    font-weight: 600;
    margin-left: 1.5em;
    color: var(--text-color-primary);
  }
  .train-color {
    position: absolute;
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    margin-left: -1.5em;
    border-radius: 0.25em;
    background-color: attr(color data-color);
  }
</style>
