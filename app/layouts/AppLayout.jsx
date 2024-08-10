"use client";

import { Inter } from "next/font/google";
// import "./globals.css";
import Header from "./layouts/Header/Index";
import Sidebar from "./layouts/Sidebar/Index";
import Footer from "./layouts/Footer/Index";
import { useState } from "react";

const AppLayout = ({ children }) => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
    console.log(isSidebarExpanded);
  };

  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
};

export default AppLayout;
