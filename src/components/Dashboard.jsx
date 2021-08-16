import React, { useState } from "react";

import DashboardNavbar from "./DashboardNavbar";
import SideBar from "../components/sidebar/SideBar";
import Content from "../components/content/Content";
import '../assets/styles/dashboard.css';

const Dashboard = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
      <DashboardNavbar />
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </>
  );
};

export default Dashboard;
