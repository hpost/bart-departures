<script>
  import { selectedStation, direction } from './stores.js'
  import Header from './components/Header.svelte'
  import Trains from './components/Trains.svelte'
  import Footer from './components/Footer.svelte'
</script>

<div class="content">
  <Header/>
  <main>
    <section>
      <h5>Southbound</h5>
      <Trains station={$selectedStation} direction="s" />
    </section>
    <section>
      <h5>Northbound</h5>
      <Trains station={$selectedStation} direction="n" />
    </section>
  </main>
</div>
<Footer/>

<style>
  :global(html, body) {
    height: 100%;
  }
  :global(body) {
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1 0 auto;
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--s1);
  }

  h5 {
    color: var(--text-color-secondary);
    border-bottom: 2px dashed var(--text-color-secondary);
    padding-bottom: var(--s-3);
    margin-bottom: var(--s1);
  }
</style>
