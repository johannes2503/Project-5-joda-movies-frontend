import React, { useState, useEffect } from "react";
import "./App.css";
import MovieDetails from "./components/movie-details";
import MovieList from "./components/movie-list";

function App() {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 1eb87d911347dd18f0d0efc745897d57146e77e7",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMovie(resp))
      .catch((error) => console.log(error));
  }, []);

  const movieClicked = (movie) => {
    setSelectedMovie(movie);
  };

  const loadMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joda Movies</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} movieClicked={movieClicked} />
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
      </div>
    </div>
  );
}

export default App;
