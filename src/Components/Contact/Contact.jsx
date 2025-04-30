import Lanyard from './Lanyard';
import Forms from './Forms';
import Coments from './Coment';
import SocialMedia from './SocialMedia';
import './Contact.css';
const Contact = () => {
  return (
    <section id="Contact">
      <div className="flex flex-col sm:flex-row ">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        <div className="flex flex-col justify-center  items-center w-full sm:w-[70%]">
          <div className="flex justify-center w-full  sm:w-[50%]">
            <SocialMedia />
          </div>
          <div className="flex gap-5 flex-col md:flex-row  w-[80%]">
            <Forms />
            <Coments />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
