import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  movieDetails: {},
  status: "idle",
  error: null,
};

export const fetchMovieDetails = createAsyncThunk(
    "movies/details/fetch",
    async (arg) => {
      const response = await axios.get(arg);
      return response.data;
    }
  );

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  extraReducers: {
    [fetchMovieDetails.pending]: (state, acion) => {
      state.status = "loading";
    },
    [fetchMovieDetails.fullfilled]: (state, action) => {
      state.status = "succeeced";
      state.movieDetails = action.payload;
    },
    [fetchMovieDetails.error]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});


export default movieDetailsSlice.reducer;
