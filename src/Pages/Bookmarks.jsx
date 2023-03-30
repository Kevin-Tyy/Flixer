import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
const Bookmarks = () => {
  useEffect(()=>{
    document.title = "Flick Flair | Bookmarks"
    window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
  }, [])
  return (
    <div className='pages'>
        <h1>You Currently have no Movies Bookmarked</h1>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Bookmarks