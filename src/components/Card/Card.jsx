import "./Card.scss"

const Card = ({ movie }) => {

    const baseImgUrl = "https://image.tmdb.org/t/p/original";

    const {original_title, overview, vote_average, poster_path} = movie;

    return(
        <div className="card"> 
            <div className="card__front">
                <img className="card__poster" src={`${baseImgUrl}${poster_path}`} alt="" />
                <div className="card__title">{original_title}</div>
            </div>


            <div className="card__back">
                <div className="card__title">{original_title}</div>
                <div className="card__overview">{overview}</div>
                <p className="card__vote">{vote_average}</p>
            </div>
        </div>
    )
}


export default Card;