"use client";
import React from "react";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

const Logout = () => {
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

  const handleLogout = () => console.log("hahaha");
  return (
    <div>
      <h1>Create an Account</h1>
      <p>All fields are required</p>
      <form onSubmit={handleSubmit(handleLogout)}>
        <Controller
          name="username"
          control={control}
          rules={{ required: "username is required" }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="enter username"
              type="text"
              customClassName="mb-2 w-full"
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
              customClassName="mb-2 w-full"
              placeholder="enter password"
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
          />
          <Button
            label="Create account"
            style="Primary"
            customClassName="w-30 h-[40px]"
          />
        </div>
      </form>
    </div>
  );
};

export default Logout;
