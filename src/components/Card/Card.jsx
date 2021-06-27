import "./Card.scss"

const Card = ({ movie }) => {

    const baseImgUrl = "https://image.tmdb.org/t/p/original";

    const {title, overview, vote_average, poster_path} = movie;

 

    return(
        <div className="card"> 
            <div className="card__front">
                <img className="card__poster" src={`${baseImgUrl}${poster_path}`} alt="" />
                <p className="card__vote">{`${Number.isInteger(vote_average) ?  vote_average+".0" : vote_average   }`}</p>
                <div className="card__title">{title.substring(0, 20)}</div>
            </div>


            <div className="card__back">
                <div className="card__title">{title}</div>
                <div className="card__overview">{overview}</div>
            </div>
        </div>
    )
}


export default Card;