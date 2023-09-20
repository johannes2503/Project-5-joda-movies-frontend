import React from "react";

function MovieDetails(props) {
  return (
    <div>
      <div>
        <h1>{props.movie && props.movie.title}</h1>
      </div>
    </div>
  );
}

export default MovieDetails;
