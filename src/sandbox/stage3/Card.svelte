<script>
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";

  import Button from "../../components/Button.svelte";
  import Span from "../../components/Span.svelte";

  export let id = Date.now();
  export let title = "";
  export let rate = 1;
  export let seen = false;

  const dispatch = createEventDispatcher();

  function toggleSeen() {
    dispatch("toggleseen", id);
  }

  function changeRate(e) {
    const newRate = Number(e.target.value);
    dispatch("changerate", { id, rate: newRate });
  }

  function increaseRate(e) {
    const newRate = rate++;
    dispatch("changerate", { id, rate });
  }

  function decreaseRate(e) {
    const newRate = rate--;
    dispatch("changerate", { id, rate });
  }
</script>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem auto;
    max-width: 500px;
  }

  header,
  footer {
    padding: 1rem;
  }

  header {
    padding-bottom: 0.5rem;
  }

  h1 {
    text-align: center;
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  .input {
    display: inline-block;
    width: 30px;
    text-align: center;
  }

  .rate > * {
    margin: 0 8px;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0.5rem;
  }
</style>

<article in:fade out:fly={{ x: 600, duration: 300 }}>
  <header>
    <h1>{title}</h1>
  </header>
  <footer>
    <Button mode={seen ? '' : 'outline'} on:click={toggleSeen}>
      {!seen ? 'Not seen' : 'Seen'}
    </Button>
    <div class="rate">
      <Button mode="outline" disabled={rate === 1} on:click={decreaseRate}>
        -
      </Button>
      <div class="input">
        <Span value={rate} depth={10} />
      </div>
      <Button mode="outline" disabled={rate === 10} on:click={increaseRate}>
        +
      </Button>
    </div>
  </footer>
</article>
