import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const Downloads = () => {
  return (
    <div className='pages'>
        <h1>You Currently have no Downloads</h1>
        <Link to="/">Go to Home</Link>

    </div>
  )
}

export default Downloads