import React from 'react'
import Project1 from '/dev.png'
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const MyWork = () => {
    return (
        <section className='lg:py-6 lg:px-16 p-4 w-full'>
            <h4 className='text-4xl md:text-7xl font-[500] text-zinc-700 mb-12'>Selected <span className='italianno-regular text-5xl md:text-7xl text-[#14CF93]'>Work</span></h4>

            {/* project card */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                <div className="w-full h-[28rem] lg:h-[36rem] rounded-4xl overflow-hidden relative group">

                    {/* project image */}
                    <img
                        src={Project1}
                        alt="Project1"
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                    />

                    {/* project info */}
                    <div className="w-[92%] h-24 lg:h-32 px-4 lg:px-8 bg-white/20 rounded-3xl flex justify-between items-center absolute bottom-6 left-1/2 -translate-x-1/2">

                        <div>
                            {/* project name */}
                            <h2 className='text-lg lg:text-2xl font-semibold text-white'>DEV</h2>
                            <p className='text-sm text-zinc-600'>AI Powered Blog Platform</p>
                        </div>

                        {/* project links */}
                        <div className='flex gap-3 lg:gap-5'>

                            {/* github */}
                            <button className='text-2xl lg:text-3xl text-black rounded-full flex justify-center items-center cursor-pointer'>
                                <BsGithub />
                            </button>

                            {/* preview */}
                            <button className='text-2xl lg:text-3xl text-blue-400 rounded-full flex justify-center items-center cursor-pointer'>
                                <FiExternalLink />
                            </button>

                        </div>

                    </div>

                </div>
                <div className="w-full h-[28rem] lg:h-[36rem] rounded-4xl overflow-hidden relative group">

                    {/* project image */}
                    <img
                        src={Project1}
                        alt="Project1"
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                    />

                    {/* project info */}
                    <div className="w-[92%] h-24 lg:h-32 px-4 lg:px-8 bg-white/90 rounded-3xl flex justify-between items-center absolute bottom-6 left-1/2 -translate-x-1/2">

                        <div>
                            {/* project name */}
                            <h2 className='text-lg lg:text-2xl font-semibold'>DEV</h2>
                            <p className='text-sm text-zinc-600'>AI Powered Blog Platform</p>
                        </div>

                        {/* project links */}
                        <div className='flex gap-3 lg:gap-5'>

                            {/* github */}
                            <button className='text-2xl lg:text-3xl text-black rounded-full flex justify-center items-center cursor-pointer'>
                                <BsGithub />
                            </button>

                            {/* preview */}
                            <button className='text-2xl lg:text-3xl text-blue-400 rounded-full flex justify-center items-center cursor-pointer'>
                                <FiExternalLink />
                            </button>

                        </div>

                    </div>

                </div>
                <div className="w-full h-[28rem] lg:h-[36rem] rounded-4xl overflow-hidden relative group">

                    {/* project image */}
                    <img
                        src={Project1}
                        alt="Project1"
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                    />

                    {/* project info */}
                    <div className="w-[92%] h-24 lg:h-32 px-4 lg:px-8 bg-white/90 rounded-3xl flex justify-between items-center absolute bottom-6 left-1/2 -translate-x-1/2">

                        <div>
                            {/* project name */}
                            <h2 className='text-lg lg:text-2xl font-semibold'>DEV</h2>
                            <p className='text-sm text-zinc-600'>AI Powered Blog Platform</p>
                        </div>

                        {/* project links */}
                        <div className='flex gap-3 lg:gap-5'>

                            {/* github */}
                            <button className='text-2xl lg:text-3xl text-black rounded-full flex justify-center items-center cursor-pointer'>
                                <BsGithub />
                            </button>

                            {/* preview */}
                            <button className='text-2xl lg:text-3xl text-blue-400 rounded-full flex justify-center items-center cursor-pointer'>
                                <FiExternalLink />
                            </button>

                        </div>

                    </div>

                </div>
                <div className="w-full h-[28rem] lg:h-[36rem] rounded-4xl overflow-hidden relative group">

                    {/* project image */}
                    <img
                        src={Project1}
                        alt="Project1"
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                    />

                    {/* project info */}
                    <div className="w-[92%] h-24 lg:h-32 px-4 lg:px-8 bg-white/90 rounded-3xl flex justify-between items-center absolute bottom-6 left-1/2 -translate-x-1/2">

                        <div>
                            {/* project name */}
                            <h2 className='text-lg lg:text-2xl font-semibold'>DEV</h2>
                            <p className='text-sm text-zinc-600'>AI Powered Blog Platform</p>
                        </div>

                        {/* project links */}
                        <div className='flex gap-3 lg:gap-5'>

                            {/* github */}
                            <button className='text-2xl lg:text-3xl text-black rounded-full flex justify-center items-center cursor-pointer'>
                                <BsGithub />
                            </button>

                            {/* preview */}
                            <button className='text-2xl lg:text-3xl text-blue-400 rounded-full flex justify-center items-center cursor-pointer'>
                                <FiExternalLink />
                            </button>

                        </div>

                    </div>

                </div>


            </div>

        </section>
    )
}

export default MyWork