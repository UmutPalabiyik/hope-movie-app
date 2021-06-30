const API_KEY = "c057c067b76238e7a64d3ba8de37076e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: (page = 1) => {
    return `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  },

  fetchNowPlaying: (page = 1) => {
    return `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`;
  },

  fetchUpComing: (page = 1) => {
    return `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
  },

  fetchMovieDetails:(movieId) =>  {
    
      return `https://api.themoviedb.org/3/movie/${API_KEY}/credits?api_key=${movieId}&language=en-US`
    }
};


export default requests;