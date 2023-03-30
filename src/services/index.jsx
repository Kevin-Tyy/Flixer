import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "a96ad25cf6347c7de13c995a2c2f4c2d";

const nowPlayingURL = `${API_URL}/movie/popular	`;
const topRatedURL = `${API_URL}/movie/top_rated`;
const genreURL = `${API_URL}/genre/movie/list`;	
const moviesURL = `${API_URL}/discover/movie`;
const personURL = `${API_URL}/trending/person/week`;

export const fetchMovies = async () => {
	try {
		const { data } = await axios.get(nowPlayingURL, {
			params: {
				api_key: API_KEY,
				language: "en-us",
				page: 1,
			},
		});
		const posterUrl = "https://image.tmdb.org/t/p/original";
		const modifiedData = data["results"].map((movies) => ({
			id: movies["id"],
			backPoster: posterUrl + movies["backdrop_path"],
			poster : posterUrl + movies["poster_path"],
			popularity: movies["popularity"],
			title: movies["title"],
			poster: posterUrl + movies["poster_path"],
			overview: movies["overview"],
			rating: movies["vote_average "],
		}));

		return modifiedData;
	} catch (error) {}
};

export const fetchGenre = async () => {
	try {
		const { data } = await axios.get(genreURL, {
			params: {
				api_key: API_KEY,
				language: "en_US",
				page: 1,
			}
		});
		const modifiedData = data["genres"].map((genre) => ({
			id: genre["id"],
			name: genre["name"],
		}));
		return modifiedData;
	} catch (error) {}
};

export const fetchMovieByGenre = async (genre_id) => {
	try {
		const { data } = await axios.get(moviesURL, {
			params: {
				api_key: API_KEY,
				language: "en_US",
				page: 1,
				with_genres: genre_id,
			},
		});
		const posterUrl = "https://image.tmdb.org/t/p/original/";
		const modifiedData = data["results"].map((m) => ({
			id: m["id"],
			backPoster: posterUrl + m["backdrop_path"],
			popularity: m["popularity"],
			title: m["title"],
			poster: posterUrl + m["poster_path"],
			overview: m["overview"],
			rating: m["vote_average"],
		}));

		return modifiedData;
	} catch (error) {}
};

export const fetchPersons = async () => {
	try {
		const { data } = await axios.get(personURL, {
			params: {
				api_key: API_KEY,
			},
		});


		const modifiedData = data["results"].map((person) => ({
			id: person["id"],
			popularity: person["popularity"],
			name: person["name"],
			profileImg:
				"https://image.tmdb.org/t/p/w200" + person["profile_path"],
			known: person["known_for_department"],
		}));


		return modifiedData;



	} catch (error) {}
};

export const fetchTopRatedMovie = async () => {
  try {
    const {data} = await axios.get(topRatedURL, {
      params: {
        api_key : API_KEY,
        pages : 1,
        language : 'en_US'
      }
    })
    const posterUrl = "https://image.tmdb.org/t/p/original/";
		const modifiedData = data["results"].map((m) => ({
			id: m["id"],
			backPoster: posterUrl + m["backdrop_path"],
			popularity: m["popularity"],
			title: m["title"],
			poster: posterUrl + m["poster_path"],
			overview: m["overview"],
			rating: m["vote_average"],
		}));

		return modifiedData;
  
    
  } catch (error) {
    
  }

};


