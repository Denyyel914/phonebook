"use client";

import { Inter } from "next/font/google";
// import "./globals.css";
import Header from "./Header/Index";
import Sidebar from "./Sidebar/Index";
import Footer from "./Footer/Index";
import { useState } from "react";
import App from "next/app";

const AppLayout = ({ children }) => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
    console.log(isSidebarExpanded);
  };

  return (
    <div className="flex flex-col">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isExpanded={isSidebarExpanded} />
        <div className="flex-1 pt-24 px-12 pb-12 lg:px-12 relative overflow-y-auto max-h-screen">
          <div className="overflow-auto">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
