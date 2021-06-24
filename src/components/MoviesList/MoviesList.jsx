import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../feautures/movies/moviesSlice";
import Card from "../Card/Card";
import "./MoviesList.scss";

const MoviesList = () => {
  const dispatch = useDispatch();
  const moviesStatus = useSelector((state) => state.movies.status);
  const moviesState = useSelector((state) => state.movies.movies);
  const moviesError = useSelector((state) => state.movies.error);

  useEffect(() => {
    if (moviesStatus === "idle") {
      dispatch(fetchMovies("selamlar selamlar"));
    }
  }, [dispatch, moviesStatus]);

  let content;

  if (moviesStatus === "loading") {
  } else if (moviesStatus === "succeeced") {
    content = (
      <div className="movies__container">
        {moviesState.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
    );
  } else if (moviesStatus === "failed") {
    content = <div>{moviesError}</div>;
  }

  return (
    <div className="movies">
      <div className="movies__heading">TRENDING</div>
      {content}
    </div>
  );
};

export default MoviesList;
