// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import logo from '../../assets/oz_logo.png'
import './Navbar.css'
import { NavLink } from "react-router-dom";


// eslint-disable-next-line react-refresh/only-export-components
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contacus",
    link: "/contacus",
  },
];


const Navabar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <>
        <img src={logo} alt="" className="logo" />
        <ul >

          <li className='lis'>
          <NavLink to="/" activeClassName="active">
            <a>Home</a>
          </NavLink>
          </li>

          <li className='lis'>
          <NavLink to="/services" activeClassName="active">
            <a>Services</a>
          </NavLink>
          </li>

          <li className='lis'>
          <NavLink to="/about" activeClassName="active">
           <a>About us</a> 
          </NavLink>
          </li>

          <li className='lis'><NavLink to="/contacus" className="btn">
          Contact us
          </NavLink></li>

          
        </ul>
      </>
    </nav>
  );
}

export default Navabar
