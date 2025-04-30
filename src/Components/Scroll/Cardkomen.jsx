import { FaUserNinja } from 'react-icons/fa';
import './ScrollVelocity.css';
import { useState, useEffect } from 'react';
import api from '../../utils/api';
const Cardkoment = () => {
  const [coments, setComents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const getComent = async () => {
      try {
        const res = await api.get('/coment/get');
        setComents(res.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Gagal ambil komentar');
        setLoading(false);
      }
    };
    getComent();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex ">
      {coments.map((komen) => (
        <div key={komen.id} className="w-[150px] mx-[10px] h-[70px] border-2 border-solid border-white rounded-lg overflow-y-scroll overflow-x-hidden element p-[10px]">
          <div className="bg-white text-black rounded-lg">
            <div className="flex gap-2 p-2 ">
              <FaUserNinja className="text-[17px]" />
              <p className="text-[17px] ">{komen.name}</p>
            </div>
            <div className="p-2 ">
              <p className="break-words whitespace-normal text-black text-[14px]">{komen.coment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardkoment;
