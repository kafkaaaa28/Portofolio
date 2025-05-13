import { Drawer } from 'flowbite-react';
import { useState } from 'react';
import { FaBarsProgress } from 'react-icons/fa6';
import Menu from './Menu';
export default function Bars() {
  const demoItems = [
    { link: 'Hero', text: 'Home', image: 'https://i.pinimg.com/736x/04/76/60/0476600977d3f39dc3850526c87d5a15.jpg' },
    { link: 'About', text: 'About', image: 'https://i.pinimg.com/474x/06/7c/1b/067c1bdcbced708bf7d36b3a9e0a62bb.jpg' },
    { link: 'Skills', text: 'Skills', image: 'https://i.pinimg.com/736x/81/ee/dc/81eedc907a19f1669d3d8451db32b42c.jpg' },
    { link: 'Contact', text: 'Contact', image: 'https://i.pinimg.com/474x/dd/7d/97/dd7d973f3eaa5cc38ffa0af6d6fb23ec.jpg' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="cursor-pointer hover:text-black hover:bg-white h-[45px] rounded-lg transition-colors p-[10px]">
        <FaBarsProgress className="text-2xl " onClick={() => setIsOpen(true)} />
      </div>
      <Drawer open={isOpen} onClose={handleClose} className=" bg-black text-white">
        <Drawer.Header title="Menu" />
        <Drawer.Items>
          <div style={{ height: '600px', position: 'relative' }}>
            <Menu items={demoItems} />
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
