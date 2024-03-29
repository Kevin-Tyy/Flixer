import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Header/Navbar";
import Bookmarks from "./Pages/Bookmarks";
import Coming from "./Pages/Coming";
import Community from "./Pages/Community";
import Downloads from "./Pages/Downloads";
import WatchList from "./Pages/WatchList";
import SideBar from "./components/Sidebar/SideBar";
import Shows from "./Pages/Shows";
import Series from "./Pages/Series";
import Page404 from "./Pages/404";
import Home from "./Pages/home";
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
