const TOKEN = "1eb87d911347dd18f0d0efc745897d57146e77e7";

export class API {
  static updateMovie(mov_id, body) {
    return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
  static createMovie(body) {
    return fetch(`http://127.0.0.1:8000/api/movies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
export default API;
