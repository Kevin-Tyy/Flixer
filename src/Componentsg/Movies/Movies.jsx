import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MovieCard from "./MovieCard";
import YouTube from "react-youtube";
import { TailSpin } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faFilm, faSearch } from "@fortawesome/free-solid-svg-icons";

import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [searchKey, setSearchKey] = useState("");
	const [selectedMovie, setselectedMovie] = useState({});
	const [playTrailer, setPlayTrailer] = useState(false);
	const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(false);

	const API_URL = "https://api.themoviedb.org/3";
	const IMAGE_PATH = "http://images.tmdb.org/t/p/original";

	const fetchMovies = async (searchKey) => {
		const type = searchKey ? "search" : "discover";

		const {
			data: { results },
		} = await axios.get(`${API_URL}/${type}/movie`, {
			params: {
				api_key: "a96ad25cf6347c7de13c995a2c2f4c2d",
				query: searchKey,
			},
		});
		setLoading(true);
		setMovies(results);
		await selectMovie(results[0]);
	};

	useEffect(() => {

		fetchMovies();
		document.title = "Flick Flair | Watch Movies";
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	const searchMovies = (e) => {
		e.preventDefault();
		fetchMovies(searchKey);
	};

	const fetchMovie = async (id) => {
		const { data } = await axios.get(`${API_URL}/movie/${id}`, {
			params: {
				api_key: "a96ad25cf6347c7de13c995a2c2f4c2d",
				append_to_response: "videos",
			},
		});
		return data;
	};

	const selectMovie = async (movie) => {
		setPlayTrailer(false);
		const data = await fetchMovie(movie.id);
		setselectedMovie(data);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const renderTrailer = () => {
		if (selectedMovie.videos.results.length !== 0) {
			const trailerArray = selectedMovie.videos.results.filter(
				(video) =>
					video.name.includes("Official Trailer") ||
					video.name.includes("official") ||
					video.name.includes("Trailer")
			);
			const trailer = trailerArray[0];
			const key = trailer
				? trailer.key
				: selectedMovie.videos.results[0].key;

			return (
				<YouTube
					videoId={key}
					className="youtube_container"
					title={selectedMovie.title}
					opts={{
						width: "100%",
						height: "100%",
						playerVars: {
							autoplay: 1,
							cc_load_policy: 0,
							fs: 0,
							iv_load_policy: 1,
							modestbranding: 1,
							rel: 0,
							showinfo: 1,
						},
					}}
				/>
			);
		} else {
			return (
				<div className="youtube_container ">
					<div className="nomovie">
						<FontAwesomeIcon
							icon={faFilm}
							className="icons"
						/>
						<h2>Sorry! Trailer not available...</h2>
					</div>
				</div>
			);
		}
	};
	const movieGenres = selectedMovie.genres;
	return (
		<>
			{loading ? (
				<div className="App-main">
					<div className="margin"></div>

					{movies.length ? (
						<main className="main">
							<header className="header">
								<div className="header-content">
									<h1>
										Flick<span>Flair</span>
									</h1>

									<form onSubmit={searchMovies}>
										<FontAwesomeIcon
											icon={faSearch}
											className="input-icon"
										/>
										<input
											type="text"
											onChange={(e) =>
												setSearchKey(
													e.target.value
												)
											}
											placeholder="search for movies"
											style={{
												fontSize: "12px",
											}}
										/>

										<button
											type="submit"
											className="input-button">
											Search
										</button>
									</form>
								</div>
							</header>
							<div
								className="hero"
								style={{
									backgroundImage: `url("${IMAGE_PATH}${selectedMovie.backdrop_path} ")`,
									backgroundSize: "150%",
								}}>
								<div className="hero-content ">
									{playTrailer ? (
										<button
											className="button__close"
											onClick={() => {
												setPlayTrailer(
													false
												);
											}}>
											<FontAwesomeIcon
												icon={faClose}
											/>
										</button>
									) : null}

									{selectedMovie.videos &&
									playTrailer == true
										? renderTrailer()
										: null}

									<div className="poster">
										<img
											src={`${IMAGE_PATH}${selectedMovie.poster_path}`}
											alt={selectedMovie.title}
										/>
										<div className="poster-desc">
											<h1>
												{
													selectedMovie.title
												}
											</h1>

											{selectedMovie.overview ? (
												<p className="overview">
													{
														selectedMovie.overview
													}
												</p>
											) : null}
											<div className="genre-btns">
												{movieGenres
													? movieGenres.map(
															(
																genre
															) => (
																<button style={{fontSize: 10}}>
																	{
																		genre.name
																	}
																</button>
															)
													  )
													: null}
											</div>
											<div className="play-btns">
												<button
													className="button"
													onClick={() =>
														setPlayTrailer(
															true
														)
													}>
													<FontAwesomeIcon
														icon={
															faPlayCircle
														}
														style={{
															fontSize: 30,
														}}
													/>
													&nbsp; Play
													Trailer
												</button>

												<button
													className="button watch"
													onClick={() =>
														setPlayTrailer(
															true
														)
													}>
													<FontAwesomeIcon
														icon={
															faPlayCircle
														}
														style={{
															fontSize: 30,
														}}
													/>
													&nbsp; Watch
													Movie
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="container">
								{movies.map((movie) => (
									<MovieCard
										key={movie.id}
										movie={movie}
										selectedMovie={selectMovie}
									/>
								))}
							</div>
							
						</main>
					) : (
						<h1 className="message">
							Oops! Movie not found...
						</h1>
					)}
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

export default Movies;
