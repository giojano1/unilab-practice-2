import React, { useState } from "react";
import { logoImg, arrowDownIcon, ukFlag, geFlag } from "../../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "./ButtonLarge";
const Header = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState("EN");
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
        <div className="flex items-center relative max-850:hidden">
          <Button title="Join the community" variant="default" />
          <button
            className="flex items-center ml-[22px]"
            onClick={() => setShowLang((prev) => !prev)}
          >
            <img
              src={lang === "EN" ? ukFlag : geFlag}
              alt="flag"
              className="w-4 h-4 rounded-[100%] object-fill mr-1.5 "
            />
            <span>{lang}</span>
            <img
              src={arrowDownIcon}
              alt="Arrow Down"
              className={`w-2 ml-3 ${showLang && "transform rotate-180"}`}
            />
          </button>

          {showLang && (
            <div className="absolute top-[40px] right-0 flex gap-1 flex-col items-start bg-primary text-white text-bold-14  w-16 p-2 rounded-md">
              <button
                onClick={() => {
                  changeLanguage("ka");
                  setLang("GE");
                  setShowLang(false);
                }}
                className="hover:text-red-600"
              >
                GE
              </button>
              <button
                onClick={() => {
                  changeLanguage("en");
                  setLang("EN");
                  setShowLang(false);
                }}
                className="hover:text-red-600"
              >
                ENG
              </button>
            </div>
          )}
        </div>
        <div className="hidden max-850:block">
          <button className="flex flex-col gap-1">
            <div className="w-[18px] h-0.5 bg-primary"></div>
            <div className="w-[18px] h-0.5 bg-primary"></div>
            <div className="w-[18px] h-0.5 bg-primary"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
