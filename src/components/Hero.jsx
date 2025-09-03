import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {

    return (
        <section
            id="home"
            className="min-h-screen h-auto mt-16 pt-20 md:pt-0 md:pb-0 px-4 mb-6 md:mb-12 lg:py-0 lg:px-0 flex gap-8 md:gap-16 flex-col-reverse md:flex-col justify-center items-center relative"
        >
            {/* hero title */}
            <div
                className="flex items-end lg:gap-40 gap-4"
            >
                <div>
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="md:text-[100px] lg:text-[140px] text-[60px] font-[700]"
                    >
                        <span className='hidden md:block'>Creative</span>
                    </motion.h1>

                </div>

                <div className="">
                    <img src="/undraw_designer_efwz.svg" alt="undraw_designer_efwz" className='h-[22rem]' />
                </div>

            </div>

            <div className="text-7xl md:text-[100px] lg:text-[150px] font-[600] flex flex-col md:flex-row gap-4 lg:gap-12 items-center">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    <span className='block md:hidden'>Creative</span>
                </motion.h1>

                <motion.h2
                    className="text-[#14CF93] font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
                >
                    Software
                </motion.h2>

                <motion.h1
                    className="font-[600] tracking-tighter"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.6 }}
                >
                    Engineer
                </motion.h1>
            </div>

            {/* green blur visual */}
            <div className="h-28 w-28 lg:h-48 lg:w-48 bg-[#23f279b0] rounded-full blur-[90px] absolute -bottom-16 right-20"></div>
        </section>
    )
}

export default Hero