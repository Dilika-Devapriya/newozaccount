// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Pages/service'
import Home from './Pages/Home'
import About from './Pages/About'
import Contacus from './Pages/contactus'
import Layout from './Pages/Layout'

const App = () => {



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Services" element={<Services />} />
            <Route path="About" element={<About />} />
            <Route path="Contacus" element={<Contacus />} />
          </Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App
