import React from 'react'
import MyImage from '/tushar28.png'
import MapImage from '/map.svg'
import { GiIndiaGate } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import { BiSolidUpArrow } from "react-icons/bi";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SiGraphql } from "react-icons/si";
import { LuDatabase } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiCoffee } from "react-icons/fi";


const Skills = () => {

  return (
    <>
      {/* <h4 className='italianno-regular text-3xl ml-4 text-[#14CF93] font-[500]'>I am good at</h4> */}
      <h4 className='text-4xl md:text-6xl font-[500] text-zinc-700 lg:py-6 lg:px-16 p-4'>Tech <span className='italianno-regular text-5xl md:text-7xl text-[#14CF93]'>Stack</span></h4>

      <section className='w-full mb-4 px-3 flex flex-col-reverse md:flex-row justify-center gap-8'>

        {/* location & experience card */}
        <div className='w-full md:w-[45%] h-fit overflow-hidden border border-zinc-200 rounded-4xl'>

          {/* map image */}
          <div className='relative'>

            {/* location name */}
            <button className='px-6 py-2 rounded-4xl bg-[#ffdd57] shadow flex gap-1 items-center absolute top-4 right-4'>
              <GiIndiaGate className='text-lg' />
              India
            </button>

            {/* map image */}
            <img src={MapImage} alt="map" className='w-full h-72 md:h-[19rem] lg:h-[28.5rem]' />

            {/* location indicator */}
            <div className='h-36 w-36 md:h-44 md:w-44 bg-[#ffdd5736] rounded-full flex justify-center items-center absolute top-[30%] left-[30%] lg:left-[34%]'>
              <img src={MyImage} alt="MyImage" className='h-14 w-14 lg:h-[64px] lg:w-[64px] rounded-full' />
            </div>

          </div>

          <div className='py-6 lg:py-10 flex gap-4 md:gap-6 justify-center items-center'>

            {/* live in button */}
            <button className='px-3 py-2 hover:text-[#14CF93] hover:ring-1 ring-[#14CF93] rounded-3xl flex gap-1 items-center cursor-pointer transition-all duration-300'>
              <CiLocationArrow1 className='text-xl' />
              I'm Live In
            </button>

            {/* experience button */}
            <button className='px-3 py-2 hover:text-[#14CF93] hover:ring-1 ring-[#14CF93] rounded-3xl flex gap-1 items-center cursor-pointer transition-all duration-300'>
              <FiCoffee className='text-xl' />
              My Experience
            </button>

          </div>

        </div>

        {/* skills card */}
        <div className='w-full md:w-[45%] h-fit p-6 lg:p-8 rounded-4xl bg-[#14CF93] flex flex-col gap-6'>

          <h4 className='font-semibold text-xl text-white'>I'm Good At🥇</h4>

          <button className='w-full h-14 p-4 text-lg font-[400] text-white border border-white rounded-lg flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              {/* skill logo */}
              <div className='h-8 w-8 bg-white/20 rounded-full flex justify-center items-center text-lg'>
                <FaReact />
              </div>
              {/* skill name */}
              React.js
            </div>
            <MdDone />
          </button>

          <button className='w-full h-14 p-4 text-lg font-[400] text-white border border-white rounded-lg flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              {/* skill logo */}
              <div className='h-8 w-8 bg-white/20 rounded-full flex justify-center items-center text-xl'>
                <RiNextjsFill />
              </div>
              {/* skill name */}
              Next.js
            </div>
            <MdDone />
          </button>

          {/* expert skill card */}
          <div className='w-full min-h-14 text-lg font-[400] text-white border rounded-lg cursor-pointer relative'>

            <button className='w-full p-4 text-black bg-white rounded-lg absolute -rotate-2 left-2 flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                {/* skill logo */}
                <div className='h-8 w-8 bg-green-100 rounded-full flex justify-center items-center text-xl'>
                  <TbLayoutDashboardFilled className='text-[#14CF93]' />
                </div>
                {/* skill name */}
                UI Developement
              </div>
              <TiHeartFullOutline className='text-xl text-[#14CF93]' />
            </button>

            {/* expert badge */}
            <button className='text-black absolute left-[58%] -bottom-1 -rotate-45'>
              <BiSolidUpArrow className='text-sm' />
            </button>
            <button className='px-4 py-2 text-xs md:text-sm bg-yellow-300 text-black rounded-3xl absolute left-[60%] -bottom-8'>
              Expert
            </button>

          </div>

          <button className='hidden w-full h-14 p-4 text-lg font-[400] text-white border border-white rounded-lg lg:flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              {/* skill logo */}
              <div className='h-8 w-8 bg-white/20 rounded-full flex justify-center items-center text-lg'>
                <IoPhonePortraitOutline />
              </div>
              {/* skill name */}
              Responsive Design
            </div>
            <MdDone />
          </button>

          <button className='w-full h-14 p-4 text-lg font-[400] text-white border border-white rounded-lg flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              {/* skill logo */}
              <div className='h-8 w-8 bg-white/20 rounded-full flex justify-center items-center text-xl'>
                <SiGraphql />
              </div>
              {/* skill name */}
              API Integration
            </div>
            <MdDone />
          </button>

          <button className='hidden w-full h-14 p-4 text-lg font-[400] text-white border border-white rounded-lg lg:flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              {/* skill logo */}
              <div className='h-8 w-8 bg-white/20 rounded-full flex justify-center items-center text-lg'>
                <LuDatabase />
              </div>
              {/* skill name */}
              SQL NoSQL Database
            </div>
            <MdDone />
          </button>

        </div>

      </section>
    </>
  )
}

export default Skills