import React, { useEffect } from 'react'
import Navbar from '../../components/Header/Navbar'

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Netflix'
  }, [])
  return (
    <div>
      <Navbar/> 
      <main>
        <section>
          
        </section>
      </main>
    </div>
  )
}

export default Home