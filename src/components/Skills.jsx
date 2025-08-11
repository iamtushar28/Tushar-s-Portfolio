import React, { useState } from 'react'
import { motion } from "framer-motion";
import SkillCard from './reusable/SkillCard'
import ExpertSkillCard from './reusable/ExpertSkillCard'
import { GiIndiaGate } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SiGraphql } from "react-icons/si";
import { LuDatabase } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiCoffee } from "react-icons/fi";


const Skills = () => {

  const cardVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: (customDelay) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: customDelay, // custom delay per card
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const [view, setView] = useState('experience'); // 'location' or 'experience'

  const isLocation = view === 'location';
  const isExperience = view === 'experience';

  const mySkills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "API Integration", icon: <SiGraphql /> },
    { name: "Responsive Design", icon: <IoPhonePortraitOutline />, hiddenOnMobile: true },
    { name: "SQL NoSQL Database", icon: <LuDatabase />, hiddenOnMobile: true },
  ];

  return (
    <>
      <h4
        className='text-4xl md:text-7xl font-[500] text-zinc-700 lg:py-6 lg:px-16 p-4'
      >
        Tech <span className='italianno-regular text-5xl md:text-7xl text-[#14CF93]'>Stack</span>
      </h4>

      <section
        className='w-full mb-4 px-3 flex flex-col-reverse md:flex-row justify-center gap-8'
      >
        {/* location & experience card */}
        <motion.div
          variants={cardVariants}
          custom={0} // no delay for the first
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className='w-full md:w-[45%] h-fit overflow-hidden border border-zinc-200 rounded-4xl'>

          <div className='relative'>

            {/* Conditional Button for Location */}
            {isLocation && (
              <>
                <button className='px-6 py-2 rounded-4xl bg-[#ffdd57] shadow flex gap-1 items-center absolute top-4 right-4'>
                  <GiIndiaGate className='text-lg' />
                  India
                </button>
                {/* map background */}
                <img src='/map.webp' alt="Map of India" className='w-full h-72 md:h-[19rem] lg:h-[28.5rem]' />
                <div className='h-36 w-36 md:h-44 md:w-44 bg-[#ffdd5736] rounded-full flex justify-center items-center absolute top-[30%] left-[30%] lg:left-[34%]'>
                  <img src='/tushar28.webp' alt="User Avatar" className='h-14 w-14 lg:h-[64px] lg:w-[64px] rounded-full' />
                </div>
              </>
            )}

            {/* Experience View */}
            {isExperience && (
              <>
                {/* grid background */}
                <img src='/grid.webp' alt="Experience Grid" className='w-full h-72 md:h-[19rem] lg:h-[28.5rem]'
                />
                <div className='absolute inset-0 flex flex-col gap-8 justify-center items-center px-2'>
                  {/* visual image */}
                  <img src='/bouncestar.webp' alt="Star Animation" className='max-h-14 lg:max-h-32' />
                  <div className='flex flex-col gap-4 lg:gap-6'>
                    {[
                      { title: 'Next.js Developer', tag: 'Present' },
                      { title: 'Frontend Developer', tag: 'Present' },
                      { title: 'Internshala/Web Developer', tag: '2024' },
                      { title: 'Internshala/Ethical Hacking', tag: '2024' },
                    ].map((item, idx) => (
                      <div key={idx} className='flex items-center gap-2'>
                        <img src='/hashtag.webp' alt="Bullet Point" className='h-8' />
                        <h4 className='text-sm lg:text-xl font-semibold text-zinc-700'>
                          {item.title}{' '}
                          <span className='px-3 py-2 bg-[#ffdd57] text-xs font-medium rounded-3xl'>{item.tag}</span>
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Toggle Buttons */}
          <div className='py-6 lg:py-10 flex gap-4 md:gap-6 justify-center items-center'>

            {/* show experience */}
            <button
              onClick={() => setView('experience')}
              className={`px-3 py-2 rounded-3xl flex gap-1 items-center cursor-pointer transition-all duration-300 
                ${isExperience ? 'text-[#14CF93] ring-1 ring-[#14CF93]' : 'hover:text-[#14CF93] hover:ring-1 ring-[#14CF93]'}`}>
              <FiCoffee className='text-xl' />
              My Experience
            </button>

            {/* show location */}
            <button
              onClick={() => setView('location')}
              className={`px-3 py-2 rounded-3xl flex gap-1 items-center cursor-pointer transition-all duration-300 
                ${isLocation ? 'text-[#14CF93] ring-1 ring-[#14CF93]' : 'hover:text-[#14CF93] hover:ring-1 ring-[#14CF93]'}`}>
              <CiLocationArrow1 className='text-xl' />
              I'm Live In
            </button>

          </div>

        </motion.div>

        {/* skills card */}
        <motion.div
          variants={cardVariants}
          custom={0.5} // no delay for the first
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className='w-full md:w-[45%] h-fit p-6 lg:p-8 rounded-4xl bg-[#14CF93] flex flex-col gap-6'>

          <h4 className='font-semibold text-xl text-white'>I'm Good At🥇</h4>

          {/* Expert Skill */}
          <ExpertSkillCard
            name="UI Development"
            icon={<TbLayoutDashboardFilled />}
            badge="Expert"
          />

          {/* Render Standard Skills */}
          {mySkills.map((skill, idx) => (
            <SkillCard
              key={idx}
              name={skill.name}
              icon={skill.icon}
              hiddenOnMobile={skill.hiddenOnMobile}
            />
          ))}

        </motion.div>

      </section>
    </>
  )
}

export default Skills