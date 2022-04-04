import { createSlice } from "@reduxjs/toolkit";

export const genreSlice = createSlice({
  name: "genre",
  initialState: {
    genres: [],
  },
  reducers: {
    // actions
    addGenre: (state, action) => {
      state.genres.push(action.payload);
    },
  },
});

export const { addGenre } = genreSlice.actions;

export default genreSlice.reducer; //
