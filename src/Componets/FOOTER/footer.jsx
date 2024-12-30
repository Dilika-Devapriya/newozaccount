// eslint-disable-next-line no-unused-vars
import React from 'react'
import './footer.css'
import logo from '../../assets/oz_logo.png'
import facebook from '../../assets/facebook.png'
import linkdin from '../../assets/linkdin.png'
import twiter from '../../assets/tiwiter.png'
import logos from '../../assets/logos.png'


const footer = () => {
  return (
    <div className='footer'>
      <div className='container'>

        <div className='row'>

          <div className='col'>
            <img src={logo} alt="" className="logo" />
            <p className='abt1'>At OzAccountants, our team of experts ensure financial prosperity in terms of accounting, taxation and
              advisory services</p>
            <div className='details'>
              <p><b>Contact No. -</b>  02 7228 7000 / 0404 281 000</p>
              <p><b>Emial -</b> info@ozaccountants.com.au</p>
              <p><b>Postal address -</b> PO Box 3440 Parramatta NSW 2124</p>
              <p><b>Office address      -</b>   2/164, Great western Highway, Westmead, NSW 2145</p>
            </div>

            <img src={logos}  className='logoss'/>
            
          </div>


          <div className='col'>
            <h2>Quick Link</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Partner Programme</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className='col'>
            <h2>Services</h2>
            <ul>
              <li><a href="#">Accounting and Bookkeeping</a></li>
              <li><a href="#">Taxation and Compliance</a></li>
              <li><a href="#">Business and Risk Advisory</a></li>
              <li><a href="#">SMSF administration & compliance</a></li>
              <li><a href="#">Mortgage broking</a></li>
              <li><a href="#">Training and Partner program</a></li>
            </ul>
          </div>

          <div className='col'>
            <h2>Legal</h2>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
            <br></br>
            <h2>Our Social Media</h2>
            <br></br>
            <div className='socila-icons'>
              <a href='#'><img src={facebook} /></a>
              <a href='#'><img src={linkdin} /></a>
              <a href='#'><img src={twiter} /></a>
            </div>
          </div>

          

        </div>

        <div className="copy">
          <hr/>
          <p>Copyright © 2024 By OZAccountants All Rights Reserved.</p>
          <p>Design and Developed by XGEN Solution</p>
        </div>
      </div>

    </div>
  )
}

export default footer
