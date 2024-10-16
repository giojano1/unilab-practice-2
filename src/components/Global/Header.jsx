import React, { useContext, useState } from "react";
import { logoImg } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ButtonLarge";
import MobileMenu from "./MobileMenu";
import LangOptions from "./LangOptions";
import UserPopUp from "./UserPopUp";
import { UserContext } from "../../context/UserContext";
const Header = () => {
  const navigate = useNavigate();
  const { isUser, userData, showUserNav, setShowUserNav } =
    useContext(UserContext);
  const [showNav, setShowNav] = useState(false);
  const handleRedirect = () => [navigate("/login")];
  return (
    <header className="h-[100px] flex items-center ">
      <div className="flex justify-between items-center container">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <img
              src={logoImg}
              alt="Logo"
              className="w-[114px] max-650:w-[92px]"
            />
            <span className="text-[11px] text-primary  max-650:text-[10px]">
              Pets for Best
            </span>
          </div>
          <nav className="ml-12 max-850:hidden">
            <ul className="flex items-center gap-12 max-1000:gap-8">
              <li>
                <Link to="/" className="text-bold-16 text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category" className="text-bold-16 text-primary">
                  Category
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-bold-16 text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center  max-850:hidden ">
          <div className="relative">
            {isUser === null ? (
              <Button
                title="Join the community"
                variant="default"
                func={handleRedirect}
              />
            ) : (
              <>
                <button onClick={() => setShowUserNav((prev) => !prev)}>
                  {userData.name}
                </button>
                {showUserNav && <UserPopUp data={userData} />}
              </>
            )}
          </div>
          <div>
            <LangOptions />
          </div>
        </div>
        <div className="hidden max-850:block">
          <button
            onClick={() => setShowNav(true)}
            className="flex flex-col gap-1"
          >
            <div className="w-[18px] h-0.5 bg-primary"></div>
            <div className="w-[18px] h-0.5 bg-primary"></div>
            <div className="w-[18px] h-0.5 bg-primary"></div>
          </button>
        </div>
        {showNav && <MobileMenu setShowNav={setShowNav} />}
      </div>
    </header>
  );
};

export default Header;
