import React from "react";
import {

	Outlet,
	Route,

	Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/home/Home";
import Movies from "./Components/Movies/Movies";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/sidebar/SideBar";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
			</Routes>
			<main>
				<Navbar />
				<SideBar />
				<Outlet />
			</main>
		</>
	);
};

export default App;
