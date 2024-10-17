import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
const Reset = () => {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userExists = users.find((user) => user.email === data.email);
    if (userExists) {
      console.log("User found:", userExists);
      navigate(`/resetpassword/${userExists.id}`);
    } else {
      alert("Email not found");
    }
  };

  return (
    <div className="max-w-[320px]">
      <p className="text-regular-14 text-primary leading-5">
        Please enter the email address associated with your account. We'll
        promptly send you a link to reset your password.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="my-6">
        <label className="flex flex-col text-medium-14 text-primary leading-5">
          Email
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
            className="border border-[#E6E7E8] h-11 p-2"
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </label>
        <button
          type="submit"
          className="h-11 bg-primary rounded w-full text-white text-regular-14 mt-4"
        >
          Send reset link
        </button>
      </form>
    </div>
  );
};

export default Reset;
