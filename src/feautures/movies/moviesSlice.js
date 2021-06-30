import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchMovies = createAsyncThunk("movies/fetch", async (arg) => {
  const response = await axios.get(arg);
  return response.data.results;
});



const initialState = {
  movies: [],
  inputValue: "",
  moviesHeading: "POPULAR",
  status: "idle",
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    handleInputValue: (state, action) => {
      state.inputValue = action.payload.toLowerCase();
    },

    handleMoviesHeading: (state, action) => {
      state.moviesHeading = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = "succeeced";
      state.movies = action.payload;
    },
    [fetchMovies.error]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },


  },
});

export const { handleInputValue, handleMoviesHeading } = moviesSlice.actions;
export default moviesSlice.reducer;
