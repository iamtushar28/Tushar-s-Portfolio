import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className='lg:py-14 lg:px-16 p-4 w-full flex flex-col gap-12 md:gap-0 md:flex-row justify-between'>

            <div className='flex flex-col gap-4 md:gap-6'>
                <div className='flex items-center gap-3'>
                    <div className='h-5 w-5 bg-green-200 rounded-full animate-pulse flex justify-center items-center'>
                        <FaCircle className='text-[#14CF93] text-xs' />
                    </div>
                    <p className='text-[#14CF93]'>Available for work</p>
                </div>

                <h2 className='text-4xl md:text-5xl font-[500] text-zinc-700 leading-12 md:leading-16'>Ready to scale up <br /> your business</h2>

                <button className='px-8 h-[52px] w-fit text-lg text-white font-[500] bg-[#14CF93] rounded-4xl cursor-pointer flex gap-3 justify-center items-center'>
                    Start a Project
                    <FaArrowRightLong />
                </button>
            </div>

            <div className='md:w-[28%] flex flex-col items-start'>

                <h4 className='text-zinc-400'>Follow me on:</h4>

                <div className='flex gap-4 mt-6 md:mt-8'>
                    {/* Email button */}
                    <button
                        className="h-16 w-16 text-3xl text-zinc-500 hover:text-white hover:bg-[#14CF93] hover:border-[#14CF93] border border-zinc-300 rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-200"
                    >
                        <LuLinkedin />
                    </button>
                    <button
                        className="h-16 w-16 text-3xl text-zinc-500 hover:text-white hover:bg-[#14CF93] hover:border-[#14CF93] border border-zinc-300 rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-200"
                    >
                        <FiGithub />
                    </button>
                </div>

            </div>

        </footer>
    )
}

export default Footer