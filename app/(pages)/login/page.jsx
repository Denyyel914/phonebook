"use client";
import React from "react";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
// import { useMsal } from "@azure/msal-react";

// const { instance } = useMsal();

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
  return (
    <div>
      {/* <div className="flex flex-col justify-center items-end h-[100vh]"> */}
      <div className="flex flex-col justify-center items-center h-[100vh] mr-5">
        <div className="">
          <h1 className="text-black mb-5">Login with username and password.</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Controller
              name="username"
              control={control}
              rules={{ required: "username is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="enter username"
                  type="text"
                  customClassName="mb-5 w-full"
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
                  customClassName="mb-5 w-full"
                  placeholder="enter password"
                  type="password"
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <div className="mt-4">
              <Button
                label="Login"
                style="Primary"
                customClassName="w-24 h-[40px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
