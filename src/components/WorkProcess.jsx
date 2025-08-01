import React from 'react'
import ProcessVisual1 from '/process1.svg'
import ProcessVisual2 from '/process2.svg'
import ProcessVisual3 from '/process3.svg'
import ProcessVisual4 from '/process4.svg'

const WorkProcess = () => {

    const process = [
        {
            step: "01",
            image: ProcessVisual1,
            title: "Ideas & Requirements",
            subtitle: "Does it click?"
        },
        {
            step: "02",
            image: ProcessVisual2,
            title: "Concept & Final Design",
            subtitle: "A pinch of magic"
        },
        {
            step: "03",
            image: ProcessVisual3,
            title: "Development & Testing",
            subtitle: "Even more magic"
        },
        {
            step: "04",
            image: ProcessVisual4,
            title: "Website Onboarding",
            subtitle: "Key handover"
        }
    ]

    return (
        <section className="lg:py-24 lg:px-16 py-16 px-4 w-full">

            {/* title */}
            <h4 className='text-4xl md:text-7xl font-[500] text-zinc-700 mb-12 md:mb-16 text-center md:text-start'>
                How i bring <br className='block md:hidden' />
                <span className='italianno-regular text-5xl md:text-7xl text-[#14CF93]'> Ideas to life</span>
            </h4>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                {/* process card */}
                {process.map((process, idx) => (
                    <div
                        key={idx}
                        className={`min-w-[24%] h-fit pt-20 pb-4 md:pb-0 border border-zinc-200 hover:border-[#14CF93] rounded-3xl flex flex-col justify-center items-center relative cursor-pointer hover:bg-[#14CF93] group transition-all duration-200 ${idx % 2 === 1 ? 'lg:mt-20' : ''}`}>

                        {/* process number */}
                        <h4 className='text-2xl font-semibold text-zinc-400 group-hover:text-white absolute top-6 right-6'>
                            {process.step}
                        </h4>

                        {/* visual image */}
                        <img src={process.image} alt="Process Visual-1" />

                        <div className='w-full p-6 text-start mt-6 lg:mt-0'>
                            <h4 className='text-lg text-zinc-400 group-hover:text-white/80'>{process.subtitle}</h4>
                            <h2 className='text-2xl font-semibold text-zinc-700 group-hover:text-white'>{process.title}</h2>
                        </div>

                    </div>
                ))}

            </div>

        </section>

    )
}

export default WorkProcess