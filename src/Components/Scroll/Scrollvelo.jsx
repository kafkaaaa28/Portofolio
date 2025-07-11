import ScrollVelocity from './Scroll';
const Scrollvelo = () => {
  const velocity = 40;
  return (
    <>
      <ScrollVelocity texts={['FrontEnd', 'Junior Developer']} velocity={velocity} className="custom-scroll-text text-white dark:text-gray-800 bg-black dark:bg-gray-300" />
    </>
  );
};
export default Scrollvelo;
