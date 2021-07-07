import { useEffect, useState } from "react";
import requests from "../../requests";
import axios from "axios";
import Card from "../Card/Card";
import "./SimilarMovies.scss"

const SimilarMovies = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      let response = await axios.get(requests.fetchSimiliarMovies(movieId));
      response = response.data.results;
      setSimilarMovies(response);
    };

    fetchSimilarMovies();
  }, [movieId]);

  console.log("similar movies çalıştı ", similarMovies);

  return (
    <div className="similar">
      <div className="similar__container">
        {similarMovies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SimilarMovies;
