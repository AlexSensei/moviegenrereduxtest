import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/movies/slice";

const MovieForm = (props) => {
  const dispatch = useDispatch();

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
      <input
        placeholder="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default MovieForm;
