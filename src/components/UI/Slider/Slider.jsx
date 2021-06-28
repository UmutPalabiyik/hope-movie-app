import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import axios from "../../../axios";
import { useState, useEffect } from "react";
import request from "../../../requests";

import "./Slider.scss";

const Slider = () => {
  const [sliderMovies, setSliderMovies] = useState([]);
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  // fetch top rated movies for slider
  useEffect(() => {
    const fetchSliderMovies = async () => {
      const movies = await axios.get(request.fetchTrending);
      setSliderMovies(movies.data.results);
    };
    fetchSliderMovies();
  }, []);

  return (
    <AutoplaySlider
      className="slider"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2000}
      mobileTouch={true}
    >
      {sliderMovies.map((movie) => {
        return (
          <div slider__container>
            <img
              src={`${baseImgUrl}${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        );
      })}
    </AutoplaySlider>
  );
};

export default Slider;

