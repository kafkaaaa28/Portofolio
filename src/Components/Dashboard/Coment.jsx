import React, { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import api from '../../utils/api';
import { Spinner } from 'flowbite-react';
import DeleteComent from './DeleteComent';
const Coment = () => {
  const [coment, setComent] = useState([]);
  const [selectedComent, setSelectedComent] = useState(null);
  const [OpenModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchComent, setFetchComent] = useState(true);
  const getComent = async () => {
    try {
      const res = await api.get('/coment/get');
      setFetchComent(false);
      setComent(res.data.data);
    } catch (err) {
      console.log(err.response?.data?.message || 'gagal ambil coment');
    }
  };
  const Deletecoment = async (id) => {
    setLoading(true);
    try {
      const res = await api.delete(`/coment/${id}`);
      setComent(coment.filter((komen) => komen.id !== id));
      setLoading(false);
      setOpenModal(false);
      await getComent();
    } catch (err) {
      console.log(err.res?.data?.massage || 'failed delete coment');
      setLoading(false);
    }
  };
  const handleDelete = (komen) => {
    setSelectedComent(komen);
    setOpenModal(true);
  };
  useEffect(() => {
    getComent();
  }, []);
  return (
    <>
      <div className="p-6">
        <div className="bg-[#191C24] dark:bg-[#D1D5DB] p-6">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-white ">
              <thead class="text-xs border-b border-gray-600  text-gray-300 dark:text-gray-800 uppercase  ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Coment
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
                {fetchComent ? (
                  <th scope="col" colspan="4" class="px-6 py-3  text-center">
                    <Spinner color="info" aria-label="Info spinner example" />
                  </th>
                ) : (
                  coment.map((komen) => (
                    <tr key={komen.id} class="bg-[#191C24] border-b  transition-colors ease-in-out hover:bg-black border-gray-600 dark:bg-[#D1D5DB] dark:text-gray-800  dark:hover:bg-gray-400">
                      <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-gray-800 ">
                        {komen.name}
                      </th>
                      <td class="px-6 py-4">{komen.coment}</td>
                      <td class="px-6 py-4">
                        {komen.created_at
                          ? new Date(komen.created_at).toLocaleString('id-ID', {
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
                        <button type="button" onClick={() => handleDelete(komen)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                          <AiFillDelete />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DeleteComent show={OpenModal} onClose={setOpenModal} Coments={selectedComent} loading={loading} onDelete={Deletecoment} />
    </>
  );
};

export default Coment;
