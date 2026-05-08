"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage =  () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginFunc = async (data) => {
    

 
  const { data:res, error } = await authClient.signUp.email({
    name: data.name, // required
    email: data.email, // required
    password:data. password, // required
    image:data.photo,
    callbackURL: "/",
   
});
 console.log(res,error)
if (error) {
  toast.error(error.message);
}

if (res) {
  toast.success("Signup successful!");
}
  };
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
            <legend className="fieldset-legend">Photo URL</legend>
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

          <button className="btn w-full bg-gray-900 text-white"><Link href={"/loginpage"}>Register</Link>
          </button>
         
        </form>

        
      </div>
        <ToastContainer />
    </div>
  );
};

export default RegisterPage;
