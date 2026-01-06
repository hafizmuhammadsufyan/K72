import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects'
import Navbar from './Components/Navbar/Navbar'
import FullScreenNav from './Components/Navbar/FullScreenNav'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="agence" element={<Agence/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/fullscreennav" element={<FullScreenNav/>} />
      </Routes>
    </div>
  )
}

export default App