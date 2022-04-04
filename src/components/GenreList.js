import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres } from "../store/genres/selectors";
import { removeGenre, selectGenre } from "../store/genres/slice";

const GenreList = (props) => {
  const list = useSelector((state) => selectGenres(state, "filter"));
  const dispatch = useDispatch();

  return (
    <div>
      GenreList
      {list.map((item) => (
        <div>
          <p>{item}</p>
          <button onClick={() => dispatch(removeGenre(item))}>Delete</button>
          <button onClick={() => dispatch(selectGenre(item))}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
