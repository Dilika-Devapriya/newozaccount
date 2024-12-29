// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Whowe.css'
import { motion } from 'framer-motion'; // Importing Framer Motion
import { useInView } from 'react-intersection-observer'; // Correct import



const Whowe = () => {


    const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: true });
    
    return (
        <div className='Whowe'>
            <div className='container'>

                <motion.div
                    ref={h2Ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: h2InView ? 1 : 0, x: h2InView ? 0 : -100 }}
                    transition={{ duration: 1 }}
                >

                    <div className='ourstory'>

                        <div className='rw'>
                            <div className='cl'>

                            </div>
                            <div className='cl'>
                                <h2>Our Story </h2>
                                <p> OzAccountants was started with the vision of being a leading provider of
                                    innovative financial solutions in Australia. At present, we have employees
                                    with more than 20 years of experience in the fields of accounting, auditing and taxation.</p>
                                <br />
                                <p> A team of professionals with experience in working for Chartered accountants’ firms,
                                    commercial entities, non-profit entities and financial institutions was formed.</p>
                                <br />
                                <p> We are highly acknowledged by our clients for providing comprehensive accounting,
                                    taxation, and advisory services tailored to their needs. This showcases our reliability and dedication in our work. </p>

                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default Whowe
