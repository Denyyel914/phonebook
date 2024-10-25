"use client";

import React, { useState } from "react";
import Input from "@/app/components/Input/Input";
import ProtectedRoute from "@/app/msal/ProtectRoute";

const Dashboard = () => {
  const [test, setTest] = useState("");
  const handleChange = (e) => {
    setTest(e.target.value);
    console.log(e.target.value);
  };
  return (
    <ProtectedRoute>
      <div>
        Dashboard
        <Input
          placeholder="test title"
          label="test label"
          value={test}
          onChange={handleChange}
        />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
