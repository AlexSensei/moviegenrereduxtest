import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGenre, editGenre } from "../store/genres/slice";
import { selectGenre } from "../store/genres/selectors";

const GenreForm = () => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector(selectGenre);

  useEffect(() => {
    if (selectedGenre) {
      setName(selectedGenre);
    }
  }, [selectedGenre]);

  const [name, setName] = useState("");

  const onSubmit = () => {
    setName("");
    if (selectedGenre) {
      dispatch(editGenre(name));
    } else {
      dispatch(addGenre(name));
    }
  };

  return (
    <div>
      Genre Form
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onSubmit}>{selectedGenre ? "Edit" : "Create"}</button>
    </div>
  );
};

export default GenreForm;
