"use client";
import React from "react";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import Background from "../../assets/route_gb.jpg";
import arrowback from "@/app/assets/pagination/arrow_back.svg";
import { showToast } from "@/app/components/Toastify/Toastify";
import ToastNotification from "@/app/components/Toastify/Toastify";
const Signup = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const password = watch("password");

  const handleSignup = (data) => {
    console.log(data);
    // if (data.password !== data.confirmPassword) {
    //   console.log("hahaha");
    //   showToast("Username and password is not match!", "error", {
    //     icon: false,
    //   });
    // } else {
    //   console.log("oks");
    // }
  };
  const routeToLogin = () => router.push("/login");
  return (
    <div className="flex h-screen">
      <ToastNotification />
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
            Create an account
          </h1>
          <p className="mb-3">All fields are required</p>
          <form onSubmit={handleSubmit(handleSignup)}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "Firstname is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Firstname"
                  type="text"
                  customClassName="mb-4 w-full"
                  errorMessage={errors.firstName?.message}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "lastname is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Lastname"
                  type="text"
                  customClassName="mb-4 w-full"
                  errorMessage={errors.lastName?.message}
                />
              )}
            />
            <Controller
              name="username"
              control={control}
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  customClassName="mb-4 w-full"
                  placeholder="Username"
                  type="text"
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
                  placeholder="Password"
                  type="password"
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password ||
                  "Password and confirm password do not match",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  customClassName="mb-4 w-full"
                  placeholder="Confirm Password"
                  type="password"
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />

            <div className="flex  mt-3 ">
              <Button
                label="Back to login"
                customClassName="w-30 h-[40px] mr-2 text-[#0077D4]"
                onClick={routeToLogin}
                iconType="leading"
                icon={<Image src={arrowback} alt="Vercel Logo" />}
                type="button"
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
