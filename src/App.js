import React, { useState, useEffect } from "react";
import "./App.css";
import MovieDetails from "./components/movie-details";
import MovieList from "./components/movie-list";
import MovieForm from "./components/movie-form";

function App() {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

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

  const loadMovie = (movie) => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  };

  const editClicked = (movie) => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  };

  const updatedMovie = (movie) => {
    const newMovies = movies.map((mov) => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    });
    setMovie(newMovies);
  };
  const newMovie = () => {
    setEditedMovie({ title: "", description: "" });
  };
  const movieCreated = (movie) => {
    const newMovies = [...movies, movie];
    setMovie(newMovies);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joda Movies</h1>
      </header>
      <div className="layout">
        <div>
          <MovieList
            movies={movies}
            movieClicked={loadMovie}
            editClicked={editClicked}
          />
          <button onClick={newMovie}>New Movie</button>
        </div>
        <MovieDetails movie={selectedMovie} updatedMovie={loadMovie} />
        {editedMovie ? (
          <MovieForm
            movie={editedMovie}
            updateMovie={updatedMovie}
            movieCreated={movieCreated}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
