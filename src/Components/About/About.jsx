import ScrollReveal from './ScrollReveal';
const About = () => {
  return (
    <div className="Container-about bg-black dark:bg-gray-300" id="About">
      <div className="w-[70%] text-justify ">
        <p className="AboutHeader text-white dark:text-gray-800 font-bold">About Me</p>
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
          hii my name is kafka farel januar i am 18 years old when i graduated from computer network engineering school. for now i am a student in the early semester with a bachelor's degree in informatics engineering at widyatama
          university. my main expertise as a junior front end developer. for now i live in bandung city. i am the second child of 2 siblings.
        </ScrollReveal>
      </div>
    </div>
  );
};
export default About;
