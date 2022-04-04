import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genres/slice";
import movieReducer from "./movies/slice";

export default configureStore({
  reducer: {
    genre: genreReducer,
    movie: movieReducer,
  },
});
