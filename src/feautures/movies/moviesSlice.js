import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import request from "../../requests";



export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
    const response = await axios.get(`${request.fetchTrending}`);
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




export default moviesSlice.reducer;