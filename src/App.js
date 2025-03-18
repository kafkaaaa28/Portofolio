import './App.css';
import { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegFolderOpen } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { CiPhone } from 'react-icons/ci';
import ButtonSee from './Button/ButtonSee';
import ScrollLinked from './Scroll/Scroll-indicator';
import Navbars from './Navbars/Navbars';
import Hero from './Hero/Hero';
import About from './About/About';
import Scrollvelo from './Scroll/Scrollvelo';
import Timeline from './Timeline/Timeline';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

import Dock from './Dock/Dock';
function App() {
  const [Block, setBlock] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const items = [
    { icon: <IoHomeOutline size={18} />, label: 'Home', link: 'Hero' },
    { icon: <VscAccount size={18} />, label: 'About', link: 'About' },
    { icon: <FaRegFolderOpen size={18} />, label: 'Skills', link: 'Skills' },
    { icon: <CiPhone size={18} />, label: 'Contact', link: 'Contact' },
  ];

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 640) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  const Toggler = () => {
    const Screen = document.getElementById('Screen');
    setBlock(!Block);
    Screen.style.display = 'none';
  };
  return (
    <Router>
      <div className="bg-black" style={{ overflow: 'hidden' }}>
        <div className="flex justify-center items-center ">
          <div id="Screen">
            <button onClick={Toggler}>
              <ButtonSee />
            </button>
          </div>
        </div>
        {Block ? (
          <>
            <ScrollLinked />
            <Navbars />
            <Hero />
            <Scrollvelo />
            <About />
            <Timeline />
            <Skills />
            <Contact />
            {Mobile ? (
              <>
                <div className="Dock">
                  <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
                </div>
              </>
            ) : (
              ''
            )}
          </>
        ) : (
          ''
        )}
      </div>
    </Router>
  );
}

export default App;
