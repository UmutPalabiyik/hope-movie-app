import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useHistory } from "react-router-dom";

import { fetchMovies, handleCurrentPage } from "../../feautures/movies/moviesSlice";
import Card from "../Card/Card";
import Slider from "../UI/Slider/Slider";
import Navigation from "../Navigations/Navigation";

import "./MoviesList.scss";
import request from "../../requests";

const MoviesList = () => {
  const dispatch = useDispatch();


  // Handle movies states
  const moviesStatus = useSelector((state) => state.movies.status);
  const moviesState = useSelector((state) => state.movies.movies);
  const moviesError = useSelector((state) => state.movies.error);
  const moviesHeading = useSelector((state) => state.movies.moviesHeading); // It's for pagination
  const moviesCurrentPage = useSelector(state => state.movies.currentPage);


  let history = useHistory();

  // Handle header input
  const inputValue = useSelector((state) => state.movies.inputValue);


  // Movies according input values
  const filteredMovie = moviesState.filter((movie) =>
    movie.original_title.toLowerCase().includes(inputValue)
  );

  // Handle page number
  const handlePageNumber = (nexPage) => {

    dispatch(handleCurrentPage(Math.max(1, Math.min(moviesCurrentPage + nexPage, 10))))
  };

  // Handle pagination
  useEffect(() => {
      console.log("Heading değişti")
    if (moviesHeading === "POPULAR") {
      dispatch(fetchMovies(request.fetchPopular(moviesCurrentPage)));
    } else if (moviesHeading === "NOW PLAYING") {
      dispatch(fetchMovies(request.fetchNowPlaying(moviesCurrentPage)));
    } else if (moviesHeading === "UP COMING") {
      dispatch(fetchMovies(request.fetchUpComing(moviesCurrentPage)));
    } 
    
  }, [moviesCurrentPage, dispatch, moviesHeading]);

  



  useEffect(() => {
    if (moviesStatus === "idle") {
      dispatch(fetchMovies(request.fetchPopular()));
    }
  }, [dispatch, moviesStatus]);

  let content;

  if (moviesStatus === "loading") {
     content= (<div>selamlar</div>);
  } else if (moviesStatus === "succeeced") {
    content = (
      <div className="movies__container">
        <BiLeftArrow
          className="movies__arrow movies__arrow--left"
          onClick={() => {
            handlePageNumber(-1)
            history.push(`/page/${(() => Math.max(1, Math.min(moviesCurrentPage - 1, 10)))() }`)
          }}
        />
        {filteredMovie.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
        <BiRightArrow
          className="movies__arrow movies__arrow--right"
          onClick={() => {
            handlePageNumber(1)
            history.push(`/page/${(() => Math.max(1, Math.min(moviesCurrentPage + 1, 10)))() }`)
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
      <Navigation />
      {content}
    </div>
  );
};

export default MoviesList

