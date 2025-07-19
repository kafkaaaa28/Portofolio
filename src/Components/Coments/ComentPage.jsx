import React from 'react';
import Coment from './Coment';
import Glitch from './Glitch';
import './Coment.css';
import SpotlightCard from './SpotlightCard';
import StarBorder from '../GithubContributions/Starborder';
import { Spinner } from 'flowbite-react';
import { useState, useEffect } from 'react';
import api from '../../utils/api';
const ComentPage = () => {
  const [modalState, setModalState] = useState('closed');
  const [coment, setComent] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [fetchComments, setfetchComments] = useState(true);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await api.get('/coment/get');
        setComent(res.data.data);
        setfetchComments(false);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Gagal ambil komentar');
        setfetchComments(false);
        setLoading(false);
      }
    };
    if (modalState === 'closing') {
      setTimeout(() => {
        setModalState('closed');
      }, 300);
    }
    fetchComments();
  }, [modalState]);
  if (loading) return <div className="text-white">loading....</div>;
  return (
    <>
      <div className="min-h-[120vh] bg-black dark:bg-gray-300 overflow-hidden">
        <div className="w-full flex mt-[60px] md:mt-[40px] flex-col justify-center items-center">
          {fetchComments ? (
            <div className="h-screen flex justify-center items-center">
              <Spinner color="info" aria-label="Info spinner example" size="xl" />
            </div>
          ) : (
            <>
              <button onClick={() => setModalState('opening')} className="cursor-pointer">
                <Glitch speed={1} enableShadows={true} enableOnHover={true} className="text-white dark:text-gray-800">
                  Comments
                </Glitch>
              </button>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-[90px] md:ml-[100px] ">
                {coment.map((komen) => (
                  <SpotlightCard key={komen.id} className="custom-spotlight-card min-h-[200px] mt-[30px] max-w-[300px] text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div className="flex flex-col">
                      <p className="text-justify">{komen.coment}</p>
                      <p className="mt-[20px] font-bold text-[20px]">{komen.name}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
              <div
                id="default-modal"
                tabindex="-1"
                aria-hidden="true"
                class={`flex overflow-y-auto overflow-x-hidden ${
                  modalState === 'opening' ? 'slide-in-top' : modalState === 'closing' ? 'slide-out-top' : 'hidden'
                } fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
              >
                <div class="relative p-4 w-full max-w-2xl  flex justify-center items-center max-h-full">
                  <div class="relative bg-white w-full md:w-[50%] rounded-lg shadow-sm dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Coments</h3>
                      <button
                        type="button"
                        onClick={() => setModalState('closing')}
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal"
                      >
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="p-4 md:p-5 flex justify-center items-center space-y-4">
                      <Coment closemodal={() => setModalState('closing')} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ComentPage;
