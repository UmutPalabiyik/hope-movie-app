import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import request from "../../requests";
import { fetchMovies } from "../../feautures/movies/moviesSlice";
import Rating from "../../components/UI/Rating/Rating";
import axios from "axios";
import "./SingleMoviePage.scss";

const SingleMoviePage = ({ match }) => {
  const dispatch = useDispatch();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState({});
  const history = useHistory();

  console.log("adasd", movieDetails)

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
  const movies = useSelector((state) => state.movies.movies);
  const moviesStatus = useSelector((state) => state.movies.status);

  /* base urls */
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c057c067b76238e7a64d3ba8de37076e&language=en-US`;
  const movieCastUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c057c067b76238e7a64d3ba8de37076e&language=en-US`;

  // go home page
  const goHOme = () => {
    history.push("/")
  }

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

  let content;
  if (moviesStatus === "loading") {
    <div>Loading ...</div>;
  } else if (moviesStatus === "succeeced") {
    let movie = movies.find((movie) => movie.id.toString() === movieId);
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
        
        <div className="single-movie__details">
        <IoMdArrowRoundBack  className="single-movie__back" onClick={goHOme} size={65} color={"#e50914"}/>
          <h1 className="single-movie__title">{movie.title}</h1>
          <div className="single-movie__rate">
            <Rating
              rating={movie.vote_average}
              className="single-movie__stars"
            />
            <div className="single-movie__average">
              {`${
            Number.isInteger(movie.vote_average) ? movie.vote_average + ".0" : movie.vote_average
          }`}(Imdb)
            </div>
          </div>
          <p className="single-movie__overview">{movie.overview}</p>

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
              {
                movieDetails.production_companies?.slice(0,1).map( company => {
                  return <div className="single-movie__info">{company.name}</div>
                })
              }
              
            </div>
          </div>
          
        </div>
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
