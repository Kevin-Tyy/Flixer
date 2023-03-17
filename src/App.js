import React from "react";
import {

	Navigate,
	Outlet,
	Route,

	Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Navbar from "./Components/Navbar/Navbar";
import Bookmarks from "./Components/Pages/Bookmarks";
import Coming from "./Components/Pages/Coming";
import Community from "./Components/Pages/Community";
import Downloads from "./Components/Pages/Downloads";
import WatchList from "./Components/Pages/WatchList";
import SideBar from "./Components/Sidebar/SideBar";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/watchlist" element={<WatchList />} />
				<Route path="/bookmarks" element={<Bookmarks />} />
				<Route path="/downloads" element={<Downloads />} />
				<Route path="/Community" element={<Community />} />
				<Route path="/Coming" element={<Coming	 />} />
				<Route path="/browse" element={<Navigate to="/movies" /> }/>
				
			</Routes>
			<main>
				<Navbar />
				<SideBar />
				<Outlet />
				<Footer/>
			</main>
		</>
	);
};

export default App;
