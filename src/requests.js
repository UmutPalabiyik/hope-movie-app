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
  fetchPopular : `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNowPlaying : `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpComing: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
};


export default requests;