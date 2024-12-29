// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Section1.css'
import image1 from '../../assets/image3.png'

const Section = () => {
  return (
    <div className='container'>
      <div className='sector'>
        <div className='sector-left'>
          <h2>Welcome to <b className='bold'>OzAccountants!</b> </h2>
          <h3>Thank you for choosing us as your financial partner !</h3>

          <p className='details1'>At OzAccountants, our team of experts ensure financial prosperity
            in terms of accounting, taxation and advisory services. We work
            towards building long term favourable relationship with
            our clients through our quality service. Our clients
            include large and small size corporations, start-ups
            and family-owned businesses</p>
        </div>

        <div className='sector-right'>
          <img src={image1} className='image1' />
        </div>
      </div>
    </div>
  )
}

export default Section
