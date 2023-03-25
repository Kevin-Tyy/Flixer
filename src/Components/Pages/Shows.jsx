import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { TailSpin } from "react-loader-spinner";
function TVShows() {
	const [shows, setShows] = useState([]);
	const [loading, setLoading] = useState(false);
	const API_KEY = "a96ad25cf6347c7de13c995a2c2f4c2d";

	useEffect(() => {
		axios.get(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
		)
			.then((response) => {
				setShows(response.data.results);
				setLoading(true);
				console.log(shows);
			})
			.catch((error) => {
				console.log(error);
			});
		document.title = "Flick Flair | Your Shows";
	}, []);
	const posterUrl = "https://image.tmdb.org/t/p/original";

	return (
		<>
			{loading ? (
				<div className="pages">
					<h1 style={{ textAlign: "center" }}>
						Famous TV Shows
					</h1>
					<div className="pages-container shows">
						{shows.map((show) => (
							<div key={show.id} className="movie-card">
								<div className="image-container">
									<img
										src={
											`${posterUrl}` +
											show.poster_path
										}
									/>
								</div>
								<h3
									style={{
										fontSize: 17,
										textAlign: "center",
										margin: 10,
									}}>
									{show.title}
								</h3>
								<p style={{ lineHeight: 2.5 }}>
									{show.overview}
								</p>
								<span style={{ color: "purple" }}>
									Rating
								</span>
								<ReactStars
									count={show.rating}
									size={20}
									isHalf={true}
									activeColor="yellow"
									color="grey"
								/>
							</div>
						))}
					</div>
				</div>
			) : (
				<TailSpin
					height="80"
					width="80"
					color="#4fa94d"
					ariaLabel="tail-spin-loading"
					radius="1"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			)}
		</>
	);
}

export default TVShows;
