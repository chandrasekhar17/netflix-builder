import React, { useEffect, useState } from "react";
import "./Rows.css";
import axios from "./axios";

function Rows({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }

    fetchMovies();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
      {movies.map((movie) => (
        <img
          className={`row_poster ${isLarge && "row_posterLarge"}`}
          key={movie.id}
          src={`${base_url}${
            isLarge ? movie?.poster_path : movie?.backdrop_path
          }`}
          alt={movie?.name}
        />
      ))}
      </div>
    </div>
  );
}

export default Rows;
