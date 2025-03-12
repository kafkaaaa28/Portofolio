import './App.css';
import Hero from './Hero/Hero';
import Navbars from './Navbars/Navbars';
import About from './About/About';
import { HashRouter as Router } from 'react-router-dom';
import Scrollvelo from './Scroll/Scrollvelo';
import Timeline from './Timeline/Timeline';
function App() {
  return (
    <Router>
      <div className="bg-black" style={{ overflow: 'hidden' }}>
        <Navbars />
        <Hero />
        <Scrollvelo />
        <About />
        <Timeline />
      </div>
    </Router>
  );
}

export default App;
