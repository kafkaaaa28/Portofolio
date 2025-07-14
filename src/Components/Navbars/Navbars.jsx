import { Navbar } from 'flowbite-react';
import Bars from './Bars';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './Navbars.css';
import LightMode from '../LightMode.jsx';
import api from '../../utils/api.js';

export default function Navbars({ setIsAuthenticated, setUser, isAuthenticated }) {
  const [openModal, setOpenModal] = useState(false);

  const [error, setError] = useState('');
  const location = useLocation();
  const islocation = location.pathname === '/coments';
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
  useEffect(() => {
    ceklogin();
  }, []);
  const Navigate = useNavigate();
  const handleLogout = async () => {
    try {
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      setUser(false);
      setTimeout(() => {
        Navigate('/login');
      }, 1000);
    } catch (error) {
      console.error('logout failed', error);
    }
  };
  return (
    <>
      <Navbar fluid className="fixed z-40 w-full bg-black dark:bg-gray-300 dark:text-gray-800 text-white">
        <div className=" w-full mt-[20px]  flex justify-between">
          <Link to={isAuthenticated ? '/dashboard' : '/'}>
            <Navbar.Brand>
              <span className="text-2xl font-semibold dark:text-gray-800">Kafka</span>
            </Navbar.Brand>
          </Link>

          <div className="flex gap-5">
            <div className="flex items-center justify-center">
              <LightMode />
            </div>

            {islocation ? <FaRegQuestionCircle className="text-[30px] cursor-pointer" onClick={() => setOpenModal(true)} /> : <Bars isAuthenticated={isAuthenticated} handleLogout={handleLogout} />}
          </div>
        </div>
      </Navbar>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Massage</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">To fill in your comments, you must click on the comment text on the screen. </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="bg-black mt-[20px] text-white border border-white hover:bg-white w-full py-2 hover:border-black hover:text-black rounded-lg" onClick={() => setOpenModal(false)}>
            I accept
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}
