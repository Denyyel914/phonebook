"use client";

import React, { useState } from "react";
import Input from "@/app/components/Input/Input";

const Dashboard = () => {
  const [test, setTest] = useState("");
  const handleChange = (e) => {
    setTest(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      Dashboard
      <Input
        placeholder="test title"
        label="test label"
        value={test}
        onChange={handleChange}
      />
    </div>
  );
};

export default Dashboard;
