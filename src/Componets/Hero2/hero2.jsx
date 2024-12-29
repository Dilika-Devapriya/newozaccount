// eslint-disable-next-line no-unused-vars
import React from 'react'
import './hero2.css'
import { motion } from 'framer-motion'; // Importing Framer Motion
import { useInView } from 'react-intersection-observer'; // Correct import

const hero2 = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: true });
    return (
        <div className='hero2'>
            <div className='container'>

                <motion.div
                                    ref={h2Ref}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: h2InView ? 1 : 0, x: h2InView ? 0 : -100 }}
                                    transition={{ duration: 1 }}
                                >
                                     <div className='hero2-text'>
                    <h1>The Path to <b className='text2'>success</b> and<b className='text2'> progress </b>is <b>guiding.</b></h1>
                    <div className='parag'><p> We are fervent specialists committed to changing the world.</p>
                        <p> Our motivation is success, not only our objective.</p></div>
                </div>
                                </motion.div>
               
            </div>
        </div>
    )
}

export default hero2
