import React, { useState } from 'react'
import { motion } from "framer-motion";
import Contact from '/contact.svg'
import { FaUserAstronaut } from "react-icons/fa";
import { RiLink } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

const Contactme = () => {

    const zoomInVariant = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut",
            },
        },
    };

    const [hoverTarget, setHoverTarget] = useState(null);

    const getStyle = (targets) =>
        targets.includes(hoverTarget)
            ? 'text-[#14CF93] border-b border-[#14CF93]'
            : '';


    return (
        <section
            id='contact'
            className='mb-12 px-4 py-20 paint-bg-section flex justify-center items-center'>

            <motion.div
                variants={zoomInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className='flex flex-col gap-4 justify-center items-center'
            >

                <h4 className='text-lg text-zinc-600'>DROP ME A MESSAGE</h4>

                <img src={Contact} alt="Contact" />

                {/* <h1 className='text-6xl font-semibold text-zinc-700'>iamtushar2830@gmail.com</h1> */}
                {/* Email text */}
                <h1 className="text-2xl md:text-6xl font-semibold text-zinc-700 mt-4 pb-4 cursor-pointer transition-all duration-300">
                    {/* iamtushar part */}
                    <span className={`transition-all duration-300 ${getStyle(['profile', 'link', 'email'])}`}>
                        iamtushar
                    </span>
                    {/* 28 part */}
                    <span className={`transition-all duration-300 ${getStyle(['link', 'email'])}`}>
                        28
                    </span>
                    {/* @gmail.com part */}
                    <span className={`transition-all duration-300 ${getStyle(['email'])}`}>
                        @gmail.com
                    </span>
                </h1>

                {/* Buttons */}
                <div className="flex gap-10 mt-6 md:mt-16">
                    {/* Profile button */}
                    <button
                        onMouseEnter={() => setHoverTarget('profile')}
                        onMouseLeave={() => setHoverTarget(null)}
                        className="h-16 w-16 text-3xl text-zinc-500 hover:text-white hover:bg-[#14CF93] hover:border-[#14CF93] border border-zinc-300 rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-200"
                    >
                        <FaUserAstronaut />
                    </button>

                    {/* Link button */}
                    <button
                        onMouseEnter={() => setHoverTarget('link')}
                        onMouseLeave={() => setHoverTarget(null)}
                        className="h-16 w-16 text-3xl text-zinc-500 hover:text-white hover:bg-[#14CF93] hover:border-[#14CF93] border border-zinc-300 rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-200"
                    >
                        <RiLink />
                    </button>

                    {/* Email button */}
                    <button
                        onMouseEnter={() => setHoverTarget('email')}
                        onMouseLeave={() => setHoverTarget(null)}
                        className="h-16 w-16 text-3xl text-zinc-500 hover:text-white hover:bg-[#14CF93] hover:border-[#14CF93] border border-zinc-300 rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-200"
                    >
                        <FiMail />
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default Contactme