import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import request from "../../requests";



export const fetchMovies = createAsyncThunk("movies/fetch", async (param) => {
    const response = await axios.get(`${request.fetchNowPlaying}`);
    return response.data.results

})


const initialState = {
    movies: [],
    status: "idle",
    error: null
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        filteredMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.original_title.includes(action.payload))
        }
    },
    extraReducers: {
        [fetchMovies.pending] : (state, action) => {
            state.status = "loading"
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = "succeeced";
            state.movies = state.movies.concat(action.payload)
        },
        [fetchMovies.error]: (state, action) => {
            state.status = "failed";
            state.error = action.payload
;        }
    }


})



export const { filteredMovie } = moviesSlice.actions;
export default moviesSlice.reducer;