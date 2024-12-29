// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Componets/Navbar/Navabar'
import Footer from '../Componets/FOOTER/footer'
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
