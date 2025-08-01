import React from 'react';
import { TiHeartFullOutline } from 'react-icons/ti';
import { BiSolidUpArrow } from 'react-icons/bi';

const ExpertSkillCard = ({ icon, name, badge = "Expert" }) => (
  <div className='w-full min-h-14 text-lg font-[400] text-white border rounded-lg cursor-pointer relative'>
    <button className='w-full p-4 text-black bg-white rounded-lg absolute -rotate-2 left-2 flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <div className='h-8 w-8 bg-green-100 rounded-full flex justify-center items-center text-xl text-[#14CF93]'>
          {icon}
        </div>
        {name}
      </div>
      <TiHeartFullOutline className='text-xl text-[#14CF93]' />
    </button>

    <button className='text-black absolute left-[58%] -bottom-1 -rotate-45'>
      <BiSolidUpArrow className='text-sm' />
    </button>
    <button className='px-4 py-2 text-xs md:text-sm bg-yellow-300 text-black rounded-3xl absolute left-[60%] -bottom-8'>
      {badge}
    </button>
  </div>
);

export default ExpertSkillCard;
