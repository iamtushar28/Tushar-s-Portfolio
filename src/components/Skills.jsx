import React from 'react'
import { MdDone } from "react-icons/md";
import { BiSolidUpArrow } from "react-icons/bi";

const Skills = () => {
  return (
    <section className='w-full mb-4 px-4 flex justify-center gap-8'>

      <div className='w-full md:w-[45%] h-72 md:h-[32rem] p-4 md:p-8 border border-zinc-300 rounded-4xl bg-[#14CF93]'>

        <div className='mt-6 w-full h-14 text-lg font-[400] text-white border rounded-lg cursor-pointer relative'>
          <button className='w-full p-4 text-lg font-[500] text-black bg-white rounded-lg cursor-pointer absolute -rotate-2 left-2 flex justify-between items-center'>
            Frontend Developement
            <MdDone className='text-xl' />
          </button>
          <button className='text-black absolute left-[58%] -bottom-1 -rotate-45'>
            <BiSolidUpArrow className='text-sm'/>
          </button>
          <button className='px-4 py-2 text-xs md:text-sm bg-yellow-300 text-black rounded-3xl absolute left-[60%] -bottom-8'>
            Expert
          </button>
        </div>

      </div>


    </section>
  )
}

export default Skills