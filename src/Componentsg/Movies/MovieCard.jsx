import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MovieCard = ({ movie, selectedMovie }) => {
	const IMAGE_PATH = "http://images.tmdb.org/t/p/w500";
	return (
		<div className="movie-card" onClick={() => selectedMovie(movie)}>
			<div className="image-container">
				{movie.poster_path ? (
					<img
						className="movie-cover"
						src={`${IMAGE_PATH}${movie.poster_path}`}
						alt=""
					/>
				) : (
					<div className="movie-placeholder">
						<FontAwesomeIcon
							icon={faFilm}
							className="icons"
						/>
						<br />
						<h3>No Image found </h3>
					</div>
		
				)}
			</div>

			<h5 className="movie-title">{movie.title}</h5>
		</div>
	);
};

export default MovieCard;
