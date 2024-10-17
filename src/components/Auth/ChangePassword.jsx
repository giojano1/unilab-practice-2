import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
const ChangePassword = () => {
  const { users, setUsers } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedUsers = users.map((user) =>
      user.id === parseInt(id) ? { ...user, password: data.newPassword } : user
    );
    setUsers(updatedUsers);
    alert("Password changed");
    navigate("/login");
  };
  const newPassword = watch("newPassword");

  return (
    <div className="max-w-[320px] w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-6">
          <label className="flex flex-col text-medium-14 text-primary leading-5">
            New password
            <input
              type="password"
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className="border border-[#E6E7E8] h-11 p-2"
            />
            {errors.newPassword && (
              <span className="text-red-600">{errors.newPassword.message}</span>
            )}
          </label>
        </div>
        <div className="my-6">
          <label className="flex flex-col text-medium-14 text-primary leading-5">
            Confirm password
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
              className="border border-[#E6E7E8] h-11 p-2"
            />
            {errors.confirmPassword && (
              <span className="text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="h-11 bg-primary rounded w-full text-white text-regular-14"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
