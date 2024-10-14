import React from "react";
import { Link } from "react-router-dom";
import Button from "./ButtonLarge";
import LangOptions from "./LangOptions";
import { logoImg } from "../../assets";

const MobileMenu = ({ setShowNav }) => {
  return (
    <section className="bg-[#00000060] w-full h-full fixed left-0 top-0 flex items-start justify-center px-4 py-10">
      <div className="bg-white relative w-full rounded-2xl px-4 py-10 flex flex-col justify-center items-center">
        <nav className="">
          <ul className="flex flex-col items-center gap-6">
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
        <div className="my-6">
          <Button title="Join the community" variant="default" />
        </div>
        <div>
          <LangOptions />
        </div>
        <div className="flex flex-col items-center mt-20">
          <img
            src={logoImg}
            alt="Logo"
            className="w-[114px] max-650:w-[92px]"
          />
          <span className="text-[11px] text-primary  max-650:text-[10px]">
            Pets for Best
          </span>
        </div>
        <button
          onClick={() => setShowNav(false)}
          className="absolute
        left-4 top-6 text-xl text-primary"
        >
          X
        </button>
      </div>
    </section>
  );
};

export default MobileMenu;
