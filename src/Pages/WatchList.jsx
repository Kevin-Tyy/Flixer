import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const WatchList = () => {
  useEffect(()=>{
    document.title = "Flick Flair | Your Watchlist"
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <div className='pages'>
        <h1>You Currently have no movies added to your Watch list</h1>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default WatchList