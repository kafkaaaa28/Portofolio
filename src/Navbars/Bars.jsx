import { Drawer } from 'flowbite-react';
import { useState } from 'react';
import { FaBarsProgress } from 'react-icons/fa6';

export default function Bars() {
  const [isOpen, setIsOpen] = useState(false); // Mengubah nilai awal menjadi false

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <FaBarsProgress className="text-2xl" onClick={() => setIsOpen(true)} />
      <Drawer open={isOpen} onClose={handleClose} className="bg-black text-white">
        <Drawer.Header title="Menu" />
        <Drawer.Items></Drawer.Items>
      </Drawer>
    </>
  );
}
