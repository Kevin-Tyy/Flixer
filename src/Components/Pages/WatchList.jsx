import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const WatchList = () => {
  return (
    <div className='pages'>
        <h1>You Currently have no movies added to your Watch list</h1>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default WatchList