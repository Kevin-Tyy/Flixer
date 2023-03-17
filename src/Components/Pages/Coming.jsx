import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const Coming = () => {
  return (
    <div className='pages'>
        <h1>
            This is coming soon page!
        </h1>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Coming