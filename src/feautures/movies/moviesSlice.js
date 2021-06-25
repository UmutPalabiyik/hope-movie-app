import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import request from "../../requests";



export const fetchMovies = createAsyncThunk("movies/fetch", async (param) => {
    const response = await axios.get(`${request.fetchNowPlaying}`);
    return response.data.results

})


const initialState = {
    movies: [],
    inputValue : "",
    status: "idle",
    error: null
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        handleInputValue: (state, action) => {
            state.inputValue = action.payload.toLowerCase()
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



export const { handleInputValue } = moviesSlice.actions;
export default moviesSlice.reducer;