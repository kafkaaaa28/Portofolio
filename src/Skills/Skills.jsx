import GlassIcons from './GlassIcons';
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiMysql } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
const Skills = () => {
  const items = [
    { icon: <FaHtml5 />, color: 'black_white', label: 'HTML' },
    { icon: <FaCss3 />, color: 'black_white', label: 'CSS' },
    { icon: <FaJs />, color: 'black_white', label: 'JAVASCRIPT' },
    { icon: <FaReact />, color: 'black_white', label: 'REACT JS' },
    { icon: <SiNextdotjs />, color: 'black_white', label: 'NEXT JS' },
    { icon: <RiTailwindCssFill />, color: 'black_white', label: 'TAILWIND' },
    { icon: <FaBootstrap />, color: 'black_white', label: 'BOOTSTRAP' },
    { icon: <SiMysql />, color: 'black_white', label: 'MYSQL' },
  ];
  return (
    <>
      <div className="container-skills">
        <h1 className="Myskills text-white font-bold">My Skills</h1>
        <div className="Skills">
          <GlassIcons items={items} className="custom-class " />
        </div>
      </div>
      ;
    </>
  );
};

export default Skills;
