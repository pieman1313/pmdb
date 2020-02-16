<script>
  import { onMount } from "svelte";
  import Layout from "../../components/Layout.svelte";
  import Header from "../..//components/Header.svelte";
  import Footer from "../../components/Footer.svelte";
  import Card from "../../components/Card.svelte";
  import Filter from "./Filter.svelte";
  import Loading from "../../components/Loading.svelte";
  import movieStore from "../../store/movie-store";

  let loading = true;
  let filter = 0;
  let movies = [];

  $: filteredMovies = movies.filter(movie => {
    if (filter !== 1) {
      return true;
    } else {
      return !movie.seen;
    }
  });

  movieStore.subscribe(allMovies => {
    movies = allMovies;
  });

  function filterChange(e) {
    filter = e.detail;
  }

  onMount(() => {
    movieStore.fetchMovies().finally(() => {
      loading = false;
    });
  });

  function toggleMovieSeen(e) {
    movieStore.toggleSeen(e.detail);
  }

  function changeRate(e) {
    movieStore.updateMovieRate(e.detail.id, e.detail.rate);
  }
</script>

<style>
  .movies {
    overflow: hidden;
  }

  .filter {
    margin: 1rem;
  }

  h2 {
    text-align: center;
  }
</style>

<Layout>
  <div slot="header">
    <Header />
  </div>
  {#if loading}
    <Loading />
  {:else}
    <div class="content">
      <div class="filter">
        <Filter on:select={filterChange} selectedButton={filter} />
      </div>
      <div class="movies">
        {#each filteredMovies as movie, i (movie.id)}
          <Card
            id={movie.id}
            title={movie.title}
            rate={movie.rate}
            seen={movie.seen}
            on:toggleseen={toggleMovieSeen}
            on:changerate={changeRate} />
        {:else}
          <h2>No movies available!</h2>
        {/each}
      </div>
    </div>
  {/if}
  <div slot="footer">
    <Footer />
  </div>
</Layout>
