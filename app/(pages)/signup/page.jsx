"use client";
import React from "react";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import Background from "../../assets/route_gb.jpg";

const Signup = () => {
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

  const handleSignup = () => console.log("hahaha");
  const routeToLogin = () => router.push("/login");
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
          <h1 className="text-black mb-5 text-2xl font-semibold">
            Create Account
          </h1>
          <p>All fields are required</p>
          <form onSubmit={handleSubmit(handleSignup)}>
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
                label="Back to login"
                style="Secondary"
                customClassName="w-30 h-[40px] mr-2"
                onClick={routeToLogin}
              />
              <Button
                label="Create account"
                style="Primary"
                customClassName="w-30 h-[40px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
