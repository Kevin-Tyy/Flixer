import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MovieCard from "./MovieCard";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClose,
	faFilm,
	faPlay,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";

import {
	fetchGenre
} from "../../services/index";
const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [searchKey, setSearchKey] = useState("");
	const [selectedMovie, setselectedMovie] = useState({});
	const [playTrailer, setPlayTrailer] = useState(false);
	const [genres, setGenres] = useState([]);

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

		setMovies(results);
		await selectMovie(results[0]);
	};

	useEffect(() => {
		const fetchAPI = async () => {
			setGenres(await fetchGenre());
			
		
		};

		fetchAPI();
		fetchMovies();
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
		console.log("movie data :", data);
		setselectedMovie(data);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const renderTrailer = () => {
		if (selectedMovie.videos.results.length !== 0) {

			const trailerArray = selectedMovie.videos.results.filter(video => video.name.includes("Trailer") || video.name.includes("trailer") || video.name.includes("Teaser"));
			const trailer = trailerArray[0];
			const key = trailer
				? trailer.key
				: selectedMovie.videos.results[0].key;

			return (
				<YouTube
					videoId={key}
					className="youtube_container"
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
	const genreList = genres.map((item, index) => {
		return (
			<li key={index}>
				<button
					type="button"
					onClick={() => {
						handleGenreClick(item.id);
					}}>
					{item.name}
				</button>
			</li>
		);
	});

	return (
		<div className="App">
			<div className="margin"></div>
			<header className="header">
				<div className="header-content max-center">
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
								setSearchKey(e.target.value)
							}
							placeholder ="search for movies"
							style={{fontSize: "12px"}}
						/>

						<button type="submit">Search</button>
					</form>
				</div>
			</header>
			{movies.length ? (
				<main>
					<div
						className="hero"
						style={{
							backgroundImage: `url("${IMAGE_PATH}${selectedMovie.backdrop_path} ")`,
						}}>
						<div className="hero-content max-center">
							{playTrailer ? (
								<button
									className="button__close"
									onClick={() => {
										setPlayTrailer(false);
									}}>
									<FontAwesomeIcon icon={faClose} />
								</button>
							) : null}

							{selectedMovie.videos && playTrailer == true
								? renderTrailer()
								: null}

							<h1>{selectedMovie.title}</h1>

							{selectedMovie.overview ? (
								<p> {selectedMovie.overview} </p>
							) : null}

							<button
								className="button"
								onClick={() => setPlayTrailer(true)}>
								<FontAwesomeIcon icon={faPlay} /> &nbsp;
								Play Trailer
							</button>
						</div>
					</div>
					<div className="genres">
						<h3>Filter Movies by Genre</h3>
						<ul className="genre_list">{genreList}</ul>
					</div>
					<div className="container max-center">
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
				<h1 className="message">Oops! Movie not found...</h1>
			)}
		</div>
	);
};

export default Movies;
