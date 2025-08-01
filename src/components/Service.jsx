import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Service = () => {

    const myService = [
        {
            name: "JavaScript",
            color: "bg-yellow-300",
        },
        {
            name: "React.js",
            color: "bg-sky-500",
        },
        {
            name: "Next.js",
            color: "bg-black",
        },
        {
            name: "UI Developement",
            color: "bg-[#14CF93]",
        },
    ]

    return (
        <section className='w-full py-36 md:py-48 px-4 md:px-20 text-center flex flex-col gap-6 justify-center items-center'>

            <h1 className='text-4xl md:text-7xl text-zinc-700 font-semibold leading-13 md:leading-24'>
                I'm crafting seamless digital experiences with <span className='text-zinc-800 bg-[#14cf94a9] px-1'>expertise</span> in
            </h1>

            <div className='flex flex-wrap justify-center gap-4 md:gap-5'>
                {/* service button */}
                {myService.map((myService, idx) => (
                    <button className={`py-3 md:py-4 px-6 md:px-8 text-lg md:text-2xl text-white font-semibold ${myService.color} rounded-[3rem] flex gap-3 items-center cursor-pointer hover:scale-95 transition-all duration-200`}>
                        {myService.name}
                        <div className='h-8 w-8 md:h-10 md:w-10 bg-white text-black text-[20px] rounded-full -mr-2 flex justify-center items-center'>
                            <MdArrowOutward />
                        </div>
                    </button>
                ))}
            </div>

            <h1 className='text-3xl md:text-6xl text-zinc-700 font-semibold leading-13 md:leading-20'>
                My focus on UI development ensures <span className='text-zinc-800 bg-[#14cf94a9] px-1'>responsive</span> designs that elevate your brand across every screen.
            </h1>

        </section>
    )
}

export default Service