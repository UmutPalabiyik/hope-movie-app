import "./Navigation.scss";
import request from "../../requests";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  handleMoviesHeading,
  handleCurrentPage,
} from "../../feautures/movies/moviesSlice";
import { NavLink, useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const moviesCurrentPage = useSelector((state) => state.movies.currentPage);

  const handleLinks = (link) => {
    dispatch(fetchMovies(link));
  };

  const handleHeading = (heading) => {
    dispatch(handleMoviesHeading(heading));
  };

  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to=""
            className="nav__link"
            onClick={() => {
              console.log("burası çalıştı abi");

              dispatch(handleCurrentPage(1));
              handleLinks(request.fetchPopular());
              handleHeading("POPULAR");
              history.push(`/page/${moviesCurrentPage}`)
            }}
          >
            Popular
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to=""
            className="nav__link"
            onClick={() => {
              console.log("burası çalıştı abi");

              dispatch(handleCurrentPage(1));
              handleLinks(request.fetchUpComing());
              handleHeading("UP COMING");
              history.push(`/page/${moviesCurrentPage}`)
              console.log("şuan ki sayfa : ", moviesCurrentPage);
            }}
          >
            Upcoming
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to=""
            className="nav__link"
            onClick={() => {
              console.log("burası çalıştı abi");

              dispatch(handleCurrentPage(1));
              handleLinks(request.fetchNowPlaying());
              handleHeading("NOW PLAYING");
              history.push(`/page/${moviesCurrentPage}`);
              console.log("şuan ki sayfa : ", moviesCurrentPage);
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
