import { Drawer } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBarsProgress } from 'react-icons/fa6';
import Menu from './Menu';
export default function Bars({ isAuthenticated, handleLogout, ceklogin }) {
  const demoItems = [
    { link: 'Hero', text: 'Home', image: 'https://i.pinimg.com/736x/04/76/60/0476600977d3f39dc3850526c87d5a15.jpg' },
    { link: 'About', text: 'About', image: 'https://i.pinimg.com/474x/06/7c/1b/067c1bdcbced708bf7d36b3a9e0a62bb.jpg' },
    { link: 'Skills', text: 'Skills', image: 'https://i.pinimg.com/736x/81/ee/dc/81eedc907a19f1669d3d8451db32b42c.jpg' },
    { link: 'Contact', text: 'Contact', image: 'https://i.pinimg.com/474x/dd/7d/97/dd7d973f3eaa5cc38ffa0af6d6fb23ec.jpg' },
  ];

  if (!isAuthenticated) {
    demoItems.push({
      link: '/login',
      text: 'Login',
      image: 'https://i.pinimg.com/474x/dd/7d/97/dd7d973f3eaa5cc38ffa0af6d6fb23ec.jpg',
    });
  }

  if (isAuthenticated) {
    demoItems.push({
      link: '/',
      text: 'Logout',
      image: 'https://i.pinimg.com/474x/dd/7d/97/dd7d973f3eaa5cc38ffa0af6d6fb23ec.jpg',
      isLogout: true,
    });
  }
  const [isOpen, setIsOpen] = useState(false);
  const Logout = () => {
    handleLogout();
  };
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="cursor-pointer hover:text-black hover:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white  h-[45px] rounded-lg transition-colors p-[10px]">
        <FaBarsProgress className="text-2xl " onClick={() => setIsOpen(true)} />
      </div>
      <Drawer open={isOpen} onClose={handleClose} className=" bg-black dark:bg-gray-300 ">
        <Drawer.Header title="Menu" />
        <Drawer.Items>
          <div style={{ height: '600px', position: 'relative' }}>
            <Menu items={demoItems} Logout={Logout} isAuthenticated={isAuthenticated} />
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
