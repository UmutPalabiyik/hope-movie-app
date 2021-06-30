import  { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../feautures/movies/moviesSlice";
import movieDetailsSlice from "../feautures/movieDetails/movieDetails";


export default configureStore({
    reducer: {
        movies: moviesSlice,
        movieDetails: movieDetailsSlice 
    }
})