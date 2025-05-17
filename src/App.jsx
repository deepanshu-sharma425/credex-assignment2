import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import ImageScroll from './components/imagescroll/imagescroll'
import Modern from './components/modernizing/modernizing'
import Features from './components/features/features'
import Demo from './components/demo/demo'
import Footer from './components/footer/footer'
function App() {
  return (
    <>
 
      <Navbar/>
      <About/>
      <ImageScroll/>
      <Modern/>
      <Features/>
      <Demo/>
      <Footer/>
    
    </>
  )
}

export default App
