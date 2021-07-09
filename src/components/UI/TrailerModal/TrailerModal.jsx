import "./TrailerModal.scss";
import { useState, useEffect } from "react";
import requests from "../../../requests";
import axios from "axios";

const TrailerModal = ({ movieId, activeTrailer }) => {
  const [youtubeId, setYoutubeId] = useState([]);

  const baseVideoURL = "https://www.youtube.com/embed/";

  useEffect(() => {
    const fetchYoutubeUrl = async () => {
      let response = await axios.get(requests.fetchMovieTrailer(movieId));
      response = response.data.results;
      setYoutubeId(response[0].key);
    };

    fetchYoutubeUrl();
  }, [movieId]);

  console.log("TrailerModal: ",activeTrailer)

  return (
    <div className={`trailer ${activeTrailer ? "trailer--active" : ""}`}>
      <iframe
        className="trailer__video"
        width="1280"
        height="720"
        frameborder="0"
        allowfullscreen
        src={`${activeTrailer ? baseVideoURL+youtubeId : ""} `}
        title={movieId}
      ></iframe>
    </div>
  );
};

export default TrailerModal;

