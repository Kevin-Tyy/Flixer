import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const Community = () => {
  useEffect(()=>{
    document.title = "FLickFlair | Community"
    window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
  }, [])
  return (
    <div className='pages'>
        <h1>Sign in to join the Community</h1>
        <Link to="/">Go to home</Link>

    </div>
  )
}

export default Community