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

  
  return (
    <div className="similar">
        {similarMovies.length > 0 ? <h2 className="similar__heading">Similar Movies</h2> : ""}  
      <div className="similar__container">
        {similarMovies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SimilarMovies;
