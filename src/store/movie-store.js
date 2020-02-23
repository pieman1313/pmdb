import { writable } from "svelte/store";

const movies = writable([]);

const movieStore = {
  subscribe: movies.subscribe,

  fetchMovies: () => {
    return fetch("/movies.json")
      .then(response => {
        return response.json();
      })
      .then(results => {
        movies.set(results);
      })
      .catch(e => {
        console.log(e);
      });
  },

  updateMovieRate: (id, rate) => {
    movies.update(items => {
      const movieIndex = items.findIndex(i => i.id === id);
      const updatedMovie = { ...items[movieIndex], rate };
      const updatedMovies = [...items];
      updatedMovies[movieIndex] = updatedMovie;
      return updatedMovies;
    });
  },

  toggleSeen: id => {
    movies.update(items => {
      const updatedMovie = { ...items.find(m => m.id === id) };
      updatedMovie.seen = !updatedMovie.seen;
      const movieIndex = items.findIndex(m => m.id === id);
      const updatedMovies = [...items];
      updatedMovies[movieIndex] = updatedMovie;
      return updatedMovies;
    });
  },

  performanceTest: (length = 1000)=>{
    return Promise.resolve(movies.set(Array.apply(null, Array(length)).map((value, index)=>{
      return {
        id: index,
        title: index,
        rate: 7,
        seen: false
      }
    })));
  }
};

export default movieStore;
