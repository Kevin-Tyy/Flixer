import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Bookmarks from "./Pages/Bookmarks.jsx";
import Coming from "./Pages/Coming.jsx";
import Community from "./Pages/Community.jsx";
import Downloads from "./Pages/Downloads.jsx";
import WatchList from "./Pages/WatchList.jsx";
import SideBar from "./Components/Sidebar/SideBar.jsx";
import Shows from "./Pages/Shows.jsx";
import Series from "./Pages/Series.jsx";
import Page404 from "./Pages/404.jsx";
const App = () => {
	return (
		<>

			<main>
				<Navbar />
				<div className="grid">
					<div className="grid-sidebar">
						<SideBar />

					</div>
					<div className="page-content">
						<div>
						<Routes>
							<Route index element={<Home />} />
							<Route path="/home" element={<Home />} />
							<Route path="/movies" element={<Movies />} />
							<Route path="/watchlist" element={<WatchList />} />
							<Route path="/bookmark" element={<Bookmarks />} />
							<Route path="/downloads" element={<Downloads />} />
							<Route path="/Community" element={<Community />} />
							<Route path="/comingsoon" element={<Coming />} />
							<Route path="/browse" element={<Navigate to="/movies" />} />
							<Route path="/shows" element={<Shows />} />
							<Route path="/series" element={<Series />} />
							<Route path="*" element={<Page404 />} />
						</Routes>
						</div>

						<Footer />
					</div>

				</div>

			</main>
		</>
	);
};

export default App;
