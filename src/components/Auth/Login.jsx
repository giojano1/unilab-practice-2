import React from "react";
import { googleLogo } from "../../assets";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-[320px] mx-auto my-24 max-400:w-full max-600:my-12">
      <div>
        <button className="w-full h-11 flex items-center justify-center gap-2 border border-[#B6B7BC] text-medium-14 text-primary">
          <img
            src={googleLogo}
            alt="google"
            className="w-5 h-5 object-contain"
          />
          Continue with Google
        </button>
      </div>
      <div className="flex items-center gap-4 my-8">
        <div className="w-full h-[1px] bg-[#E6E7E8]"></div>
        <span className="text-medium-12 text-primary">OR</span>
        <div className="w-full h-[1px] bg-[#E6E7E8]"></div>
      </div>
      <form className="flex flex-col">
        <label className="flex flex-col text-medium-14 text-primary leading-5">
          Email
          <input
            type="email"
            className="border border-[#E6E7E8] h-11 p-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </label>
        <label className="flex flex-col text-medium-14 text-primary leading-5 mt-4">
          Password
          <input type="password" className="border border-[#E6E7E8] h-11 p-2" />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </label>
        <div className="text-right mt-4">
          <Link className="text-medium-12 text-primary" to="/forgot">
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="h-11 bg-primary text-white text-medium-14 my-6"
        >
          Login
        </button>
      </form>
      <div className="text-center">
        <Link className="text-medium-14 text-primary" to="/register">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
