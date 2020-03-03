<svelte:options immutable={true}/>

<script>
  import Time from './Time.svelte'

  export let destination
  export let estimates
  let color = estimates[0].hexcolor
</script>

<div class="train">
  <div>
    {#each estimates as estimate}
      <Time minutes={estimate.minutes}/>
    {/each}
  </div>
  <span>
    <span class="train-color" style="--train-color:{color}"></span>
    {destination}
  </span>

</div>

<style>
  span {
    font-size: 0.85rem;
    font-weight: 600;
    margin-left: 1.5em;
    color: var(--text-color-primary);
  }
  .train-color {
    position: absolute;
    width: 1em;
    height: 1em;
    margin-top: 0.4em;
    margin-left: -1.5em;
    border-radius: 0.25em;
    background-color: var(--train-color);
  }
</style>
