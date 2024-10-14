import React, { useState, useEffect } from "react";
import { arrowDownIcon, ukFlag, geFlag } from "../../assets";
import { useTranslation } from "react-i18next";

const LangOptions = () => {
  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState(
    localStorage.getItem("language") === "en" ? "EN" : "GE"
  );
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "ka";
    changeLanguage(storedLang);
  }, []);
  return (
    <div className="relative w-max">
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
        <div className="absolute top-[30px] right-0 flex gap-1 flex-col items-start bg-primary text-white text-bold-14  w-16 p-2 rounded-md">
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
  );
};

export default LangOptions;
