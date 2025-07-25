import Github from './Github';
import './Github.css';
import StarBorder from './Starborder';
const GithubContributions = () => {
  return (
    <div className=" bg-black dark:bg-gray-300  h-[300px]">
      <div className=" flex justify-center  items-center mb-[30px] h-[150px] w-[390px] sm:w-full">
        <StarBorder as="button" className="mt-[100px]" color="cyan" speed="1s">
          <div className="bg-[#28272A] rounded-lg h-[150px] w-[360px] sm:w-[750px] overflow-x-auto wrapper ">
            <div className="w-[705px] mt-[13px]">
              <div className="flex">
                <p className="text-white text-[10px] ml-[62px]">Jul</p>
                <p className="text-white text-[10px] ml-[25px]">Aug</p>
                <p className="text-white text-[10px] ml-[25px]">Sep</p>
                <p className="text-white text-[10px] ml-[42px]">Oct</p>
                <p className="text-white text-[10px] ml-[30px]">Nov</p>
                <p className="text-white text-[10px] ml-[27px]">Dec</p>
                <p className="text-white text-[10px] ml-[42px]">Jan</p>
                <p className="text-white text-[10px] ml-[30px]">Feb</p>
                <p className="text-white text-[10px] ml-[30px]">Mar</p>
                <p className="text-white text-[10px] ml-[43px]">Apr</p>
                <p className="text-white text-[10px] ml-[40px]">May</p>
                <p className="text-white text-[10px] ml-[30px]">Jun</p>
                <p className="text-white text-[10px] ml-[30px]">Jul</p>
              </div>
              <div className="flex">
                <div className="flex flex-col ml-[20px] mr-[20px] gap-[15px]">
                  <p className="text-white text-[10px]">Mon</p>
                  <p className="text-white text-[10px]">Wed</p>
                  <p className="text-white text-[10px]">Fri</p>
                </div>
                <Github username="kafkaaaa28" />
              </div>
              <div className="flex justify-evenly mt-1">
                <p className="text-[#9198A1] text-[10px]">2024</p>
                <p className="text-[#9198A1] text-[10px]">2025</p>
              </div>
              <div className="flex justify-evenly mt-1 ">
                <p className="text-[#9198A1] text-[10px]">Learn how we count contributions</p>
                <div className="flex gap-[2px]">
                  <p className="text-[#9198A1] text-[10px]">Less</p>
                  <div className="mt-[2px] flex gap-[2px]">
                    <div className="w-[10px] h-[10px] bg-[#161B22]"></div>
                    <div className="w-[10px] h-[10px] bg-[#0E4429]"></div>
                    <div className="w-[10px] h-[10px] bg-[#006D32]"></div>
                    <div className="w-[10px] h-[10px] bg-[#26A641]"></div>
                    <div className="w-[10px] h-[10px] bg-[#39D353]"></div>
                  </div>
                  <p className="text-[#9198A1] text-[10px]">More</p>
                </div>
              </div>
            </div>
          </div>
        </StarBorder>
      </div>
    </div>
  );
};

export default GithubContributions;
