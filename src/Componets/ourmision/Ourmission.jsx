// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Ourmission.css'
import { motion } from 'framer-motion'; // Importing Framer Motion
import { useInView } from 'react-intersection-observer'; // Correct import


const Ourmission = () => {

        const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: true });
    
    return (
        <div className='ourmission'>
            <div className='container'>
                <motion.div
                    ref={h2Ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: h2InView ? 1 : 0, x: h2InView ? 0 : -100 }}
                    transition={{ duration: 1 }}
                >


                    <div className='mission'>
                        <div className='ro'>
                            <div className='co'>
                                <h2>Our Misson</h2>
                                <p>We strive to empower our clients through personalized financial guidance.</p>
                                <br />
                                <p> Let  us collaborate to achieve your financial goals and build a prosperous future together.
                                </p>
                                <img src='' />
                            </div>

                            <div className='co'>
                                <img src='' />
                            </div>
                        </div>

                    </div>
                </motion.div>



            </div>
        </div>
    )
}

export default Ourmission
