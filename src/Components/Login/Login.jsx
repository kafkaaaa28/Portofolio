import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../utils/api.js';

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setIsAuthenticated, setUser }) => {
  const [formData, setformData] = useState({ email: '', password: '' });
  const [Error, setErr] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const { email, password } = formData;
  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handeLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
      setUser(res.data.admin);
      navigate('/dashboard');
    } catch (err) {
      setOpenModal(true);
      console.error('Login error:', err.response?.data || err.message);
      setErr(err.response?.data?.message || 'gagal Login');
    }
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-black dark:bg-gray-300">
        <button
          type="button"
          onClick={() => {
            navigate('/');
          }}
          className="text-black bg-white hover:bg-black hover:text-white border hover:border-white 
             focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
             transition duration-300 ease-in-out"
        >
          Back
        </button>

        <div className="bg-white w-[350px] h-[300px] flex flex-col items-center justify-center rounded-lg">
          <form onSubmit={handeLogin} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={onChange}
                value={email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
                required
              />
            </div>
            <button
              type="submit"
              className="text-white w-full bg-black hover:bg-white hover:text-black border hover:border-black 
             focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
             transition duration-300 ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Message</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">maaf ya halaman admin cuma buat kafka</p>
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
};

export default Login;
