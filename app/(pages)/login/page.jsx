"use client";
import React from "react";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Perform login logic here
    localStorage.setItem("isLoggedIn", "true");
    router.push("/"); // Redirect to home page
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-end h-[100vh]">
        <h1 className="text-black text-center">
          Login with username and password.
        </h1>
        <div className="mt-4 ">
          <Input placeholder="Username" />
          <Input placeholder="password" />
          <div className="mt-4">
            <Button
              label="Login"
              style="Primary"
              customClassName="w-36 h-[40px]"
              onClick={handleLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
