import "./Navigation.scss";
import request from "../../requests";
import { useDispatch,useSelector } from "react-redux";
import { fetchMovies, handleMoviesHeading, handleCurrentPage } from "../../feautures/movies/moviesSlice";
import {NavLink } from "react-router-dom";


const Navigation = () => {
  const dispatch = useDispatch();
  const moviesCurrentPage = useSelector(state => state.movies.currentPage)

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
          <NavLink
            to={`/page/${moviesCurrentPage}`}
            className="nav__link"
            onClick={() => {
              dispatch(handleCurrentPage(1))
              handleLinks(request.fetchPopular());
              handleHeading("POPULAR")
            }}
          >
            Popular
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={`/page/${moviesCurrentPage}`}
            className="nav__link"
            onClick={() => {
              dispatch(handleCurrentPage(1))
              handleLinks(request.fetchUpComing());
              handleHeading("UP COMING")
            }}
          >
            Upcoming
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={`/page/${moviesCurrentPage}`}
            className="nav__link"
            onClick={() => {
              dispatch(handleCurrentPage(1))
              handleLinks(request.fetchNowPlaying());
              handleHeading("NOW PLAYING")
            }}
          >
            Now Playing
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
