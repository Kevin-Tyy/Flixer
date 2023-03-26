import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { NavLink , Link} from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	const [ mobile,  setMobile] = useState(false);
	return (
		<div className="nav-container">
			<div className="logo">
				<Link to="/" className="home-link">
					<h1>
						Flick<span>Flair</span>
					</h1>
				</Link>
			</div>
			<div className="nav-links">
				<NavLink to="/" className="link">Home</NavLink>
				<NavLink to="/movies" className="link">Movies</NavLink>
				<NavLink to="/shows" className="link">TV Shows</NavLink>
				<NavLink to="/series" className="link">Series</NavLink>
			</div>
			<div className={ mobile ? "utils-X" : "utils"}>
				<FontAwesomeIcon icon={faBell} className="icons" title="Sign in to get notified"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<FontAwesomeIcon icon={faUser} className="icons" title="Sign In to FlickFlair"/>
				<button className="nav-button">Sign Up</button>
			</div>

		
			<button
              className="toggle"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              {mobile ? (
                <FontAwesomeIcon icon={faTimes} className="icons" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="icons" />
              )}
            </button>
		</div>
	);
};

export default Navbar;
