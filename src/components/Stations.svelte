<script>
  import { stations, selectedStation } from '../stores.js'
  import { fetchStations } from '../services/bart.js'
  import { onMount } from 'svelte'

  onMount(async () => {
    $stations = await fetchStations()
  })
</script>

<select title="Departure Station" bind:value={$selectedStation}>
  {#each $stations as station}
    <option value={station.abbr} selected={$selectedStation === station.abbr}>
      {station.name}
    </option>
  {/each}
</select>

<style>
  select {
    padding: 0.25em 0.25em 0.25em 0;
    padding-bottom: 0.25em;
    border: 0;
    border-bottom: 2px solid currentcolor;
    border-radius: 0;
    font-weight: bold;
    color: var(--text-color-primary);
    background-color: var(--background-color);
  }
  select:focus, select:active {
    outline: 0;
  }
</style>
