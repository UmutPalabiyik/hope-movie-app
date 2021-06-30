import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import request from "../../requests";
import { fetchMovies } from "../../feautures/movies/moviesSlice";
import "./SingleMoviePage.scss";
import Rating from "../../components/UI/Rating/Rating";


const SingleMoviePage = ({ match }) => {
  const dispatch = useDispatch();

  /*  params */
  const movieId = match.params.id;
  const page = match.params.page;
  const genre = match.params.genre;

  /* movies reducer handle */
  const movies = useSelector((state) => state.movies.movies);
  const moviesStatus = useSelector((state) => state.movies.status);

  /* movieDetails reducer handle */
  const movieDetails = useSelector((state) => state.movieDetails.movieDetails);
  const movieDetailsStatus = useSelector((state) => state.movieDetails.status);

  /* base urls */
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c057c067b76238e7a64d3ba8de37076e&language=en-US`;

 

  
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
        <div className="single-movie__information">
          <h1 className="single-movie__title">{movie.title}</h1>
          <div className="single-movie__rate">
            <Rating
              rating={movie.vote_average}
              className="single-movie__stars"
            />
            <div className="single-movie__average">
              {movie.vote_average}(Imdb)
            </div>
          </div>
          <p className="single-movie__overview">{movie.overview}</p>
          <p className="single-movie__genres">
            <label>Genres</label>
{/*             {movieDetail.genres.map((genre) => {
              return <label>{genre.name}</label>;
            })} */}
          </p>
        </div>
      </div>
    );
  }

  let details;
  /* if(m) */

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
