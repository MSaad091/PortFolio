import React from 'react'
import Navbar from './Navbar'
import '../Stylesheets/Home.css'
import About from './About'
// import Resume from './Resume'

function Home() {
  return (
   <>
  
    <div className='home'>
         {/* <Navbar/> */}
        {/* <h1>Home</h1> */}
      {/* <Sidebar/> */}
    
      <About/>
      {/* BS Computer Science – Planned, starting 2026 (alongside professional work) */}
    
    </div>
   </>
  )
}

export default Home