import { useState } from 'react';
import api from '../../utils/api.js';
import { Button, Modal, ModalBody, ModalHeader } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
export default function Component() {
  const [openModal, setOpenModal] = useState(false);
  const [pesan, setPesan] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormdata] = useState({
    nama: '',
    email: '',
    massage: '',
  });
  const { nama, email, massage } = formData;

  const onchange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/pesan', { nama, email, massage });
      setPesan(res.data.message || 'Kamu berhasil mengirim pesan ke kafka');
      setOpenModal(true);
      setFormdata({ nama: '', email: '', massage: '' });
    } catch (err) {
      console.error('pesan error:', err);
      setOpenModal(true);
      setError(err.response?.data?.message || 'gagal mengirim pesan');
    }
  };
  return (
    <>
      <p className="text-white text-[20px] mb-[10px]">Send me a Message!!!</p>
      <form onSubmit={onSubmit} className="flex max-w-md w-[70%] sm:w-full mb-[100px] flex-col gap-4">
        <div className="w-full ">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={onchange}
              class="block py-2.5 text-white px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
        </div>
        <div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="nama"
              value={nama}
              onChange={onchange}
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name
            </label>
          </div>
        </div>
        <div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="massage"
              onChange={onchange}
              value={massage}
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Massage
            </label>
          </div>
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
}
