import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Homepage'
import Resume from './Components/Resume'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
import Project from './Components/Project'
import Contact from './Components/Contact'

function App() {
  return (
   <>
   <Navbar/>
   <Homepage/>
   
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route  path='/resume' element={<Resume/>} />
    <Route path='/pr' element={<Project/>}  />
    <Route path='/contact' element={<Contact/>} />
   </Routes>
   <Footer/>
   </>
  )
}

export default App