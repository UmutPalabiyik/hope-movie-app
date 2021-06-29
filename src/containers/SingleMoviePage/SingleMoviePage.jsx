import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import request from "../../requests";
import { fetchMovies } from "../../feautures/movies/moviesSlice";
import "./SingleMoviePage.scss";

const SingleMoviePage = ({ match }) => {
  const dispatch = useDispatch();

  /*  params */
  const movieId = match.params.id;
  const page = match.params.page;
  const genre = match.params.genre;
  console.log(page);

  const movies = useSelector((state) => state.movies.movies);
  const moviesStatus = useSelector((state) => state.movies.status);

  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  let content;
  if (moviesStatus === "loading") {
    <div>Loading ...</div>;
  } else if (moviesStatus === "succeeced") {
    let movie = movies.find((movie) => movie.id.toString() === movieId);
    console.log("movieee", movie);
    content = (
      <div
        className="single-movie__container"
        style={{
          backgroundImage: `url(${
            movie.backdrop_path
              ? baseImgUrl + movie.backdrop_path
              : baseImgUrl + movie.poster_path
          })`,
        }}
      >
         {movie.title}
      </div>
    );
  }

  useEffect(() => {
    if (genre === "POPULAR") {
      dispatch(fetchMovies(request.fetchPopular(page)));
    } else if (genre === "NOW PLAYING") {
      dispatch(fetchMovies(request.fetchNowPlaying(page)));
    } else if (genre === "UP COMING") {
      dispatch(fetchMovies(request.fetchUpComing(page)));
    }
  }, [dispatch, genre, page]);

  return <div className="single-movie">{content}</div>;
};

export default SingleMoviePage;
