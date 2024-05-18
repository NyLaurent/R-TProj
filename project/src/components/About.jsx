import sitImg from '../assets/sit.png'
import girlImg from '../assets/girl.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


const About = () => {
    return (
        <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='about' >
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <motion.div className='md:w-1/2'
                 variants={fadeIn("right", 0.2)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: false, amount: 0.7 }}>
                    <img src={sitImg} alt="" />
                </motion.div>
                <motion.div className='md:w-2/5'
                
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                        Master your assignments with precision <span className='text-secondary'>
                            For better Learning
                        </span>
                    </h2>
                    <p className='text-tartiary text-lg mb-7'>Ensures all students receive the same instructions
                         and materials, reducing
                         confusion and ensuring consistency.</p>
                         <button className='btnPrimary'>Get Started</button>
                </ motion.div>

            </div>


         

            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <motion.div className='md:w-1/2'
                 variants={fadeIn("up", 0.2)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: false, amount: 0.7 }}>
                    <img src={girlImg} alt="" />
                </ motion.div>
                <motion.div className='md:w-2/5'
                 variants={fadeIn("right", 0.2)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: false, amount: 0.7 }}>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                        Master your assignments with precision <span className='text-secondary'>
                            For better Learning
                        </span>
                    </h2>
                    <p className='text-tartiary text-lg mb-7'>Ensures all students receive the same instructions
                         and materials, reducing
                         confusion and ensuring consistency.</p>
                         <button className='btnPrimary'>Get Started</button>
                </motion.div>

            </div>



        </div>
    )
}

export default About