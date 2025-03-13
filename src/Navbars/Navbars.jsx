import { Navbar } from 'flowbite-react';
import Bars from './Bars';
import './Navbars.css';
export default function Navbars() {
  return (
    <Navbar fluid className="nav bg-black text-white">
      <div className="w-full nav-wrap flex justify-between">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Kafka</span>
        </Navbar.Brand>
        <Bars />
      </div>
    </Navbar>
  );
}
