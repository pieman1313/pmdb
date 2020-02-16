<script>
  import { onMount } from "svelte";
  import Layout from "../../components/Layout.svelte";
  import Header from "../../components/Header.svelte";
  import Footer from "../../components/Footer.svelte";
  import Card from "../../components/Card.svelte";
  import Filter from "../../components/Filter.svelte";
  import Loading from "../../components/Loading.svelte";
  import movieStore from "../../store/movie-store";

  let loading = true;

  function getMovies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 0,
            title: "The Shawshank Redemption",
            rate: 7,
            seen: true
          },
          {
            id: 1,
            title: "The Godfather",
            rate: 6,
            seen: false
          }
        ]);
      }, 3000);
    });
  }

  let promise = getMovies();
  promise.finally(() => (loading = false));
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
