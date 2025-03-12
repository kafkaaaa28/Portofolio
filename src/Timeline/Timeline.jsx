'use client';

import { Button, Timeline } from 'flowbite-react';
import './Timeline.css';
export default function Component() {
  return (
    <div className="w-full flex justify-center items-center">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="Timeline">
            <Timeline.Time className="text-white">June 2018</Timeline.Time>
            <Timeline.Title className="text-white">SDN 077 Sejahtera</Timeline.Title>
            <Timeline.Body className="text-white">Jl. Sejahtera No.12, Pasteur, Kec. Sukajadi, Kota Bandung, Jawa Barat 40161.</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="Timeline">
            <Timeline.Time className="text-white">June 2021</Timeline.Time>
            <Timeline.Title className="text-white">SMPN 52 Bandung</Timeline.Title>
            <Timeline.Body className="text-white">Jl. Bukit Raya Atas, Ciumbuleuit, Kec. Cidadap, Kota Bandung, Jawa Barat 40142.</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="Timeline">
            <Timeline.Time className="text-white">June 2024</Timeline.Time>
            <Timeline.Title className="text-white">SMK Merdeka Bandung</Timeline.Title>
            <Timeline.Body className="text-white">Jl. Pahlawan No.54, Neglasari, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40124</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="Timeline">
            <Timeline.Time className="text-white">Now</Timeline.Time>
            <Timeline.Title className="text-white">Widyatama University</Timeline.Title>
            <Timeline.Body className="text-white">Jl. Cikutra No.204A, Sukapada, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40125</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
