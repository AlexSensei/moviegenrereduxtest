import React from "react";
import { useSelector } from "react-redux";
import { selectGenres } from "../store/genres/selectors";

const GenreList = (props) => {
  const list = useSelector(selectGenres);

  return (
    <div>
      GenreList
      {list.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default GenreList;
