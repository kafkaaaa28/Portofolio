import React from 'react';
import ScrollveloSkills from './ScrollveloSkills';
import SkillsScrol from './SkillsScrol';
const ScrollSkillpage = () => {
  return (
    <div className="">
      <ScrollveloSkills texts={[<SkillsScrol />, <SkillsScrol />]} velocity={'50'} className=" font-normal leading-normal tracking-normal text-start" />
    </div>
  );
};

export default ScrollSkillpage;
