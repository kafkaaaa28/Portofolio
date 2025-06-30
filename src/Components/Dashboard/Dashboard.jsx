import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md';
import { IoMdMailUnread } from 'react-icons/io';
import api from '../../utils/api.js';
import { Routes, Route } from 'react-router-dom';
import NavAdmin from './NavAdmin.jsx';
const Dashboard = ({ setIsAuthenticated, setUser }) => {
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [coment, setComent] = useState([]);
  const [totalcoment, settotalComent] = useState(0);
  const [totalpesan, settotalPesan] = useState(0);
  const [loading, setLoading] = useState(true);
  const [Open, setOpen] = useState(false);
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
      <NavAdmin setIsAuthenticated={setIsAuthenticated} setUser={setUser} setOpen={setOpen} Open={Open} />
    </div>
  );
};

export default Dashboard;
