import React from 'react';
import ComentScroll from './/ComentScroll';
import Cardkoment from './Cardkomen';
const Komenscrol = () => {
  return (
    <div className="mb-[65px]">
      <ComentScroll texts={[<Cardkoment />, <Cardkoment />]} velocity={'50'} className=" font-normal leading-normal tracking-normal text-start" />
    </div>
  );
};

export default Komenscrol;
