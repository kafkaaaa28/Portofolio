import React from 'react';
import api from '../../utils/api';
import { useState, useEffect } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Button, Modal, ModalBody, ModalHeader } from 'flowbite-react';

const Coments = () => {
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
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || 'gagal Coments');
      setOpenModal(true);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} class="flex max-w-md w-full md:w-[40%] mb-[50px] flex-col gap-4">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={name}
            class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="coment"
            onChange={onChange}
            value={coment}
            class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Comments
          </label>
        </div>
        <button className="bg-black text-white border border-white hover:bg-white hover:text-black rounded-lg" type="submit">
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
