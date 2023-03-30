import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Pages.css";
import { TailSpin } from "react-loader-spinner";
const Coming = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const API_KEY = "a96ad25cf6347c7de13c995a2c2f4c2d";

	useEffect(() => {
		axios.get(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
		)
			.then((response) => {
				setMovies(response.data.results);
				setLoading(true);
			})
			.catch((error) => {
				console.log(error);
			});
		document.title = "Flick Flair | Coming Soon ";
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	const posterUrl = "https://image.tmdb.org/t/p/original";

	return (
		<>
			{loading ? (
				<div className="pages">
					<h1 style={{ textAlign: "center" }}>
						Up Coming Movies
					</h1>
					<div className="pages-container upcoming">
						{movies.map((movie) => (
							<div key={movie.id} className="movie-card">
								<div className="image-container">
									<img
										src={
											`${posterUrl}` +
											movie.backdrop_path
										}
										alt=""
									/>
								</div>
								<h3 style={{marginBottom:10}}>{movie.title}</h3>
								<p>
									<span>Release Date : </span>
									{movie.release_date}
								</p>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className="spinner">
					<TailSpin
						height="80"
						width="80"
						color="#4000cb"
						ariaLabel="tail-spin-loading"
						radius="1"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				</div>
			)}
		</>
	);
};

export default Coming;
