"use client";
import React from "react";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import Logout from "../logout/page";
import Image from "next/image";
import Background from "../../assets/route_gb.jpg";

const Login = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = (data) => {
    console.log(data);
    router.push("/");
  };

  const routeToSignup = () => {
    console.log("Sign up clicked");
  };

  return (
    <div className="flex h-screen">
      {/* Left side with the full image */}
      <div className="flex-1 relative">
        <Image
          src={Background}
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
      </div>

      {/* Right side with the form */}
      <div className="flex-1 flex flex-col justify-center items-center p-10 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-black mb-5 text-2xl font-semibold">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Controller
              name="username"
              control={control}
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter username"
                  type="text"
                  customClassName="mb-4 w-full"
                  errorMessage={errors.username?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  customClassName="mb-4 w-full"
                  placeholder="Enter password"
                  type="password"
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <div className="mt-4">
              <Button
                label="Login"
                style="Primary"
                customClassName="w-40 h-[40px]"
              />
            </div>
          </form>

          <hr className="mt-5" />
          <div className="mt-5">No Account?</div>
          <Button
            label="Sign up"
            style="Primary"
            customClassName="w-40 h-[40px] mt-2"
            onClick={routeToSignup}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
