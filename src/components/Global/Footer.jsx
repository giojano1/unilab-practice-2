import React from "react";
import { Link } from "react-router-dom";
import { logoImg } from "../../assets";
import { socialLinks } from "../../constans";
const Footer = () => {
  return (
    <footer className="bg rounded-t-[40px]">
      <div className="container pt-20 max-600:pt-10">
        <div className="bg-primary rounded-2xl p-8 flex items-center justify-between max-900:flex-col max-600:p-4">
          <h3 className="text-bold-24 text-white max-w-[380px] max-900:max-w-full max-600:text-bold-20">
            Register now so you don't miss our programs
          </h3>
          <div className="flex-1 bg-white flex items-center p-3 rounded-[14px] max-900:w-full max-900:mt-4 max-600:flex-col ">
            <input
              type="text"
              placeholder="Enter your Email"
              className="h-12 w-full rounded-lg text-medium-14 text-neutral40 px-7 flex-1 border border-neutral40 focus:outline-none max-600:flex-none"
            />
            <button className="h-12 text-white bg-primary rounded-lg text-medium-16 px-7 ml-3 max-600:mt-2 max-600:w-full max-600:ml-0">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="py-10 flex items-center justify-between max-700:flex-col">
          <nav className="">
            <ul className="flex items-center gap-12 max-1000:gap-8 max-450:gap-6">
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
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-bold-16 text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-10 max-700:mt-5">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.id} target="_blank">
                <img src={link.icon} alt="icon" />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] bg-neutral20 "></div>
        <div className="py-10 flex items-center justify-between max-700:flex-col ">
          <div className="max-700:order-1 max-700:mt-2">
            <span className="text-neutral60 text-medium-14">
              © 2022 Monito. All rights reserved.
            </span>
          </div>
          <div className="flex flex-col items-center max-700:-order-1">
            <img
              src={logoImg}
              alt="Logo"
              className="w-[114px] max-650:w-[92px]"
            />
            <span className="text-[11px] text-primary  max-650:text-[10px]">
              Pets for Best
            </span>
          </div>
          <div className="flex items-center gap-5 max-700:mt-6 ">
            <span className="text-neutral60 text-medium-14">
              Terms of Service
            </span>
            <span className="text-neutral60 text-medium-14">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
