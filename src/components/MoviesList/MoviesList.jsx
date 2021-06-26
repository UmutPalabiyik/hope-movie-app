import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../feautures/movies/moviesSlice";
import Card from "../Card/Card";
import Slider from "../UI/Slider/Slider"
import "./MoviesList.scss";
import request from "../../requests";

const MoviesList = () => {
  const dispatch = useDispatch();

  /* Handle movies */
  const moviesStatus = useSelector((state) => state.movies.status);
  const moviesState = useSelector((state) => state.movies.movies);
  const moviesError = useSelector((state) => state.movies.error);

  /* Handle header input  */
  const inputValue = useSelector((state) => state.movies.inputValue);

  /*  Handle movies heading */
  const moviesMoviesHeading = useSelector(
    (state) => state.movies.moviesHeading
  );

  const filteredMovie = moviesState.filter((movie) =>
    movie.original_title.toLowerCase().includes(inputValue)
  );

  useEffect(() => {
    if (moviesStatus === "idle") {
      dispatch(fetchMovies(request.fetchPopular));
    }
  }, [dispatch, moviesStatus]);

  let content;

  if (moviesStatus === "loading") {
    <div>selamlar</div>;
  } else if (moviesStatus === "succeeced") {
    content = (
      <div className="movies__container">
        {filteredMovie.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
    );
  } else if (moviesStatus === "failed") {
    content = <div>{moviesError}</div>;
  }

  return (
    <div className="movies">
      <div className="movies__heading">{moviesMoviesHeading}</div>
      <Slider />
      {content}
    </div>
  );
};

export default MoviesList;
