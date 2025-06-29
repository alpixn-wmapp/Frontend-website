import React from "react";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import MainContent from "../components/Dashboard/MainContent";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 ml-72">
          <DashboardHeader />
          <div>
            <MainContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
