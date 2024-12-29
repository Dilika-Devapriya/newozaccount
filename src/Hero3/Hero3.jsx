// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero3.css'
import { motion } from 'framer-motion'; // Importing Framer Motion
import { useInView } from 'react-intersection-observer'; // Correct import

const Hero3 = () => {

  const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: true });
  return (
    <div className='hero3'>
      <div className='container'>
        <motion.div
          ref={h2Ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: h2InView ? 1 : 0, x: h2InView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >


          <div className='hero3-text'>
            <h1>Your <b className='text3'>success</b> is <b>our priority</b></h1>
            <div className='parg'><p> We go beyond the basics working hand in hand with you to uncover opportunities, </p>
              <p> streamline operations, and drive growth</p></div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero3
