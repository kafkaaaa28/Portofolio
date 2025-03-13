import './App.css';
import Hero from './Hero/Hero';
import Navbars from './Navbars/Navbars';
import About from './About/About';
import { HashRouter as Router } from 'react-router-dom';
import Scrollvelo from './Scroll/Scrollvelo';
import Timeline from './Timeline/Timeline';
import { useState } from 'react';
import ButtonSee from './Button/ButtonSee';
function App() {
  const [Block, setBlock] = useState(false);
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
            <Navbars />
            <Hero />
            <Scrollvelo />
            <About />
            <Timeline />
          </>
        ) : (
          ''
        )}
      </div>
    </Router>
  );
}

export default App;
