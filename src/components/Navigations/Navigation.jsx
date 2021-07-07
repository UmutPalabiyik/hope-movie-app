import "./Navigation.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  handleMoviesHeading,
  handleCurrentPage,
} from "../../feautures/movies/moviesSlice";
import { NavLink, useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const moviesCurrentPage = useSelector((state) => state.movies.currentPage);
  const moviesHeading = useSelector(state => state.movies.moviesHeading)
  

  const handleLink = (heading) => {
   
    dispatch(handleMoviesHeading(heading))
    dispatch(handleCurrentPage(1)); // reset the current page number each time the buttons are clicked
    history.push(`/page/${moviesCurrentPage}`)
  }



  return (
    <div className="nav">
      <ul className="nav__list">
        <li  className={`nav__item ${moviesHeading === "POPULAR" ? "nav__item--active" : " "}`} >
          <NavLink
            to=""
            className="nav__link"
            onClick={() => {
              handleLink("POPULAR","popular")

            }}
          >
            Popular
          </NavLink>
        </li>
        <li  className={`nav__item ${moviesHeading === "UP COMING" ? "nav__item--active" : " "}`} >
          <NavLink
            to=""
            className="nav__link"
            onClick={() => { 
              handleLink("UP COMING","upcoming")
            }}
          >
            Upcoming
          </NavLink>
        </li>
        <li  className={`nav__item ${moviesHeading === "NOW PLAYING" ? "nav__item--active" : " "}`} >
          <NavLink
            to=""
            className="nav__link"
            onClick={() => {
              handleLink("NOW PLAYING","nowplaying")
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
