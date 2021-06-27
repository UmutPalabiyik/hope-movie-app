import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../feautures/movies/moviesSlice";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import Card from "../Card/Card";
import Slider from "../UI/Slider/Slider";
import Navigation from "../Navigations/Navigation";

import "./MoviesList.scss";
import request from "../../requests";

const MoviesList = () => {

  // current movies topic
  const [currentTopicLink, setCurrentTopicLink] = useState();

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

  // movies according input values
  const filteredMovie = moviesState.filter((movie) =>
    movie.original_title.toLowerCase().includes(inputValue)
  );

  // fetch top rated movies for slider
  useEffect(() => {
    if (moviesStatus === "idle") {
      dispatch(fetchMovies(request.fetchTopRated));
    }
  }, [dispatch, moviesStatus]);

  let content;

  if (moviesStatus === "loading") {
    <div>selamlar</div>;
  } else if (moviesStatus === "succeeced") {
    content = (
      <div className="movies__container">
        <BiLeftArrow className="movies__arrow movies__arrow--left" />
        {filteredMovie.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
        <BiRightArrow
          className="movies__arrow movies__arrow--right"
          onClick={() => {
            console.log("selam cano");
          }}
        />
      </div>
    );
  } else if (moviesStatus === "failed") {
    content = <div>{moviesError}</div>;
  }

  return (
    <div className="movies">
      <Slider />
      <div className="movies__heading">{moviesMoviesHeading}</div>
      <Navigation />
      {content}
    </div>
  );
};

export default MoviesList;
