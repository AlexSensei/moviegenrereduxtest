import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    // actions
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
  },
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer; //
