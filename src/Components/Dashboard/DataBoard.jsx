import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { FaComments } from 'react-icons/fa';
import { RiMessage3Fill } from 'react-icons/ri';

const DataBoard = () => {
  const [totalcoment, setTotalComent] = useState(0);
  const [totalMessage, setTotalMessage] = useState(0);
  const getComent = async () => {
    try {
      const response = await api.get('/coment/get');
      setTotalComent(response.data.data.length);
    } catch (err) {
      console.log(err);
    }
  };
  const getMessage = async () => {
    try {
      const res = await api.get('/pesan/all');
      setTotalMessage(res.data.data.length);
    } catch (err) {
      console.log(err.response?.data?.message || 'gagal ambil pesan');
    }
  };
  useEffect(() => {
    getComent();
    getMessage();
  }, []);
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-[#191C24] dark:bg-gray-300 dark:text-black p-5 text-white rounded-lg">
          <p>Comment</p>
          <div className="flex justify-between">
            <p className="font-bold text-[23px]">{totalcoment}</p>
            <FaComments className="text-[33px] text-yellow-200 mr-[30px]" />
          </div>
        </div>
        <div className="bg-[#191C24] p-5 dark:bg-gray-300 dark:text-black   text-white rounded-lg">
          <p>Message</p>
          <div className="flex justify-between">
            <p className="font-bold text-[23px]">{totalMessage}</p>
            <RiMessage3Fill className="text-[33px] text-green-400 mr-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBoard;
