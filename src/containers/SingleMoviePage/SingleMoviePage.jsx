import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FcStart } from "react-icons/fc";
import axios from "axios";

import { fetchMovies } from "../../feautures/movies/moviesSlice";
import Rating from "../../components/UI/Rating/Rating";
import request from "../../requests";

import "./SingleMoviePage.scss";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";
import TrailerModal from "../../components/UI/TrailerModal/TrailerModal";

const SingleMoviePage = ({ match }) => {
  // hooks
  const dispatch = useDispatch();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState({});
  const [activeTrailer, setActiveTrailer] = useState(false);
  const history = useHistory();


  // number month to string
  const date = new Date(movieDetails.release_date);
  const dateWithMonthName =
    date.getFullYear() +
    "-" +
    date.toLocaleString("en-EN", { month: "long" }) +
    "-" +
    date.getDay();

  /*  params */
  const movieId = match.params.id;
  const page = match.params.page;
  const genre = match.params.genre;

  /* movies reducer handle */
  const moviesStatus = useSelector((state) => state.movies.status);

  /* base urls */
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c057c067b76238e7a64d3ba8de37076e&language=en-US`;
  const movieCastUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c057c067b76238e7a64d3ba8de37076e&language=en-US`;

  // go home page
  const goHOme = () => {
    history.push("/")
  };

  // fetch movie cast
  useEffect(() => {
    const fetchMovieCast = async () => {
      let response = await axios.get(movieCastUrl);
      response = response.data;
      setMovieCredits(response);
    };
    fetchMovieCast();
  }, [movieCastUrl]);

  // fetch movie details
  useEffect(() => {
    const fetchMovieDetails = async () => {
      let response = await axios.get(movieDetailUrl);
      response = response.data;
      setMovieDetails(response);
    };

    fetchMovieDetails();
  }, [movieDetailUrl]);

  const handleMovieTrailer = (event) => {
    event.stopPropagation()
    setActiveTrailer(!activeTrailer);
  };


  let content;
  if (moviesStatus === "loading") {
  } else if (moviesStatus === "succeeded") {
    content = (
      <div

        className={`single-movie__container ${
          activeTrailer ? "single-movie__container--opacity" : ""
        }`}
        onClick={() => {
          setActiveTrailer(false);
        }}
        style={{
          backgroundImage: `url(${
            movieDetails.backdrop_path
              ? baseImgUrl + movieDetails.backdrop_path
              : baseImgUrl + movieDetails.poster_path
          })`,
        }}
      >
        <div className="single-movie__play" onClick={handleMovieTrailer}>
          <FcStart className="single-movie__play-icon" />
          <p className="single-movie__play-label">WATCH TRAILER</p>
        </div>

        <div className="single-movie__details">
          <IoMdArrowRoundBack
            className="single-movie__back"
            onClick={goHOme}
            size={65}
            color={"#e50914"}
          />
          <h1 className="single-movie__title">{movieDetails.title}</h1>
          <div className="single-movie__rate">
            <Rating
              rating={movieDetails.vote_average}
              className="single-movie__stars"
            />
          </div>
          <p className="single-movie__overview">{movieDetails.overview}</p>

          <div className="single-movie__informations single-movie__informations--genres">
            <label className="single-movie__informations-heading">Genres</label>
            <div className="single-movie__informations-container">
              {movieDetails.genres?.map((genre) => {
                return <div className="single-movie__info">{genre.name}</div>;
              })}
            </div>
          </div>

          <div className="single-movie__informations single-movie__informations--stars">
            <label className="single-movie__informations-heading">
              Starring
            </label>
            <div className="single-movie__informations-container">
              {movieCredits.cast?.slice(0, 4).map((star) => {
                return <div className="single-movie__info">{star.name}</div>;
              })}
            </div>
          </div>

          <div className="single-movie__informations single-movie__informations--released">
            <label className="single-movie__informations-heading">
              Release Date
            </label>
            <div className="single-movie__informations-container">
              <div className="single-movie__info">{dateWithMonthName}</div>
            </div>
          </div>

          <div className="single-movie__informations single-movie__informations--production">
            <label className="single-movie__informations-heading">
              Production
            </label>
            <div className="single-movie__informations-container">
              {movieDetails.production_countries?.slice(0, 2).map((country) => {
                return <div className="single-movie__info">{country.name}</div>;
              })}
            </div>
          </div>
        </div>
        <SimilarMovies activeTrailer={activeTrailer}   movieId={movieId} />
        <TrailerModal activeTrailer={activeTrailer} movieId={movieId} />
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

  return <div className="single-movie" key={movieId}>{content}</div>;
};

export default SingleMoviePage;
