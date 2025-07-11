import React, { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import api from '../../utils/api';
import DeleteMessage from './DeleteMessage';
const Message = () => {
  const [message, setMessage] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [OpenModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const getMessage = async () => {
    try {
      const res = await api.get('/pesan/all');
      setMessage(res.data.data);
    } catch (err) {
      console.log(err.response?.data?.message || 'gagal ambil pesan');
    }
  };
  const HapusPesan = async (id) => {
    setLoading(true);
    try {
      const res = await api.delete(`/pesan/${id}`);
      setMessage(message.filter((pesan) => pesan.id !== id));
      setLoading(false);
      setOpenModal(false);
      await getMessage();
    } catch (err) {
      console.log(err.res?.data?.massage || 'failed delete coment');
      setLoading(false);
    }
  };
  const handleDelete = (pesan) => {
    setSelectedMessage(pesan);
    setOpenModal(true);
  };
  useEffect(() => {
    getMessage();
  }, []);
  return (
    <>
      <div className="p-6">
        <div className="bg-[#191C24] dark:bg-[#D1D5DB] p-6">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-white ">
              <thead class="text-xs border-b border-gray-600  text-gray-300 dark:bg-[#D1D5DB] dark:text-gray-800 uppercase  ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Pesan
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {message.map((pesan) => (
                  <tr key={pesan.id} class="bg-[#191C24] border-b  transition-colors ease-in-out hover:bg-black dark:bg-[#D1D5DB] dark:text-gray-800 border-gray-600 dark:hover:bg-gray-400">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:text-gray-800  whitespace-nowrap ">
                      {pesan.email}
                    </th>
                    <td class="px-6 py-4">{pesan.massage}</td>
                    <td class="px-6 py-4">
                      {pesan.created_at
                        ? new Date(pesan.created_at).toLocaleString('id-ID', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })
                        : 'Tidak tersedia'}
                    </td>

                    <td class="px-6 py-4">
                      <button type="button" onClick={() => handleDelete(pesan)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DeleteMessage show={OpenModal} onClose={setOpenModal} Pesan={selectedMessage} loading={loading} onDelete={HapusPesan} />
    </>
  );
};

export default Message;
