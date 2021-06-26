import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useSelector } from "react-redux";
import "./Slider.scss";

const Slider = () => {
  const movies = useSelector((state) => state.movies.movies);
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="slider">
      <AwesomeSlider >
        {movies.map((movie) => {
          return (
            <img
              /* style={{ maxWidth: "1200px" }} */
              data-src={`${baseImgUrl}${movie.backdrop_path}`}
            />
          );
        })}
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
