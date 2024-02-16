import React, { useState } from "react";
import API from "../api-service";

function MovieForm(props) {
  const [title, setTitle] = useState(props.movie.title);
  const [description, setDescription] = useState(props.movie.description);

  const updateClicked = () => {
    console.log("update here");
    API.updateMovie(props.movie.id, { title, description }).then((resp) =>
      props.updatedMovie(resp)
    );
  };
  return (
    <React.Fragment>
      {props.movie ? (
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            id="title"
            type="text"
            placeholder="title"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          ></textarea>
          <button onClick={(evt) => updateClicked()}>Update</button>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default MovieForm;
