import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
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
import Shows from "./Components/Pages/Shows";
import Series from "./Components/Pages/Series";
import Page404 from "./Components/Pages/404";
const App = () => {
	return (
		<>

			<main>
				<Navbar />
				<div className="grid">
					<div>
						<SideBar />

					</div>
					<div className="page-content">
						<div>
						<Routes>
							<Route path="/" element={<Home />} />
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
