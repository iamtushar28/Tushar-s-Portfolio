import React from 'react';
import { MdDone } from 'react-icons/md'; // ✅ Import the icon

const SkillCard = ({ icon, name, showCheck = true, hiddenOnMobile = false }) => (
  <button
    className={`${hiddenOnMobile ? 'hidden lg:flex' : 'flex'} w-full h-14 p-4 text-lg font-[400] text-white hover:bg-white border border-white/50 rounded-lg justify-between items-center group transition-all duration-200 cursor-pointer`}>
    <div className='flex gap-2 items-center'>
      <div className='h-8 w-8 bg-white/20 group-hover:bg-green-100 group-hover:text-[#14CF93] rounded-full flex justify-center items-center text-xl'>
        {icon}
      </div>
      <span className='group-hover:text-black'>{name}</span> 
    </div>
    {showCheck && <MdDone className='group-hover:text-[#14CF93]' />}
  </button>
);

export default SkillCard;
