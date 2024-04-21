import User from "./User";
import DashboardHeader from './DashboardHeader'
import WelcomeCard from './WelcomeCard'

const TeraphyScheduler = () => {

 
  return (
    <div className="w-full h-full min-h-screen flex flex-row ">
        <div className="h-full min-w-[65%] bg-[#EBF5FF] rounded-l-[30px] p-5">
          <DashboardHeader/>

   <WelcomeCard/>

          <div className="bg-white mt-10 leading-8 p-6 rounded-2xl shadow-md h-[auto] min-h-[15%]">
            
            <h2 className="text-[#233876] text-xl">Help us match you to the right therapist by answering 
these questions.</h2>
          </div>


          <div className="bg-white mt-10 grid grid-cols-2 leading-8 p-6 rounded-2xl shadow-md h-[auto] min-h-[15%]">
            <h2 className="text-[#233876] text-xl">Prefered gender of therapist </h2>
            <div className="flex justify-between">
              <button className="text-[#233876] font-semibold py-3 bg-[#C3DDFD] px-5 rounded-md">Male</button>
              <button className="text-[#233876] font-semibold py-3 bg-[#C3DDFD] px-5 rounded-md">Female</button>
              <button className="text-[#233876] font-semibold py-3 bg-[#C3DDFD] px-5 rounded-md">N/A</button>
            </div>
            
          </div>



        </div>
        <User/>
      </div>
  )
}

export default TeraphyScheduler;
