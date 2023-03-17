import { faBook, faChess, faClover, faDownload, faHistory, faPeopleGroup, faPeopleLine, faSearch, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
  return (
        <>
        <div className='sidebar'>
              <NavLink to="/browse"><FontAwesomeIcon icon={faHistory} className="icons"/>&nbsp;&nbsp;Browse</NavLink>
              <NavLink to="/watchlist"><FontAwesomeIcon icon={faTv} className="icons"/>&nbsp;&nbsp;WatchList</NavLink>
              <NavLink to="/comingsoon"><FontAwesomeIcon icon={faChess} className="icons"/>&nbsp;&nbsp;Coming Soon</NavLink>
              <NavLink to="/downloads"><FontAwesomeIcon icon={faDownload} className="icons"/>&nbsp;&nbsp;DownLoads</NavLink>
              <NavLink to="/community"><FontAwesomeIcon icon={faPeopleLine} className="icons"/>&nbsp;&nbsp;Community</NavLink>
              <NavLink to="/bookmark"><FontAwesomeIcon icon={faBook} className="icons"/>&nbsp;&nbsp;Bookmarks</NavLink>
        </div>    
        </>
    )
}

export default SideBar