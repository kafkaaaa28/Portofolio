import React from 'react';
import api from '../../utils/api';
import { useState, useEffect } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Button, Modal, ModalBody, ModalHeader } from 'flowbite-react';

const Coments = ({ closemodal }) => {
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState('');
  const [pesan, setPesan] = useState('');
  const [formdata, setformData] = useState({
    name: '',
    coment: '',
  });
  const { name, coment } = formdata;
  const onChange = (e) => {
    setformData({ ...formdata, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/coment', { name, coment });
      setPesan(res.data.message || 'Kamu berhasil Coments Refresh halaman untuk melihat');
      setOpenModal(true);
      setformData({ name: '', coment: '' });
      closemodal(true);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || 'gagal Coments');
      setOpenModal(true);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} class="flex max-w-md w-full  mb-[50px] flex-col gap-4">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={name}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="kafkaa"
            required
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Coments
          </label>
          <input
            type="text"
            name="coment"
            onChange={onChange}
            value={coment}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <button className="bg-black mt-[20px] text-white border border-white hover:bg-white hover:border-black hover:text-black rounded-lg" type="submit">
          Send
        </button>
      </form>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            {error && !pesan ? (
              <>
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{error}</h3>
              </>
            ) : (
              <>
                <IoMdCheckmarkCircleOutline className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{pesan}</h3>
              </>
            )}
            <div className="flex justify-center gap-4">
              <Button color={`${error && !pesan ? 'failure' : 'info'}`} onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Coments;
