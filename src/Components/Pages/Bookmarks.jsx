import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
const Bookmarks = () => {
  return (
    <div className='pages'>
        <h1>You Currently have no Movies Bookmarked</h1>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Bookmarks