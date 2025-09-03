import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
    return (
        <nav className='lg:py-6 lg:px-16 p-4 bg-white border-b border-zinc-100 flex items-center justify-between fixed top-0 left-0 right-0 z-40'>

            <div className='flex gap-4 items-center'>
                {/* profile image */}
                <div className='h-14 w-14 lg:h-[64px] lg:w-[64px] rounded-full relative'>
                    <img src='/tushar28.webp' alt="MyImage" className='h-14 w-14 lg:h-[64px] lg:w-[64px] rounded-full' />
                    {/* badge */}
                    <div className='h-[26px] w-[26px] text-white bg-[#14CF93] rounded-full flex justify-center items-center absolute bottom-0 -right-2'>
                        <FaStar className='text-sm' />
                    </div>
                </div>

                {/* name */}
                <h2 className='text-lg font-[500]'>Hii! I'm Tushar😎</h2>
            </div>

            {/* links */}
            <div className='hidden lg:flex items-center gap-12'>

                <a href="#home" className="group relative h-[1.5em] overflow-hidden text-lg font-[500] cursor-pointer">
                    <span className="block group-hover:-translate-y-full transition-all duration-300 text-black">
                        Hey
                    </span>
                    <span className="absolute left-0 top-full block group-hover:top-0 transition-all duration-300 text-[#14CF93]">
                        Hey
                    </span>
                </a>

                <a href="#work" className="group relative h-[1.5em] overflow-hidden text-lg font-[500] cursor-pointer">
                    <span className="block group-hover:-translate-y-full transition-all duration-300 text-black">
                        Work
                    </span>
                    <span className="absolute left-0 top-full block group-hover:top-0 transition-all duration-300 text-[#14CF93]">
                        Work
                    </span>
                </a>

                <a href="#contact" className="group relative h-[1.5em] overflow-hidden text-lg font-[500] cursor-pointer">
                    <span className="block group-hover:-translate-y-full transition-all duration-300 text-black">
                        Contact
                    </span>
                    <span className="absolute left-0 top-full block group-hover:top-0 transition-all duration-300 text-[#14CF93]">
                        Contact
                    </span>
                </a>

                <a
                    href="https://www.linkedin.com/in/tushar-suryawanshi-599806299/"
                    target="_blank"
                    className="group w-[160px] h-[52px] text-lg text-white font-[500] bg-[#14CF93] rounded-4xl cursor-pointer flex justify-center items-center gap-2 overflow-hidden"
                >
                    {/* Text */}
                    <span className="relative h-[1.2em] flex items-center overflow-hidden">
                        <span className="block group-hover:translate-y-full transition-all duration-300">
                            Let's Talk
                        </span>
                        <span className="absolute top-[-100%] left-0 group-hover:top-0 transition-all duration-300">
                            Let's Talk
                        </span>
                    </span>

                    {/* Icon */}
                    <span className="relative h-[1.2em] flex items-center overflow-hidden">
                        <span className="block group-hover:-translate-y-full transition-all duration-300">
                            <FaArrowRightLong />
                        </span>
                        <span className="absolute top-full left-0 group-hover:top-0 transition-all duration-300">
                            <FaArrowRightLong />
                        </span>
                    </span>
                </a>

            </div>

            {/* open sidebar button */}
            <button className='block md:hidden text-3xl'>
                <TbMenu3 />
            </button>

        </nav>
    )
}

export default Navbar