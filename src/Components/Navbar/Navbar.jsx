import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink , Link} from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="logo">
				<Link to="/" className="home-link">
					<h1>
						Flick<span>Flair</span>
					</h1>
				</Link>
			</div>
			<div>
				<NavLink to="/" className="link">Home</NavLink>
				<NavLink to="/movies" className="link">Movies</NavLink>
				<NavLink to="/shows" className="link">TV Shows</NavLink>
				<NavLink to="/series" className="link">Series</NavLink>
			</div>
      <div>
        <FontAwesomeIcon icon={faBell} className="icons" title="Sign in to get notified"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faUser} className="icons" title="Sign In to FlickFlair"/>
      </div>
		</div>
	);
};

export default Navbar;
