import React from 'react';
import GlassIcons from './GlassIcons';
const Skills = () => {
  return (
    <div className="bg-black dark:bg-gray-300">
      <br />
      <br />
      <div className="border-2 rounded-t-[20px] mx-[10px] md:mx-[100px] border-white dark:border-black min-h-[10vh] " id="Skills">
        <div className="text-white dark:text-gray-800 ml-[30px] my-[20px] font-bold mt-3 text-[40px]">MY SKILLS</div>
        <GlassIcons />
      </div>
    </div>
  );
};

export default Skills;
