"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginFunc = (data) => {
    console.log(data, "data");
  };
  console.log(errors);

  return (
    <div className="container mx-auto min-h-[100vh] flex justify-center items-center">
      <div className="p-4 rounded bg-base-200 my-15">
        <h2 className="text-3xl font-bold text-center">Login your account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              {...register("email", { required: "Email field is required" })}
              placeholder="Enter your Email"
            />
              {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              {...register("password", {
                required: "Password field is required",
              })}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full">Login</button>
        </form>

        <p className="mt-4">
          Don't have an Account?
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
