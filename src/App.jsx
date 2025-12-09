import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import FloatingButtons from './Components/FloatingButtons'

function App() {

  return (
    <>
    <ScrollToTop/>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    <FloatingButtons/>
    </>
  )
}

export default App
