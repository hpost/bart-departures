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
  <h2>
    <span style="--train-color:{color}"></span>
    {destination}
  </h2>

</div>

<style>
  h2 {
    margin-left: 1.5em;
    color: var(--text-color-primary);
  }
  span {
    position: absolute;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    margin-left: -1.5em;
    border-radius: 0.25em;
    background-color: var(--train-color);
  }
</style>
