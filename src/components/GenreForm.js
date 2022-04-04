import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGenre } from "../store/genres/slice";

const GenreForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onSubmit = () => {
    setName("");
    dispatch(addGenre(name));
  };
  return (
    <div>
      Genre Form
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onSubmit}>Create</button>
    </div>
  );
};

export default GenreForm;
