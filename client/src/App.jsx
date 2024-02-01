import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='app' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home toggle={toggle} isOpen={isOpen} />} />
          <Route path='/about-us' element={<AboutUs toggle={toggle} isOpen={isOpen} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App