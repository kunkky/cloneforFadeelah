import angry from "../assets/angry.svg";
import chart from "../assets/chart.svg";
import datepicker from "../assets/datepicker.svg";
import bigchart from "../assets/bigchart.svg";
import DashboardHeader from "./DashboardHeader";
import WelcomeCard from "./WelcomeCard";
import User from "./User";

const DashboardMain = () => {
  const card = [
    {
      emoji: <img src={angry} alt="" srcSet="" className="bg-[#F8DEBD] p-1 rounded-md" />,
      text: "Angry",
      category: "normal",
      map: <img src={chart} alt="" srcSet="" width={350} />
    },
    {
      emoji: <img src={angry} alt="" srcSet="" className="bg-[#D0FBFF] p-1 rounded-md" />,
      text: "Anxious",
      category: "normal",
      map: <img src={chart} alt="" srcSet="" width={350} />
    },
    {
      emoji: <img src={angry} alt="" srcSet="" className="bg-[#FBF0F3] p-1 rounded-md" />,
      text: "Calm",
      category: "normal",
      map: <img src={chart} alt="" srcSet="" />
    }
  ];

  
  return (
    <div className="w-full h-full min-h-screen flex flex-row ">
        <div className="h-full min-w-[65%] bg-[#EBF5FF] rounded-l-[30px] p-5">
          <DashboardHeader/>
          <WelcomeCard/>
          <div className="grid grid-cols-3 justify-between gap-5 items-center mt-2 h-auto min-h-[35%]">
            {card.map((item, index) => (
              <div key={index} className=" h-auto bg-white m-4 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center text-lg font-bold">
                  {item.emoji}
                  <p>{item.text}</p>
                </div>
                <div>
                  <p>{item.category}</p>
                </div>
                <div className="mt-20">
                  <p>{item.map}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-md mt-10 h-[35%]">
            <div className="flex justify-between items-center px-5 py-2">
              <div className="font-bold"><h1>Activity Growth</h1></div>
              <div><img src={datepicker} alt="Date Picker" /></div>
            </div>
            <div className="flex justify-center items-center">
              <img src={bigchart} alt="Big Chart" className="block mx-auto" />
            </div>
            <ul className="flex gap-3 pl-10 text-[#233876]">
              <li>Reading</li>
              <li>Therapy</li>
              <li>Meditation</li>
            </ul>
          </div>
        </div>
        <User/>
      </div>
  )
}

export default DashboardMain;
