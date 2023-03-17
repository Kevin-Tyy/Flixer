import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pages.css";

function TVSeries() {
	const [series, setSeries] = useState([]);
	const API_KEY = "a96ad25cf6347c7de13c995a2c2f4c2d";

	useEffect(() => {
		axios.get(
			`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
		)
			.then((response) => {
				setSeries(response.data.results);
				console.log(series);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const posterUrl = "https://image.tmdb.org/t/p/original";

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Famous TV Shows</h1>
			<div className="pages-container series">
				{series.map((serie) => (
					<div key={serie.id} className="movie-card">
						<div className="image-container">
							<img
								src={`${posterUrl}` + serie.poster_path}
							/>
						</div>

						<h2>{serie.name}</h2>
						<p>{serie.first_air_date}</p>
						<p>{serie.overview}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default TVSeries;
