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
      <div className="h-screen flex flex-col justify-center items-center bg-black">
        <button
          type="button"
          onClick={() => {
            navigate('/');
          }}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Back
        </button>
        <div className="bg-white w-[350px] h-[300px] flex flex-col items-center justify-center rounded-lg">
          <form onSubmit={handeLogin} class="max-w-sm mx-auto">
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={onChange}
                value={email}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div class="mb-5">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Login;
