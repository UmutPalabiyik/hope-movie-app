import  { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../feautures/movies/moviesSlice";



export default configureStore({
    reducer: {
        movies: moviesSlice,

    }
})