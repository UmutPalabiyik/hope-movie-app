import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import "./Rating.scss";

const Rating = ({ rating }) => {
 

  return (
    <div className="rating">
      {rating >= 1 ? (
        <FaStar className="rating__full" />
      ) : 0.9 > rating >= 0.5 ? (
        <FaStarHalfAlt  className="rating__half"/>
      ) : (
        <FaRegStar className="rating__empty"/>
      )}

      {rating >= 2 ? (
        <FaStar className="rating__full" />
      ) : 1.9 > rating >= 1.5 ? (
        <FaStarHalfAlt className="rating__half"/>
      ) : (
        <FaRegStar className="rating__empty"/>
      )}

      {rating >= 3 ? (
        <FaStar className="rating__full" />
      ) : 2.9 > rating >= 2.5 ? (
        <FaStarHalfAlt className="rating__half"/>
      ) : (
        <FaRegStar className="rating__empty"/>
      )}

      {rating >= 4 ? (
        <FaStar className="rating__full" />
      ) : 3.9 > rating >= 3.5 ? (
        <FaStarHalfAlt className="rating__half"/>
      ) : (
        <FaRegStar className="rating__empty"/>
      )}

      {rating >= 5 ? (
        <FaStar className="rating__full" />
      ) : 4.9 > rating >= 4.5 ? (
        <FaStarHalfAlt className="rating__half"/>
      ) : (
        <FaRegStar className="rating__empty"/>
      )}

      {rating >= 6 ? (
        <FaStar className="rating__full" />
      ) : rating >= 5.5 ? (
        <FaStarHalfAlt className="rating__half"/>
      ) : (
        <FaRegStar className="rating__empty"/>
      )}

      {rating >= 7 ? (
        <FaStar className="rating__full" />
      ) : rating >= 6.5 ? (
        <FaStarHalfAlt className="rating__half" />
      ) : (
        <FaRegStar className="rating__empty"/>
      )}

      {rating >= 8 ? (
        <FaStar className="rating__full" />
      ) : rating >= 7.5 ? (
        <FaStarHalfAlt className="rating__half"/>
      ) : (
        <FaRegStar className="rating__empty"/>
      )}
      {rating >= 9 ? (
        <FaStar className="rating__full" />
      ) : rating >= 8.5 ? (
        <FaStarHalfAlt className="rating__half"/>
      ) : (
        <FaRegStar className="rating__empty"/>
      )}
      {rating >= 10 ? (
        <FaStar className="rating__full" />
      ) : rating >= 9.5 ? (
        <FaStarHalfAlt className="rating__half" />
      ) : (
        <FaRegStar className="rating__empty"/>
      )}
    </div>
  );
};

export default Rating;
