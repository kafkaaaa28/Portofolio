import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../utils/api.js';
import NavAdmin from './NavAdmin.jsx';
import DataBoard from './DataBoard.jsx';
import Comment from './Coment.jsx';
import { Routes, Route } from 'react-router-dom';
import Message from './Message.jsx';
const Dashboard = ({ setIsAuthenticated, setUser }) => {
  const [Open, setOpen] = useState(true);

  return (
    <div className="h-screen bg-black dark:bg-white">
      <NavAdmin setIsAuthenticated={setIsAuthenticated} setUser={setUser} setOpen={setOpen} Open={Open} />
      <div className={` transition-all duration-300 ease-in-out  ${Open ? 'lg:ml-[255px]' : 'lg:ml-[80px]'}`}>
        <Routes>
          <Route index element={<DataBoard />} />
          <Route path="/komen" element={<Comment />} />
          <Route path="/pesan" element={<Message />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
