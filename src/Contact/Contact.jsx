import Lanyard from './Lanyard';
import Forms from './Forms';
import './Contact.css';
const Contact = () => {
  return (
    <section id="Contact">
      <div className="Container-Contact">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        <Forms />
      </div>
    </section>
  );
};

export default Contact;
