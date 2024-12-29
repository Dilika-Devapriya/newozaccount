// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero4.css'
import { motion } from 'framer-motion'; // Importing Framer Motion
import { useInView } from 'react-intersection-observer'; // Correct import
const Hero4 = () => {
      const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: true });
    
  return (
    <div className='hero4'>
          <div className='container'>
            <motion.div
              ref={h2Ref}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: h2InView ? 1 : 0, x: h2InView ? 0 : -100 }}
              transition={{ duration: 1 }}
            >
    
    
              <div className='hero4-text'>
                <h1>Let’s start <b className='text4'>building</b> your <b>success story!</b></h1>
                <div><p className='parg'> We’re committed to helping you achieve your goals with solutions designed for you, your business, and those who matter most. </p>
                  </div>
              </div>
            </motion.div>
    
          </div>
        </div>
  )
}

export default Hero4
