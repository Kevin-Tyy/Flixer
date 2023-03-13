import React from "react";

const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "http://images.tmdb.org/t/p/w342";
  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <img className="movie-cover" src={`${IMAGE_PATH}${movie.poster_path}`} alt="image" />
      ) : null}
      <h5 className="movie-title">{movie.title}</h5>
    </div>
  );
};

export default MovieCard;
