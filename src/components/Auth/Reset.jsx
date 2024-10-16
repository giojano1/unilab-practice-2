import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const Reset = () => {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleRedirect = () => {
    if (email.trim() !== "") {
      const userExists = users.find((user) => user.email === email);
      if (userExists) {
        console.log("User found:", userExists);
        navigate(`/resetpassword/${userExists.id}`);
      } else {
        alert("Email not found");
      }
    }
  };
  return (
    <div className="max-w-[320px]">
      <p className="text-regular-14 text-primary leading-5">
        Please enter the email address associated with your account. We'll
        promptly send you a link to reset your password.
      </p>
      <div className="my-6">
        <label className="flex flex-col text-medium-14 text-primary leading-5">
          Email
          <input
            type="email"
            className="border border-[#E6E7E8] h-11 p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={handleRedirect}
        className="h-11 bg-primary rounded w-full text-white text-regular-14"
      >
        Send reset link
      </button>
    </div>
  );
};

export default Reset;
