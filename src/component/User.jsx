import weight from "../assets/weight.svg";
import lang from "../assets/language.svg";
import signout from "../assets/signout.svg";
import quest from "../assets/quest.png";
import avartar from "../assets/avartar.svg";

const User = () => {
 const card2 = [
    {
      icon: <img src={weight} />,
      text: "Weight 58kg"
    },
    {
      icon: <img src={lang} />,
      text: "Language"
    },
    {
      icon: <img src={signout} />,
      text: "Sign Out"
    }
  ];
  return (
   <div className="w-[35%] h-auto bg-[#233876] rounded-l-[30px] p-10 font-semibold">
          <div className="flex flex-col gap-12 text-white">
            <div className="border-8 rounded-lg p-3">
              <div className="flex flex-col items-center py-5">
                <img src={avartar} alt="Avatar" />
                <p>Jacob Jones</p>
                <p>25 years</p>
                <div className="grid grid-cols-3 justify-between gap-1 mt-10">
                  {card2.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center bg-[#D9D9D9] p-3 rounded-lg text-black gap-1">
                       {item.icon}  
                       {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-white text-center">Your Therapist?</p>
            <img src={quest}/>
          </div>
        </div>
  )
}

export default User