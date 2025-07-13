import React from 'react';
import ScrollveloSkills from './ScrollveloSkills';
import SkillsScrol from './SkillsScrol';
const ScrollSkillpage = () => {
  return (
    <div className="mb-20 md:mb-0">
      <ScrollveloSkills texts={[<SkillsScrol />, <SkillsScrol />]} velocity={'50'} className=" font-normal leading-normal tracking-normal text-start" />
    </div>
  );
};

export default ScrollSkillpage;
