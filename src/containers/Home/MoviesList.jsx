import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../feautures/movies/moviesSlice";

const MoviesList = () => {

    const dispatch = useDispatch();
    const movieStatus = useSelector(state => state.movies.status);

    useEffect(() => {
        console.log("selamlar selamlar")
        if(movieStatus === "idle"){
            dispatch(fetchMovies());
        }
    },[dispatch, movieStatus ])


    let content;

    return(
        <div>
        asd
        </div>
    )
}

export default MoviesList;