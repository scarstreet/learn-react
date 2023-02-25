import React from "react";

const MovieCard = ({ movie_eg }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie_eg.Year}</p>
      </div>

      <div>
        <img
          src={
            movie_eg.Poster !== "N/A"
              ? movie_eg.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie_eg.Title}
        />
      </div>
      <div>
        <span>{movie_eg.Type}</span>
        <h3>{movie_eg.Title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;