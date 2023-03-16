import { faBook, faDownload, faPeopleGroup, faPeopleLine, faSearch, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
  return (
        <>
        <div className='sidebar'>
              <NavLink><FontAwesomeIcon icon={faBook}/> &nbsp;&nbsp;Browse</NavLink>
              <NavLink><FontAwesomeIcon icon={faTv}/> &nbsp;&nbsp;WatchList</NavLink>
              <NavLink><FontAwesomeIcon icon={faDownload}/> &nbsp;&nbsp;Coming Soon</NavLink>
              <NavLink><FontAwesomeIcon icon={faPeopleLine}/> &nbsp;&nbsp;Community</NavLink>
              <NavLink><FontAwesomeIcon icon={faSearch}/> &nbsp;&nbsp;Search</NavLink>
        </div>    
        </>
    )
}

export default SideBar