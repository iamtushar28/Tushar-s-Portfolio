import React from 'react'
import MyImage from '/tushar28.png'
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
    return (
        <nav className='lg:py-12 lg:px-16 p-4 flex items-center justify-between'>

            <div className='flex gap-4 items-center'>
                {/* profile image */}
                <div className='h-14 w-14 lg:h-[64px] lg:w-[64px] rounded-full relative'>
                    <img src={MyImage} alt="MyImage" className='h-14 w-14 lg:h-[64px] lg:w-[64px] rounded-full' />
                    {/* badge */}
                    <div className='h-[26px] w-[26px] text-white bg-[#14CF93] rounded-full flex justify-center items-center absolute bottom-0 -right-2'>
                        <FaStar className='text-sm' />
                    </div>
                </div>

                {/* name */}
                <h2 className='text-lg font-[500]'>Hii! I'm Tushar😎</h2>
            </div>

            {/* links */}
            <div className='hidden lg:flex gap-12'>

                <button className='text-lg hover:text-[#14CF93] font-[500] cursor-pointer transition-all duration-300'>
                    Hey
                </button>
                <button className='text-lg hover:text-[#14CF93] font-[500] cursor-pointer transition-all duration-300'>
                    Work
                </button>
                <button className='text-lg hover:text-[#14CF93] font-[500] cursor-pointer transition-all duration-300'>
                    Services
                </button>
                <button className='text-lg hover:text-[#14CF93] font-[500] cursor-pointer transition-all duration-300'>
                    About
                </button>

                <button className='w-[160px] h-[52px] text-lg text-white font-[500] bg-[#14CF93] rounded-4xl cursor-pointer flex gap-3 justify-center items-center'>
                    Let's Talk
                    <FaArrowRightLong />
                </button>

            </div>

            {/* open sidebar button */}
            <button className='block md:hidden text-3xl'>
                <TbMenu3/>
            </button>

        </nav>
    )
}

export default Navbar