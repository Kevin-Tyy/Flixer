import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import MovieCard from "./Components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const API_URL = "https://api.themoviedb.org/3";

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: "a96ad25cf6347c7de13c995a2c2f4c2d",
        query: searchKey
      },
    });

    setMovies(results);
  };
  useEffect(() => {
    fetchMovies();
  }, []);


  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey)
  }


  return (
    <div className="App">
        <header>
            <h1>FlickFlair</h1>
            <form onSubmit={searchMovies}>
                <input type="text" onChange={(event)=> setSearchKey(event.target.value)}/>
                <button type="submit">
                    Search
                </button>
            </form>
        </header>
      <div className="container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
