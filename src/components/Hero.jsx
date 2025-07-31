import React from 'react'
import { BiSolidBadgeCheck } from "react-icons/bi";

const Hero = () => {
    return (
        <section className='lg:h-screen mt-12 py-20 px-4 mb-12 lg:py-0 lg:px-0 flex flex-col justify-center items-center relative'>

            {/* hero title */}
            <div className='flex items-center lg:gap-40 gap-4' data-aos="fade-down">
                <h1 className='md:text-[100px] lg:text-[130px] text-[40px] font-[500]'>Creative</h1>

                <div className='text-[#14CF93] flex gap-2 items-center'>
                    <span className='font-semibold text-2xl md:text-3xl'>{'{'}</span>
                    <div className='lg:text-xl text-sm flex items-center gap-1 lg:gap-4'>
                        <BiSolidBadgeCheck className='text-4xl md:text-3xl lg:text-5xl' />
                        <h4 className='font-[500] text-center'>
                            Open for Work🧑‍💻
                        </h4>
                    </div>
                    <span className='font-semibold text-2xl md:text-3xl'>{'}'}</span>
                </div>

            </div>

            <div className='md:text-[100px] lg:text-[130px] text-[44px] font-[500] flex gap-6 lg:gap-12 items-center'>
                <h2 className='italianno-regular text-5xl md:text-[100px] lg:text-[130px] font-[500] text-[#14CF93]'>
                    Visual
                </h2>
                <h1>
                    Developer
                </h1>
            </div>

            {/* green blur visual */}
            <div className='h-28 w-28 lg:h-48 lg:w-48 bg-[#14CF93] rounded-full blur-3xl absolute -bottom-8 right-0'>
            </div>

        </section>
    )
}

export default Hero