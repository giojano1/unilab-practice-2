import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const ChangePassword = () => {
  const { users, setUsers } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const updatedUsers = users.map((user) =>
      user.id === parseInt(id) ? { ...user, password: newPassword } : user
    );
    setUsers(updatedUsers);
    alert("Password changed");
    navigate("/login");
  };
  return (
    <div className="max-w-[320px] w-full">
      <div className="my-6">
        <label className="flex flex-col text-medium-14 text-primary leading-5">
          New password
          <input
            type="password"
            className="border border-[#E6E7E8] h-11 p-2"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="my-6">
        <label className="flex flex-col text-medium-14 text-primary leading-5">
          Confirm password
          <input
            type="password"
            className="border border-[#E6E7E8] h-11 p-2"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={handleChange}
        className="h-11 bg-primary rounded w-full text-white text-regular-14"
      >
        Send reset link
      </button>
    </div>
  );
};

export default ChangePassword;
