import React from "react";
import { useSelector } from "react-redux";
import { moviesSelector } from "../store/movies/selectors";

const MovieList = (props) => {
  const list = useSelector(moviesSelector);

  return (
    <div>
      MovieList
      {list.map((item) => (
        <div>
          <p>Name: {item.name}</p>
          <p>Genre: {item.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
