import React from 'react';
import { motion, scale } from "motion/react"

const circleVariants = {
    animate1: {
        scale: [1, 1.3, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
}

const BlureBackground = () => {
    return (
        <div className='fixed top-0 left-0 w-full -z-10 h-full overflow-hidden flex justify-center items-center blur-[300px] opacity-75'>
            <motion.div className='bg-blue-500 w-[350px] h-[259px] rounded-full absolute'
                variants={circleVariants}
                animate='animate1'
            >
            </motion.div>
        </div>
    );
};

export default BlureBackground;