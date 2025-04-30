import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { VscAccount } from 'react-icons/vsc';
import { CiPhone } from 'react-icons/ci';
import { GiPointySword } from 'react-icons/gi';
import ScrollLinked from './Components/Scroll/Scroll-indicator';
import Navbars from './Components/Navbars/Navbars';
import Login from './Components/Login/Login';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Scrollvelo from './Components/Scroll/Scrollvelo';
import Timeline from './Components/Timeline/Timeline';
import Skills from './Components/Skills/Skills';
import GithubContributions from './Components/GithubContributions/GithubContributions';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import Dock from './Components/Dock/Dock';
import api from './utils/api';
import Komenscrol from './Components/Scroll/Komenscrol';
function App() {
  const [block, setBlock] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState(false);
  const items = [
    { icon: <IoHomeOutline size={18} />, label: 'Home', link: 'Hero' },
    { icon: <VscAccount size={18} />, label: 'About', link: 'About' },
    { icon: <GiPointySword size={18} />, label: 'Skills', link: 'Skills' },
    { icon: <CiPhone size={18} />, label: 'Contact', link: 'Contact' },
  ];
  useEffect(() => {
    // ambil data user
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const res = await api.get('/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIsAuthenticated(true);
          setUser(res.data);
        } else {
          setIsAuthenticated(false);
        }
        setLoading(false);
      } catch (err) {
        if (err.response?.status === 401) {
          console.warn('Unauthorized, removing token');
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        } else {
          console.error('Other error:', err);
        }
      }
    };
    const checkMobile = () => {
      if (window.innerWidth < 640) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    checkAuth();
    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} /> : <Navigate to={'/'} />} />
        <Route
          path="/"
          element={
            <div className="bg-black">
              <>
                <ScrollLinked />
                <Navbars setIsAuthenticated={setIsAuthenticated} setUser={setUser} isAuthenticated={isAuthenticated} />
                <Hero />
                <Scrollvelo />
                <About />
                <Timeline />
                <Skills />
                <GithubContributions />
                <Contact />
                <Komenscrol />
                {mobile && (
                  <div className="Dock">
                    <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
                  </div>
                )}
              </>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
