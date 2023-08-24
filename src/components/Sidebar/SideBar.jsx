import { faCalendar, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import {
	faBars,
	faBook,
	faBurger,
	faDownload,
	faHamburger,
	faHistory,
	faPeopleRobbery,
	faSignOut,
	faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
	const [isExtended, setExtendState] = useState(false);
	return (
		<>
			<div className={isExtended ? "sidebar" : "sidebar sidebar-NX"}>
				<button
					className={
						isExtended
							? "close-button hamburg-in"
							: "close-button hamburg-out"
					}
					onClick={() => setExtendState(!isExtended)}>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<NavLink to="/browse" style={{marginTop: 30}}>
					<FontAwesomeIcon icon={faTv} className="icons" />
                              {isExtended && <span className="text">Browse</span>}
                              {!isExtended && <div className="tooltip ">Browse</div>} 
					
				</NavLink>
				<NavLink to="/watchlist">
					<FontAwesomeIcon icon={faHistory} className="icons" />

					{isExtended && <span className="text">WatchList</span>}
                              {!isExtended && <div className="tooltip ">WatchList</div>}

				</NavLink>
				<NavLink to="/comingsoon">
					<FontAwesomeIcon
						icon={faCalendar}
						className="icons"
					/>

					{isExtended && <span className="text">Coming Soon</span>}
                              {!isExtended &&<div className="tooltip ">Coming Soon</div>}


				</NavLink>
				<NavLink to="/downloads">
					<FontAwesomeIcon icon={faDownload} className="icons" />

					{isExtended && <span className="text">DownLoads</span>}
                              {!isExtended && <div className="tooltip ">Downloads</div>}

				</NavLink>
				<NavLink to="/community">
					<FontAwesomeIcon
						icon={faPeopleRobbery}
						className="icons"
					/>

					{isExtended && <span className="text">Community</span>}
                              {!isExtended && <div className="tooltip ">Community</div>}

				</NavLink>
				<NavLink to="/bookmark">
					<FontAwesomeIcon icon={faBook} className="icons" />

					{isExtended && <span className="text">Bookmarks</span>}
                              {!isExtended && <div className="tooltip ">Bookmarks</div>}

				</NavLink>

			</div>
		</>
	);
};

export default SideBar;
