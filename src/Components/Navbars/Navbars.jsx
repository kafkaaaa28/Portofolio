import { Navbar } from 'flowbite-react';
import Bars from './Bars';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbars.css';
import api from '../../utils/api.js';

export default function Navbars({ setIsAuthenticated, setUser, isAuthenticated }) {
  const [error, setError] = useState('');
  useEffect(() => {
    const ceklogin = async () => {
      try {
        const res = await api.get('/auth/me');
        setIsAuthenticated(true);
        setUser(res.data);
      } catch (err) {
        setError(err.res?.data?.message || 'gagal ambil data');
        setIsAuthenticated(false);
      }
    };
    ceklogin();
  }, []);
  const Navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = api.post('/auth/logout');
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      setUser(false);
      setTimeout(() => {
        Navigate('/');
      }, 1000);
    } catch (error) {
      console.error('logout failed', error);
    }
  };
  return (
    <Navbar fluid className="nav bg-black text-white">
      <div className="w-full nav-wrap flex justify-between">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Kafka</span>
        </Navbar.Brand>
        <div className="flex gap-5">
          {isAuthenticated ? (
            <>
              <button
                type="button"
                onClick={handleLogout}
                className="text-black bg-white hover:bg-black hover:text-white border hover:ring-white hover:border-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              >
                Logout
              </button>
              <Link to={'/dashboard'}>
                <p>Dashboard</p>
              </Link>
            </>
          ) : (
            <Link to={'/login'}>
              <button type="button" className="text-black bg-white hover:bg-black hover:text-white border hover:ring-white hover:border-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                Login
              </button>
            </Link>
          )}
          <Bars />
        </div>
      </div>
    </Navbar>
  );
}
