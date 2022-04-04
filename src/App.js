import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import GenreForm from "./components/GenreForm";
import GenreList from "./components/GenreList";
import MovieForm from "./components/MovieForm";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <GenreForm />
      <GenreList />
      <MovieForm />
    </div>
  );
}

export default App;
