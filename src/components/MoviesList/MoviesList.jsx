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
  const dispatch = useDispatch();

  // Current Page
  const [currentPage, setCurrentPage] = useState(1);

  // Handle movies states
  const moviesStatus = useSelector((state) => state.movies.status);
  const moviesState = useSelector((state) => state.movies.movies);
  const moviesError = useSelector((state) => state.movies.error);
  const moviesHeading = useSelector((state) => state.movies.moviesHeading); // It's for pagination



  // Handle header input
  const inputValue = useSelector((state) => state.movies.inputValue);


  // Movies according input values
  const filteredMovie = moviesState.filter((movie) =>
    movie.original_title.toLowerCase().includes(inputValue)
  );

  // Handle page number
  const handlePageNumber = (nexPage) => {
    setCurrentPage(page => Math.max(1, Math.min(page + nexPage, 10)))
   
  };

  // Handle pagination
  useEffect(() => {

    if (moviesHeading === "POPULAR") {
      dispatch(fetchMovies(request.fetchPopular(currentPage)));
    } else if (moviesHeading === "NOW PLAYING") {
      dispatch(fetchMovies(request.fetchNowPlaying(currentPage)));
    } else if (moviesHeading === "UP COMING") {
      dispatch(fetchMovies(request.fetchUpComing(currentPage)));
    } 
    
  }, [currentPage, dispatch, moviesHeading]);

  // Reset current page number
  const resetPageNumber = () => {
    setCurrentPage(1);
  }

  useEffect(() => {
    resetPageNumber()
  },[moviesHeading])


  useEffect(() => {
    if (moviesStatus === "idle") {
      dispatch(fetchMovies(request.fetchPopular()));
    }
  }, [dispatch, moviesStatus]);

  let content;

  if (moviesStatus === "loading") {
    <div>selamlar</div>;
  } else if (moviesStatus === "succeeced") {
    content = (
      <div className="movies__container">
        <BiLeftArrow
          className="movies__arrow movies__arrow--left"
          onClick={() => {
            handlePageNumber(-1)
          }}
        />
        {filteredMovie.map((movie) => {
          return <Card movie={movie} key={movie.id} moviesHeading={moviesHeading} currentPage={currentPage}/>;
        })}
        <BiRightArrow
          className="movies__arrow movies__arrow--right"
          onClick={() => {
            handlePageNumber(1)
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
      <div className="movies__heading">{moviesHeading}</div>
      <Navigation />
      {content}
    </div>
  );
};

export default MoviesList

