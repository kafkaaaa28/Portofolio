import Lanyard from './Lanyard';
import Forms from './Forms';
import { Link } from 'react-router-dom';
import Coments from '../Coments/Coment';
import SocialMedia from './SocialMedia';
import './Contact.css';
const Contact = () => {
  return (
    <section id="Contact" className="bg-black dark:bg-gray-300">
      <div className="flex flex-col sm:flex-row ">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        <div className="flex flex-col justify-center items-center  w-full ">
          <div className="flex justify-center w-full  sm:w-[50%] ">
            <SocialMedia />
          </div>
          <div className="w-[70%] md:w-full flex flex-col justify-center items-center">
            <Forms />
            <div className="w-full mb-[50px]  flex justify-center items-center">
              <Link to={'/coments'}>
                <button class="cssbuttons-io-button ">
                  Coments
                  <div class="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
