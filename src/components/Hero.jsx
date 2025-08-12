import React from 'react'
import { motion } from "framer-motion";
import { BiSolidBadgeCheck } from "react-icons/bi";

const Hero = () => {

    const badgeVariants = {
        hidden: { rotateY: 90, opacity: 0 },
        visible: {
            rotateY: 0,
            opacity: 1,
            transition: { duration: 0.2, ease: "easeInOut" },
        },
    };

    return (
        <section
            id="home"
            className="lg:h-screen mt-12 py-20 px-4 mb-12 lg:py-0 lg:px-0 flex flex-col justify-center items-center relative"
        >
            {/* hero title */}
            <div
                className="flex items-center lg:gap-40 gap-4"
            >
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="md:text-[100px] lg:text-[130px] text-[60px] font-[700]"
                >
                     <span className='hidden md:block'>Creative</span> <span className='block md:hidden'>I'm</span>
                </motion.h1>

                <div className="text-[#14CF93] hidden md:flex gap-2 items-center">
                    <span className="font-semibold text-2xl md:text-3xl">{'{'}</span>
                    <motion.div
                        className="lg:text-xl text-sm flex items-center gap-1 lg:gap-4"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={badgeVariants}>
                            <BiSolidBadgeCheck className="text-4xl md:text-3xl lg:text-5xl" />
                        </motion.div>

                        <motion.h4 className="font-[500] text-center" variants={badgeVariants}>
                            OpenforWork
                        </motion.h4>
                    </motion.div>

                    <span className="font-semibold text-2xl md:text-3xl">{'}'}</span>
                </div>
            </div>

            <div className="md:text-[100px] lg:text-[130px] text-[44px] font-[500] flex gap-4 lg:gap-12 items-center">
                <motion.h2
                    className="text-5xl md:text-[100px] lg:text-[130px] font-[600] text-[#14CF93]"
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
            <div className="h-28 w-28 lg:h-48 lg:w-48 bg-[#14CF93] rounded-full blur-[90px] absolute -bottom-16 right-20"></div>
        </section>
    )
}

export default Hero