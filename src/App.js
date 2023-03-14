import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ReactPlayer from "react-player";
import MovieCard from "./Components/MovieCard";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  
  const [movies, setMovies] = useState([]);
	const [searchKey, setSearchKey] = useState("");
	const [selectedMovie, setselectedMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false)
  
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
		fetchMovies();
	}, []);


	const searchMovies = (e) => {
		e.preventDefault();
		fetchMovies(searchKey);
	};



  const fetchMovie = async (id) => {
    const {data}  = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key : "a96ad25cf6347c7de13c995a2c2f4c2d",
        append_to_response: 'videos'
      }
    })
    return data;
  }

  const selectMovie = async (movie) => {
    setPlayTrailer(false)
    const data = await fetchMovie(movie.id);
    console.log("movie data :", data);
    setselectedMovie(data)
  }


  const renderTrailer = () =>{
    const trailer = selectedMovie.videos.results.find(video => video.name === "Official Trailer" || video.name === "Official Trailer 1" || video.name ==="Official Trailer 1"|| video.name==="Official Teaser Trailer");
    const key = trailer ?  trailer.key : selectedMovie.videos.results[0].key; 
    console.log("key", key);

    if(key!== ""){
      return (
        <YouTube
          videoId={key} 
          className="youtube_container"
          opts ={{
            width: "100%",
            height: "100%",
            playerVars :{
              autoplay: 1
            }
  
          
          }}
        />
      )  
    }else{
      return(
        <div className="youtube_container">
          <FontAwesomeIcon icon={faFilm} className="icons"/>
          <h1>Movie not found</h1>
        </div>
      )
    }

    
  }


	return (
		<div className="App">

			<header className="header">


				<div className="header-content max-center">
					<h1>FlickFlair</h1>

					<form onSubmit={searchMovies}>

						<input
							type="text"
							onChange={(e) => setSearchKey(e.target.value)}
						/>

						<button type="submit">Search</button>

					</form>

				</div>

			</header>


			<div className="hero" style={{backgroundImage: `url("${IMAGE_PATH}${selectedMovie.backdrop_path} ")`}}>


				<div className="hero-content max-center">
          {playTrailer ?  <button className="button button__close" onClick={()=>{ setPlayTrailer(false)}}>Close</button>: null }

          {selectedMovie.videos && playTrailer == true ? renderTrailer() : null }

          <button className="button" onClick={() => setPlayTrailer(true)}>Play Trailer</button>
					<h1 >{selectedMovie.title}</h1>
          
          {selectedMovie.overview ? <p> {selectedMovie.overview} </p>: null}
				</div>


			</div>


			<div className="container max-center">

				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} selectedMovie={selectMovie}/>
				))}

			</div>


		</div>
	);
};

export default App;
