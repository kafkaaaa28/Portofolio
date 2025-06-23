import React, { useState } from 'react';
import { FaGithub, FaNodeJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiPostman, SiTailwindcss, SiMysql, SiJavascript } from 'react-icons/si';

const techItems = [
  {
    name: 'GitHub',
    icon: <FaGithub className="text-[35px]" />,
    description: 'As a developer, I am actively contributing to several open-source projects on GitHub, focusing on both front-end and back-end development workflows.',
    link: 'https://github.com/',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-[35px] text-[#5B994E]" />,
    description: 'As a developer, I use Node.js to build scalable server-side applications and RESTful APIs for modern web apps.',
    link: 'https://nodejs.org/',
  },
  {
    name: 'Express',
    icon: <SiExpress className="text-[35px]" />,
    description: 'As a developer, I utilize Express to simplify backend architecture and rapidly develop APIs and middleware logic.',
    link: 'https://expressjs.com/',
  },
  {
    name: 'React',
    icon: <FaReact className="text-[35px] text-[#00D5FD]" />,
    description: 'As a developer, I focus on building dynamic and interactive user interfaces using React for modern web applications.',
    link: 'https://reactjs.org/',
  },
  {
    name: 'Postman',
    icon: <SiPostman className="text-[35px] text-[#FB6A33]" />,
    description: 'As a developer, I rely on Postman to test, debug, and document RESTful APIs efficiently during the development lifecycle.',
    link: 'https://www.postman.com/',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-[35px] text-[#F8DC30]" />,
    description: 'As a developer, I use JavaScript as the core language to bring interactivity and logic to web applications across front-end and back-end.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-[35px] text-[#41ACB6]" />,
    description: 'As a developer, I prefer Tailwind CSS to style components rapidly with utility classes and maintain consistent design systems.',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap className="text-[35px] text-[#7E13F8]" />,
    description: 'As a developer, I leverage Bootstrap to quickly prototype responsive UI layouts and maintain cross-browser compatibility.',
    link: 'https://getbootstrap.com/',
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-[35px] text-[#055E8B]" />,
    description: 'As a developer, I use MySQL to manage relational data effectively and integrate databases into full-stack applications.',
    link: 'https://www.mysql.com/',
  },
];

const GlassIcons = () => {
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: null });

  const handleMouseMove = (e, item) => {
    setTooltip({
      show: true,
      x: e.clientX,
      y: e.clientY,
      content: item,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, x: 0, y: 0, content: null });
  };

  return (
    <div className="border-t-2 border-white relative">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {techItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[100px] lg:h-[150px] border-r-2 border-b-2 border-white flex items-center justify-center gap-2 text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300 relative cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, item)}
            onMouseLeave={handleMouseLeave}
          >
            {item.icon}
            <span className="text-[20px] font-bold">{item.name}</span>
          </a>
        ))}
      </div>

      {tooltip.show && tooltip.content && (
        <div
          className="fixed z-50 w-[300px] flex flex-col px-4 py-2 text-sm text-white bg-white/10 backdrop-blur-md rounded-md shadow-lg pointer-events-none transition duration-150"
          style={{
            top: tooltip.y + 15,
            left: tooltip.x + 15,
          }}
        >
          <div className="flex gap-3 mb-2 items-center">
            {tooltip.content.icon}
            <span className="text-[18px] font-bold">{tooltip.content.name}</span>
          </div>
          <p className="text-sm">{tooltip.content.description}</p>
        </div>
      )}
    </div>
  );
};

export default GlassIcons;
