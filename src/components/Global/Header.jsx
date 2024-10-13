import React from "react";
import { logoImg } from "../../assets";
const Header = () => {
  return (
    <header>
      <div className="flex flex-col">
        <img src={logoImg} alt="Logo" className="w-[114px]" />
        <span>Pets for Best</span>
      </div>
    </header>
  );
};

export default Header;
