import React from 'react';
import { IoLogoNodejs } from 'react-icons/io5';
import { FaGithub, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiPostman, SiTailwindcss, SiMysql, SiJavascript } from 'react-icons/si';
import BorderSkills from './BorderSkills';
import Background from 'three/src/renderers/common/Background.js';
const SkillsScrol = () => {
  const items = [
    {
      icon: <IoLogoNodejs className="text-[30px] text-[#80CD27]" />,
      name: 'Node.js',
      description: 'Javascript Runtime',
      Background: 'linear-gradient(135deg, #3C873A, #1B5E20)',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-[30px]" />,
      description: 'Storing repositories',
      link: 'https://github.com/',
      Background: 'linear-gradient(135deg, #333333, #0D1117)',
    },
    {
      name: 'React',
      icon: <FaReact className="text-[30px] text-[#00D5FD]" />,
      description: 'Frontend Framework',
      link: 'https://reactjs.org/',
      Background: 'linear-gradient(135deg, #00D8FF, #0D47A1)',
    },
    {
      name: 'Postman',
      icon: <SiPostman className="text-[30px] text-[#FB6A33]" />,
      description: 'Testing API',
      link: 'https://www.postman.com/',
      Background: 'linear-gradient(135deg, #FF6C37, #2E2E2E)',
    },
    {
      name: 'Express',
      icon: <SiExpress className="text-[30px] text-white" />,
      description: 'Backend Framework',
      link: 'https://expressjs.com/',
      Background: 'linear-gradient(135deg, #444444, #111111)',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="text-[35px] text-[#F8DC30]" />,
      description: 'Programming Language',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      Background: 'linear-gradient(135deg, #F0DB4F, #1E1E1E)',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-[30px] text-[#36BBF6]" />,
      description: 'Styling Website',
      link: 'https://tailwindcss.com/',
      Background: 'linear-gradient(135deg, #36BBF6, #1E293B)',
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap className="text-[30px] text-[#7E13F8]" />,
      description: 'Styling Website',
      link: 'https://getbootstrap.com/',
      Background: 'linear-gradient(135deg, #563D7C, #350C75)',
    },
    {
      name: 'MySQL',
      icon: <SiMysql className="text-[30px] text-[#005F89]" />,
      description: 'Database',
      link: 'https://www.mysql.com/',
      Background: 'linear-gradient(135deg, #00758F, #21A1A2)',
    },
  ];

  return (
    <div className="flex gap-5">
      {items.map((item, index) => (
        <BorderSkills as="button" className="" color="red" speed="5s">
          <div key={index} className="flex flex-col rounded-lg p-3  w-[200px]" style={{ background: item.Background }}>
            <div className="flex items-center gap-2 flex-wrap">
              {item.icon}
              <p className="text-white font-semibold">{item.name}</p>
            </div>
            <p className="text-white text-sm">{item.description}</p>
          </div>
        </BorderSkills>
      ))}
    </div>
  );
};

export default SkillsScrol;
