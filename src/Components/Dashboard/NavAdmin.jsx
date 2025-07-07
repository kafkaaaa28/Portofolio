import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaComments } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import api from '../../utils/api.js';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaBarsStaggered } from 'react-icons/fa6';
import { RiMessage3Fill } from 'react-icons/ri';
import { Popover } from 'flowbite-react';
import LightMode from '../LightMode.jsx';
import kafka from '../Img/kafkaweb.jpg';
const NavAdmin = ({ setIsAuthenticated, setUser, Open, setOpen }) => {
  const Navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
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
  const Toggler = () => {
    setOpen(!Open);
  };

  const handleMobile = () => {
    if (window.innerWidth <= 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  const content = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Dashboard</h3>
      </div>
    </div>
  );
  const keluar = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Logout</h3>
      </div>
    </div>
  );
  const home = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Home</h3>
      </div>
    </div>
  );
  const komen = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Comments</h3>
      </div>
    </div>
  );
  const pesan = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Message</h3>
      </div>
    </div>
  );
  useEffect(() => {
    handleMobile();

    window.addEventListener('resize', handleMobile);

    return () => {
      window.removeEventListener('resize', handleMobile);
    };
  }, []);
  return (
    <div>
      <div className="flex justify-end lg:justify-start items-center  bg-[#191C24] dark:bg-gray-300 py-2 w-full h-[60px]">
        {mobile ? (
          <>
            <div className="flex mr-3 gap-3 items-center">
              <img src={kafka} className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />
              <p className="text-white">Kafka Farel</p>
            </div>
            <button
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              onClick={Toggler}
              type="button"
              className={`inline-flex items-center h-8 p-2 ${Open ? 'lg:ml-[280px]' : 'lg:ml-[100px]'} mr-[20px] text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
            >
              <FaBarsStaggered />
              <span className="sr-only">Open sidebar</span>
            </button>
          </>
        ) : (
          <div className="flex justify-between w-full ">
            <button
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              onClick={Toggler}
              type="button"
              className={`inline-flex items-center h-8 p-2 ${
                Open ? 'lg:ml-[280px]' : 'lg:ml-[100px]'
              } mr-[20px] text-sm text-gray-500 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200`}
            >
              <FaBarsStaggered />
              <span className="sr-only">Open sidebar</span>
            </button>
            <div className="flex">
              <LightMode />
              <div className="flex mr-[30px] gap-3 items-center">
                <img src={kafka} className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />
                <p className="text-white dark:text-black">Kafka Farel</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-all duration-300 ease-in-out  ${Open ? '-translate-x-[260px] md:-translate-x-[255px] lg:translate-x-0 ' : 'translate-x-0 lg:w-[80px] '}  `}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4  overflow-y-auto bg-[#191C24] dark:bg-gray-300 dark:text-black ">
            <div className="mb-[20px] ml-[10px] flex gap-4">
              <img src="https://i.pinimg.com/originals/2d/15/a6/2d15a6815a0cf568b8efaa203ac2571b.jpg" className="w-8 h-8 rounded-lg" />
              {Open || mobile ? (
                <div className="flex flex-col">
                  <p className="text-sm text-white">Kafka Farel</p>
                  <p className="text-sm text-gray-400">Admin</p>
                </div>
              ) : null}
            </div>

            <ul className="space-y-2 font-medium">
              {Open || mobile ? <p className="text-gray-400 text-sm">Navigation</p> : null}
              <li>
                <Popover className="bg-[#0F1015] text-[#0F1015]" content={Open || mobile ? null : content} trigger="hover" placement="right">
                  <a onClick={() => Navigate('/dashboard')} className="flex cursor-pointer text-sm items-center p-2 text-gray-400 rounded-lg hover:bg-[#0F1015] hover:text-white active:bg-[#0F1015] transition-colors duration-300 ease-out">
                    <div className="bg-gray-700 shadow-lg flex items-center justify-center w-8 h-8 rounded-lg">
                      <MdSpaceDashboard className="text-lg text-purple-600" />
                    </div>
                    {Open || mobile ? <span className="ms-3">Dashboard</span> : null}
                  </a>
                </Popover>
              </li>
              <li>
                <Popover className="bg-[#0F1015] text-[#0F1015]" content={Open || mobile ? null : home} trigger="hover" placement="right">
                  <button onClick={() => Navigate('/')} href="#" className="flex w-full text-sm items-center p-2 text-gray-400 rounded-lg hover:bg-[#0F1015] hover:text-white transition-colors duration-300 ease-out">
                    <div className="bg-gray-700 shadow-lg flex items-center justify-center w-8 h-8 rounded-lg">
                      <FaHome className="text-lg text-yellow-300" />
                    </div>
                    {Open || mobile ? <span className="ms-3">Home</span> : null}
                  </button>
                </Popover>
              </li>
              <li>
                <Popover className="bg-[#0F1015] text-[#0F1015]" content={Open || mobile ? null : komen} trigger="hover" placement="right">
                  <button onClick={() => Navigate('/dashboard/komen')} href="#" className="flex w-full text-sm items-center p-2 text-gray-400 rounded-lg hover:bg-[#0F1015] hover:text-white transition-colors duration-300 ease-out">
                    <div className="bg-gray-700 shadow-lg flex items-center justify-center w-8 h-8 rounded-lg">
                      <FaComments className="text-lg text-blue-400" />
                    </div>
                    {Open || mobile ? <span className="ms-3">Comments</span> : null}
                  </button>
                </Popover>
              </li>
              <li>
                <Popover className="bg-[#0F1015] text-[#0F1015]" content={Open || mobile ? null : pesan} trigger="hover" placement="right">
                  <button onClick={() => Navigate('/dashboard/pesan')} href="#" className="flex w-full text-sm items-center p-2 text-gray-400 rounded-lg hover:bg-[#0F1015] hover:text-white transition-colors duration-300 ease-out">
                    <div className="bg-gray-700 shadow-lg flex items-center justify-center w-8 h-8 rounded-lg">
                      <RiMessage3Fill className="text-lg text-green-400" />
                    </div>
                    {Open || mobile ? <span className="ms-3">Message</span> : null}
                  </button>
                </Popover>
              </li>
              <li>
                <Popover className="bg-[#0F1015] text-[#0F1015]" content={Open || mobile ? null : keluar} trigger="hover" placement="right">
                  <button onClick={handleLogout} href="#" className="flex w-full text-sm items-center p-2 text-gray-400 rounded-lg hover:bg-[#0F1015] hover:text-white transition-colors duration-300 ease-out">
                    <div className="bg-gray-700 shadow-lg flex items-center justify-center w-8 h-8 rounded-lg">
                      <HiOutlineLogout className="text-lg text-red-600" />
                    </div>
                    {Open || mobile ? <span className=" ms-3 ">Logout</span> : null}
                  </button>
                </Popover>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NavAdmin;
