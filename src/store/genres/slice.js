import { createSlice } from "@reduxjs/toolkit";

export const genreSlice = createSlice({
  name: "genre",
  initialState: {
    genres: [],
    selectedGenre: "",
  },
  reducers: {
    // actions
    addGenre: (state, action) => {
      state.genres.push(action.payload);
    },
    removeGenre: (state, action) => {
      state.genres = state.genres.filter((item) => item !== action.payload);
    },
    selectGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    editGenre: (state, action) => {
      state.genres = state.genres.map((item) =>
        item === state.selectedGenre ? action.payload : item
      );
      state.selectedGenre = "";
    },
  },
});

export const { addGenre, removeGenre, selectGenre, editGenre } =
  genreSlice.actions;

export default genreSlice.reducer; //
