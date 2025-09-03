import React from 'react'
import { motion } from "framer-motion";

const WorkProcess = () => {

    const directionalVariant = {
        hidden: (custom) => ({
            y: custom.direction === 'top' ? -100 : 100,
            opacity: 0,
        }),
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom.delay,
                duration: 0.1,
                ease: "easeOut",
            },
        }),
    };


    const process = [
        {
            step: "01",
            image: '/process1.webp',
            title: "Ideas & Requirements",
            subtitle: "Does it click?"
        },
        {
            step: "02",
            image: '/process2.webp',
            title: "Concept & Final Design",
            subtitle: "A pinch of magic"
        },
        {
            step: "03",
            image: '/process3.webp',
            title: "Development & Testing",
            subtitle: "Even more magic"
        },
        {
            step: "04",
            image: '/process4.webp',
            title: "Website Onboarding",
            subtitle: "Key handover"
        }
    ]

    return (
        <section className="lg:py-24 lg:px-16 py-16 px-3 w-full">

            {/* title */}
            <h4 className='text-4xl md:text-7xl font-[500] text-zinc-700 mb-12 md:mb-16 text-center md:text-start'>
                How i bring <br className='block md:hidden' />
                <span className='italianno-regular text-5xl md:text-7xl text-[#14CF93]'> Ideas to life</span>
            </h4>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden'>

                {/* process card */}
                {process.map((process, idx) => {
                    const direction = idx % 2 === 0 ? 'top' : 'bottom'; // alternate direction
                    const delay = idx * 0.1; // increase delay per card

                    return (
                        <motion.div
                            key={idx}
                            className={`min-w-[24%] h-fit pt-20 pb-4 md:pb-0 border border-zinc-200 rounded-3xl flex flex-col justify-center items-center relative cursor-pointer hover:scale-95 group transition-all duration-200 ${idx % 2 === 1 ? 'lg:mt-20' : ''
                                }`}
                            variants={directionalVariant}
                            custom={{ direction, delay }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* process number */}
                            <h4 className="text-2xl font-semibold text-zinc-400 group-hover:text-[#14CF93] absolute top-6 right-6">
                                {process.step}
                            </h4>

                            {/* visual image */}
                            <img src={process.image} alt={`Process Visual-${idx + 1}`} className='h-28' />

                            <div className="w-full p-6 text-start mt-6 lg:mt-0">
                                <h4 className="text-lg text-zinc-400 group-hover:text-[#14CF93]/80">
                                    {process.subtitle}
                                </h4>
                                <h2 className="text-2xl font-semibold text-zinc-700 group-hover:text-[#14CF93]">
                                    {process.title}
                                </h2>
                            </div>
                        </motion.div>
                    );
                })}


            </div>

            <div className='w-full pt-32 flex gap-10 flex-col justify-center items-center'>
                <img src="/undraw_progressive-app_9517.svg" alt="undraw_designer_efwz" className='h-64' />
                <h4 className='text-2xl text-zinc-500 text-center'>I ♥️ Frontend Developement</h4>
            </div>

        </section>

    )
}

export default WorkProcess