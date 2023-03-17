import React, { useState, useEffect } from "react";
import axios from "axios";

function TVShows() {
	const [shows, setShows] = useState([]);
	const API_KEY = "a96ad25cf6347c7de13c995a2c2f4c2d";

	useEffect(() => {
		axios.get(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
		)
			.then((response) => {
				setShows(response.data.results);
				console.log(shows);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const posterUrl = "https://image.tmdb.org/t/p/original";

	return (
		<div className="">
			<h1 style={{ textAlign: "center" }}>Famous TV Shows</h1>
			<div className="pages-container">
				{shows.map((show) => (
					<div key={show.id} className="movie-card">
						<div className="image-container">
							<img
								src={`${posterUrl}` + show.poster_path}
							/>
						</div>
						<h3>{show.title}</h3>
						<p>{show.overview}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default TVShows;
