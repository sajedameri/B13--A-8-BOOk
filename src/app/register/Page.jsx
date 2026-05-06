"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
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
        <h2 className="text-3xl font-bold text-center">Register your account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              {...register("name", { required: "Name field is required" })}
              placeholder="Enter your Name"
            />
              {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

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
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              className="input"
              {...register("photo", { required: "Photo field is required" })}
              placeholder="Enter your Photo URL"
            />
              {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
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

          <button className="btn w-full bg-gray-900 text-white">Register</button>
        </form>

        
      </div>
    </div>
  );
};

export default RegisterPage;
