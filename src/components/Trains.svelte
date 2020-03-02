<script>
  import { onInterval } from '../utils.js'
  import { fetchDepartures } from '../services/bart.js'
  import LoadingIndicator from './LoadingIndicator.svelte'
  import Train from './Train.svelte'

  export let station
  export let direction

  let interval
  let promise

  $: {
    promise = doFetch(station, direction)
    clearInterval(interval)
    interval = onInterval(() => {
      promise = doFetch(station, direction)
    }, 30 * 1000)
  }

  function doFetch(station, direction) {
    console.log(`fetching departures for ${station} ${direction === 'n' ? 'Northbound' : 'Southbound'}`)
    return fetchDepartures(station, direction)
  }
</script>

<div>
  {#await promise}
    <LoadingIndicator/>
  {:then departures}
    {#if departures}
      {#each departures as departure}
        <Train destination={departure.destination} estimates={departure.estimate}/>
      {/each}
    {:else}
      <p>no trains</p>
    {/if}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

<style>
  div {
    display: grid;
    gap: var(--s1);
  }
  @media all and (min-width: 1400px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
