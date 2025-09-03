import React from 'react'
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const MyWork = () => {

    const cardVariants = {
        hidden: { y: 80, opacity: 0 },
        visible: (customDelay) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: customDelay, // custom delay per card
                duration: 0.4,
                ease: "easeOut",
            },
        }),
    };

    const projects = [
        {
            previewimage: '/elvia.webp',
            name: 'Elvia',
            featured: 'New',
            Description: 'Multiplayer Quiz Platform',
            hostlink: 'http://elvia-ai.vercel.app/',
            githublink: 'https://github.com/iamtushar28/Elvia',
        },
        {
            previewimage: '/dev.webp',
            name: 'Dev',
            Description: 'AI Powered Blog Webapp',
            hostlink: 'https://dev-iota-one.vercel.app/',
            githublink: 'https://github.com/iamtushar28/dev',
        },
        {
            previewimage: '/cybershop.webp',
            name: 'Cybershop',
            Description: 'Ecommerce Shop',
            hostlink: 'https://mobileshop-reactjs.netlify.app/',
            githublink: 'https://github.com/iamtushar28/mobileShop-reactjs',
        },
        {
            previewimage: 'travelo.webp',
            name: 'Travelo',
            Description: 'Travel Website',
            hostlink: 'https://travelo28.vercel.app/',
            githublink: 'https://github.com/iamtushar28/travelo',
        },
        {
            previewimage: 'better.webp',
            name: 'Better.com',
            Description: 'Better Mortagae landing page',
            hostlink: 'https://bettercom-bice.vercel.app/',
            githublink: 'https://github.com/iamtushar28/better.com',
        },
    ]

    return (
        <section id='work' className='lg:py-6 lg:px-16 p-2 w-full'>
            <h4
                className='text-4xl md:text-7xl font-[500] text-zinc-700 mb-12'>Selected <span className='italianno-regular text-5xl md:text-7xl text-[#14CF93]'>Work</span>
            </h4>

            {/* project card */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                {projects.map((projects, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        custom={idx * 0.3} // Delay increases for each card
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full h-[28rem] lg:h-[36rem] rounded-4xl overflow-hidden relative group">

                        {/* project image */}
                        <img
                            src={projects.previewimage}
                            alt="Project1"
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                        />

                        {/* project info */}
                        <div className="w-[92%] h-24 lg:h-32 px-4 lg:px-8 bg-white/20 rounded-3xl flex justify-between items-center absolute bottom-6 left-1/2 -translate-x-1/2">

                            <div>
                                {/* project name */}
                                <h2 className='text-lg lg:text-2xl font-semibold text-white'>
                                    {projects.name}
                                    {projects.featured && (
                                        <span className='text-sm ml-4 text-green-400 animate-pulse'>{projects.featured}</span>
                                    )}
                                </h2>
                                <p className='text-sm text-white/80'>{projects.Description}</p>
                            </div>

                            {/* project links */}
                            <div className='flex gap-3 lg:gap-5'>

                                {/* github */}
                                <a href={projects.githublink} target='_blank' className='text-2xl lg:text-3xl text-white hover:scale-110 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300'>
                                    <BsGithub />
                                </a>

                                {/* preview */}
                                <a href={projects.hostlink} target='_blank' className='text-2xl lg:text-3xl text-white hover:scale-110 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300'>
                                    <FiExternalLink />
                                </a>

                            </div>

                        </div>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}

export default MyWork