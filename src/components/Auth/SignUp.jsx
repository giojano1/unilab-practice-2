import React, { useContext, useState } from "react";
import { googleLogo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      password: password,
    };
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setPassword("");
    navigate("/login");
  };
  return (
    <div className="w-[320px] mx-auto  max-400:w-full ">
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
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="flex flex-col text-medium-14 text-primary leading-5">
          Name
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="border border-[#E6E7E8] h-11 p-2"
          />
        </label>
        <label className="flex flex-col text-medium-14 text-primary leading-5 mt-4">
          Email
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#E6E7E8] h-11 p-2"
          />
        </label>
        <label className="flex flex-col text-medium-14 text-primary leading-5 mt-4">
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#E6E7E8] h-11 p-2"
          />
        </label>
        <div className="text-left mt-4">
          <span className="text-medium-12 text-primary">
            By creating an account you agree with our Terms of Service, Privacy
            Policy,
          </span>
        </div>
        <button
          type="submit"
          className="h-11 bg-primary text-white text-medium-14 my-6"
        >
          Create account
        </button>
      </form>
      <div className="text-center">
        <Link className="text-medium-14 text-primary" to="/login">
          Already have an account? Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
