import React, { useContext } from "react";
import { userIcon, logOutIcon } from "../../assets";
import { UserContext } from "../../context/UserContext";
const UserPopUp = ({ data }) => {
  const { handleLogOut } = useContext(UserContext);
  return (
    <div className="absolute top-10 z-20  bg-white shadow w-[200px] p-4 rounded-xl right-0 flex flex-col">
      <h3 className="text-regular-16 text-primary">{data.name}</h3>
      <div className="w-full h-[1px] bg-primary my-4"></div>
      <div className=" flex flex-col gap-3">
        <button className="flex items-center gap-2">
          <img src={userIcon} alt="user" className="w-5 h-5 object-contain" />
          <span className="text-medium-12 text-primary">Profile</span>
        </button>
        <button onClick={handleLogOut} className="flex items-center gap-2">
          <img
            src={logOutIcon}
            alt="logout"
            className="w-5 h-5 object-contain"
          />
          <span className="text-medium-12 text-primary">log out</span>
        </button>
      </div>
    </div>
  );
};

export default UserPopUp;
