import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
	fetchGenre,
	fetchMovieByGenre,
	fetchMovies,
	fetchPersons,
	fetchTopRatedMovie,
} from "../../services/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

import ReactStars from "react-rating-stars-component";

const Home = () => {
	const [nowPlaying, setNowPlaying] = useState([]);
	const [genres, setGenres] = useState([]);
	const [movieByGenre, setMovieByGenre] = useState([]);
	const [persons, setPersons] = useState([]);
	const [topRated, setTopRated] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setNowPlaying(await fetchMovies());
			setGenres(await fetchGenre());
			setMovieByGenre(await fetchMovieByGenre(28));
			setPersons(await fetchPersons());
			setTopRated(await fetchTopRatedMovie());
		};

		fetchAPI();
	}, []);

  const handleGenreClick=  async(genre_id) =>{
    setMovieByGenre(await fetchMovieByGenre(genre_id))
  }

	const movies = nowPlaying.slice(0, 5).map((item, index) => {
		return (
			<div key={index} style={{ width: 1000, height: 700 }}>
				<div className="carousel-center">
					<img src={item.backPoster} alt={item.title} />
				</div>
				<div className="carousel-center">
					<FontAwesomeIcon
						icon={faPlayCircle}
						className="icons"
					/>
				</div>
				<div
					className="carousel-caption"
					style={{ textAlign: "center", fontSize: 30 }}>
					{item.title}
				</div>
			</div>
		);
	});

	const genreList = genres.map((item, index) => {
		return (
			<li key={index}>
				<button type="button" onClick={()=>{
          handleGenreClick(item.id)
        }}>{item.name}</button>
			</li>
		);
	});

	const movieList = movieByGenre.slice(0, 4).map((item, index) => {
		return (
			<div key={index} className="card">
				<div>

						<div className="img-container">
							<img src={item.poster} alt={item.title} />
						</div>

				</div>
				<div>
					<p style={{ fontWeight: "bolder" }}>{item.title}</p>
					<p>rating : {item.rating}</p>
					<ReactStars
						size={20}
						count={item.rating}
						color={"#f1c10f"}></ReactStars>
				</div>
			</div>
		);
	});

	const trendingActors = persons.slice(0, 4).map((person, index) => {
		return (
			<div className="actors-card" key={index}>
				<img src={person.profileImg} alt={person.name} />
				<p>{person.name}</p>
				<p>Trending for {person.known}</p>
			</div>
		);
	});

	const topRatedMovies = topRated.slice(0, 4).map((movie, index) => {
		return (
			<div className="card" key={index}>
				<div>
	
						<div className="img-container">
							<img src={movie.poster} alt={movie.title} />
						</div>
					
				</div>
				<div>
					<p style={{ fontWeight: "bolder" }}>{movie.title}</p>
					<p>rating : {movie.rating}</p>
					<ReactStars
						size={20}
						count={movie.rating}
						color={"#f1c10f"}></ReactStars>
				</div>
			</div>
		);
	});

	const CustomNext = (props) => {
		const { onClick } = props;
		return (
			<div className="control-btn" onClick={onClick}>
				<button className="next">
					<FontAwesomeIcon
						icon={faChevronRight}
						className="icons"
					/>
				</button>
			</div>
		);
	};
	const CustomPrev = (props) => {
		const { onClick } = props;
		return (
			<div className="control-btn" onClick={onClick}>
				<button className="prev">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="icons"
					/>
				</button>
			</div>
		);
	};

	const settings = {
		dots: false,
		infinite: true,
		speed: 1200,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnVisisbility: true,
		nextArrow: <CustomNext />,
		prevArrow: <CustomPrev />,
	};
	return (
		<div className="container">

			<div className="row">
				<div className="movie-slider">
					<Slider {...settings}>{movies}</Slider>
				</div>
			</div>

			<div>
				<ul className="genre_list">{genreList}</ul>
			</div>

			<div className=" container-movie">{movieList}</div>
			<div className="container-actors">
				<h2 style={{ fontWeight: 700, color: "#5a606b" }}>
					Trending Actors this Week
				</h2>
				<div className="actors-list">{trendingActors}</div>
			</div>
			<div className="toprated">
        <h2>Top Rated Movies this Week</h2>
      </div>
      <div className=" container-movie">{topRatedMovies}</div>
		</div>
	);
};

export default Home;
