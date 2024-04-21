import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import todayBtn from "../assets/Todaybtn.svg";

const DashboardHeader = () => {
  return (
<div className=" flex justify-between">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div className="flex gap-7 justify-center items-center">
              <div>
                <img src={bell} width={45} alt="Bell" />
              </div>
              <div>
                <img src={todayBtn} width={100} alt="Today Button" />
              </div>
            </div>
          </div>  )
}

export default DashboardHeader