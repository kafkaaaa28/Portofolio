import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaHome } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import { IoMdMailUnread } from 'react-icons/io';
import api from '../../utils/api.js';

const Dashboard = ({ setIsAuthenticated, setUser }) => {
  const [Open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [coment, setComent] = useState([]);
  const [totalcoment, settotalComent] = useState(0);
  const [totalpesan, settotalPesan] = useState(0);
  const [loading, setLoading] = useState(true);
  const Toggler = () => {
    setOpen(!Open);
  };
  useEffect(() => {
    const getAll = async () => {
      try {
        const res = await api.get('/pesan/all');
        setUsers(res.data.data);
        settotalPesan(res.data.data.length);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'gagal ambil data');
        setLoading(false);
      }
    };
    const getComent = async () => {
      try {
        const res = await api.get('/coment/get');
        setComent(res.data.data);
        settotalComent(res.data.data.length);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'gagal ambil coment');
        setLoading(false);
      }
    };
    getComent();
    getAll();
  }, []);

  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      setUser(false);
      setTimeout(() => {
        Navigate('/');
      }, 1000);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const handledelete = async (id) => {
    try {
      const res = api.delete(`/pesan/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.res?.data?.massage || 'failed delete message');
    }
  };
  const Deletecoment = async (id) => {
    try {
      const res = api.delete(`/coment/${id}`);
      setComent(coment.filter((komen) => komen.id !== id));
    } catch (err) {
      setError(err.res?.data?.massage || 'failed delete coment');
    }
  };

  if (loading) return <div>Loading....</div>;
  return (
    <div className="h-screen bg-black">
      <div className="flex justify-end">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          onClick={Toggler}
          type="button"
          className="inline-flex items-center p-2 mt-2 md:hidden ms-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${Open ? 'translate-x-0 sm:-translate-x-full' : '-translate-x-full'} `} aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-white ">
            <ul className="space-y-2 font-medium">
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <button onClick={() => Navigate('/')} href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <FaHome className="text-[30px]" />
                  <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                </button>
              </li>
              <li>
                <button onClick={handleLogout} href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <HiOutlineLogout className="text-[30px]" />
                  <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
        <div className="flex flex-col">
          <div className={`bg-white w-[full] h-[100px] mr-[20px] ml-[20px] md:ml-[270px] mt-[20px] rounded-lg flex justify-center items-center`}>
            <p className="text-[20px] font-bold">Welcome Back Kafka!!</p>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className={`bg-white w-[350px] h-[100px]  lg:w-[50%] mr-[20px] ml-[20px] md:ml-[270px] mt-[20px] rounded-lg flex flex-col  justify-center items-center`}>
              <p className="text-[20px] font-bold">TOTAL PESAN</p>
              <div className="flex gap-2 ">
                <IoMdMailUnread className="text-[20px] mt-[5px]" />
                <p className="text-[20px] font-bold">{totalpesan}</p>
              </div>
            </div>
            <div className={`bg-white w-[350px] h-[100px] mr-[20px] ml-[20px] lg:w-[50%]  mt-[20px] rounded-lg flex flex-col  justify-center items-center`}>
              <p className="text-[20px] font-bold">TOTAL Coment</p>
              <div className="flex gap-2 ">
                <IoMdMailUnread className="text-[20px] mt-[5px]" />
                <p className="text-[20px] font-bold">{totalcoment}</p>
              </div>
            </div>
          </div>
          <div className="mr-[20px] ml-[20px] mt-[20px] md:ml-[270px]">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      nama
                    </th>
                    <th scope="col" className="px-6 py-3">
                      email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      pesan
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tanggal
                    </th>
                    <th scope="col" className="px-6 py-3">
                      aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.nama}
                      </th>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.massage}</td>
                      <td className="px-6 py-4">{user.created_at}</td>
                      <button type="button" onClick={() => handledelete(user.id)} class="text-white flex bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">
                        <MdOutlineDelete className="text-[17px]" />
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/*  */}
          <div className="mr-[20px] ml-[20px] mt-[20px] md:ml-[270px]">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      nama
                    </th>
                    <th scope="col" className="px-6 py-3">
                      pesan
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tanggal
                    </th>{' '}
                    <th scope="col" className="px-6 py-3">
                      aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coment.map((komen) => (
                    <tr key={komen.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {komen.name}
                      </th>
                      <td className="px-6 py-4">{komen.coment}</td>
                      <td className="px-6 py-4">{komen.created_at}</td>
                      <button
                        type="button"
                        onClick={() => Deletecoment(komen.id)}
                        class="text-white flex bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
                      >
                        <MdOutlineDelete className="text-[17px]" />
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
