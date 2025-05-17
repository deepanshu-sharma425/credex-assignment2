import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import ImageScroll from './components/imagescroll/imagescroll'

function App() {
  return (
    <>
 
      <Navbar/>
      <About/>
      <ImageScroll/>
    
    </>
  )
}

export default App
