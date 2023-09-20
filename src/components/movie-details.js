import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function MovieDetails(props) {
  const [highlighted, setHighLighted] = useState(-1);

  const mov = props.movie;

  const highlightRate = (high) => (evt) => {
    setHighLighted(high);
  };

  const rateClicked = (rate) => (evt) => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 1eb87d911347dd18f0d0efc745897d57146e77e7",
      },
      body: JSON.stringify({ stars: rate + 1 }),
    })
      .then((resp) => getDetails())
      .catch((error) => console.log(error));
  };

  const getDetails = () => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 1eb87d911347dd18f0d0efc745897d57146e77e7",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => props.updateMovie(resp))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {mov ? (
        <div>
          <h1>{props.movie.title}</h1>
          <p>{props.movie.description}</p>
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 0 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 1 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 2 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 3 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 4 ? "orange" : ""}
          />
          ({props.movie.no_of_ratings})
          <div className="rate-container">
            <h2>Rate It</h2>
            {[...Array(5)].map((e, i) => {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={highlighted > i - 1 ? "purple" : ""}
                  onMouseEnter={highlightRate(i)}
                  onMouseLeave={highlightRate(-1)}
                  onClick={rateClicked(i)}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MovieDetails;
