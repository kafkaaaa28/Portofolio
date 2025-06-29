import './Timeline.css';
import TimlineStudy from './TimlineStudy';
import ScrollTimeline from './ScrollTimline';
import TimelineMagang from './TimelineMagang';
export default function Component() {
  return (
    <div className=" flex flex-col min-h-screen bg-gradient rounded-[20px] mx-[10px] lg:mx-[100px] justify-center overflow-x-hidden ">
      <div className="border-t-2 border-b-2 h-[50px] my-[50px]  border-[#C1C1C1] min-w-[132%]">
        <ScrollTimeline texts={['Timeline']} velocity={'40'} className=" w-full text-[30px] text-white" />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mx-[20px]">
        <TimlineStudy />
        <TimelineMagang />
      </div>
    </div>
  );
}
