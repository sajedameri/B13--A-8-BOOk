"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    console.log(data, "google data");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login Successful");
    console.log(res);
  };

  return (
    <div className="container mx-auto min-h-[100vh] flex justify-center items-center">
      <div className="p-4 rounded bg-base-200 my-15 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-5">
          Login your account
        </h2>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(handleLoginFunc)}
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>

            <input
              type="email"
              className="input w-full"
              {...register("email", {
                required: "Email field is required",
              })}
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
              className="input w-full"
              {...register("password", {
                required: "Password field is required",
              })}
              placeholder="Enter Your Password"
            />

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button type="submit" className="btn w-full text-xl">
            Login
          </button>
        </form>

        <div className="mt-4">
          <h2 className="text-xl text-center mb-2">Or</h2>

          <button
            onClick={handleGoogleSignin}
            className="btn w-full bg-gray-600 text-white text-xl"
          >
            Google
          </button>
        </div>

        <p className="mt-4 text-center">
          Don't have an Account?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;