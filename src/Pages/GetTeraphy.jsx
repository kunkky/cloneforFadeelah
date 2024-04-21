
import DashboardSideBar from "../component/DashboardSideBar";
import TeraphyScheduler from "../component/TeraphyScheduler";

const Dashboard = () => {
  

  return (
   
    <div className="flex flex-row">
      <DashboardSideBar/>
      <TeraphyScheduler/>
      
    </div>
  );
};

export default Dashboard;
