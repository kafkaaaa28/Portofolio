import { Timeline } from 'flowbite-react';
import './Timeline.css';
import Radnet from '../Img/radnet.png';

export default function Component() {
  return (
    <div className=" flex flex-col ">
      <p className="text-center text-white text-[20px] font-bold mb-3">My Experience</p>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="Timeline">
            <Timeline.Time className="text-white">January Until March 2023</Timeline.Time>
            <Timeline.Title className="text-white">PT Radnet Digital Indonesia</Timeline.Title>
            <Timeline.Body className="text-white">Jalan Kayu Agung I No. 65A Kel. Turangga, Kec. Lengkong Kota Bandung</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="Timeline">
            <Timeline.Time className="text-white">August Until October 2023</Timeline.Time>
            <Timeline.Title className="text-white">PT Radnet Digital Indonesia</Timeline.Title>
            <Timeline.Body className="text-white">Jalan Kayu Agung I No. 65A Kel. Turangga, Kec. Lengkong Kota Bandung</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
      <a href="https://radnet-digital.id/" target="_blank" rel="noopener noreferrer" className="flex justify-center mb-4 cursor-pointer">
        <img src={Radnet} alt="radnet" className="w-[135px] h-[90px] lg:w-[170px] transition-transform duration-300 hover:scale-110" />
      </a>
    </div>
  );
}
