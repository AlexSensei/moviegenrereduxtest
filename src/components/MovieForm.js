import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres } from "../store/genres/selectors";
import { addMovie } from "../store/movies/slice";

const MovieForm = (props) => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");

  const onSubmit = () => {
    setName("");
    setGenre("");
    dispatch(addMovie({ name, genre }));
  };

  return (
    <div>
      Movie Form
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value=""></option>
        {genres.map((genre) => (
          <option value={genre}>{genre}</option>
        ))}
      </select>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default MovieForm;
