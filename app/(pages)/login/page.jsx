"use client";
import React from "react";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
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

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-end h-[100vh]">
        <h1 className="text-black text-center">
          Login with username and password.
        </h1>
        <div className="mt-4 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              rules={{ required: "username is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="enter username"
                  label="Username"
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
                  placeholder="enter password"
                  label="Password"
                  type="password"
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <div className="mt-4">
              <Button
                label="Login"
                style="Primary"
                customClassName="w-36 h-[40px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
