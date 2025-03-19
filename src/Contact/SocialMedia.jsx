import './Contact.css';
import { FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';

const Link = () => {
  const Number = '62895342305487';
  const message = 'Hai Kafkaaa';
  const waLink = `https://wa.me/${Number}?text=${encodeURIComponent(message)}`;
  return (
    <>
      <div class="main">
        <div class="up">
          <a href={waLink} target="_blank">
            <button class="card1">
              <FaWhatsapp className="whatsapp" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/kafka-januar-b57524325/" target="_blank">
            <button class="card2">
              <svg xmlns="http://www.w3.org/2000/svg" class="linkedin" height="1.6em" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
              </svg>
            </button>
          </a>
        </div>
        <div class="down">
          <a href="https://github.com/kafkaaaa28" target="_blank">
            <button class="card3">
              <FaGithub className="github" />
            </button>
          </a>
          <a href="https://www.instagram.com/kfkafrl_" target="blank">
            <button class="card4">
              <FaInstagram className="instagram" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Link;
