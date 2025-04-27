import kafka from '../Img/kafkaweb.jpg';
import './Hero.css';
import RotatingText from './RotatingText';
import TrueFocus from './TextFocus';
const Hero = () => {
  return (
    <section id="home">
      <div className="Hero w-full flex flex-col sm:flex-row items-center " style={{ justifyContent: 'space-evenly' }}>
        <div>
          <div className="Text-focus">
            <TrueFocus sentence="Kafka Farel" manualMode={false} blurAmount={5} borderColor="cyan" animationDuration={2} pauseBetweenAnimations={1} />
          </div>
          <div className="flex">
            <p className="text-white Iam mr-3 font-bold">I am</p>
            <RotatingText
              texts={['Creative', 'Front-End', 'Developer', 'Cool!']}
              mainClassName="Rotating  text-black overflow-hidden  justify-center rounded-lg"
              staggerFrom={'last'}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <p className="Student text-white font-bold text-center mt-4">Student Of Widyatama University</p>
        </div>
        <img src={kafka} className="h-auto img" alt="Kafka" />
      </div>
    </section>
  );
};

export default Hero;
