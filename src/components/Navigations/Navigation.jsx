import "./Navigation.scss";
import request from "../../requests";
import { useDispatch } from "react-redux";
import { fetchMovies, handleMoviesHeading } from "../../feautures/movies/moviesSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleLinks = (link) => {
    dispatch(fetchMovies(link));
  };

  const handleHeading = (heading) => {
    dispatch(handleMoviesHeading(heading))
  }

  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <div
            href="/"
            className="nav__link"
            onClick={() => {
              handleLinks(request.fetchPopular);
              handleHeading("POPULAR")
            }}
          >
            Popular
          </div>
        </li>
        <li className="nav__item">
          <div
            href="/"
            className="nav__link"
            onClick={() => {
              handleLinks(request.fetchUpComing);
              handleHeading("UP COMING")
            }}
          >
            Upcoming
          </div>
        </li>
        <li className="nav__item">
          <div
            href="/"
            className="nav__link"
            onClick={() => {
              handleLinks(request.fetchTopRated);
              handleHeading("TOP RATED")
            }}
          >
            Top Rated
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
