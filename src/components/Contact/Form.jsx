import React from "react";
import { mapImg } from "../../assets";
import { useNavigate } from "react-router-dom";
import { contactForm } from "../../constans";
const Form = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="flex w-full justify-between items-center gap-10 my-20 max-800:flex-col max-600:my-10">
      <div className="flex-1 max-900:w-full">
        <div>
          <h2 className="text-[50px] text-primary font-bold max-600:text-[30px]">
            Get in Touch
          </h2>
          <p className="text-medium-14 leading-6  mt-5">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="my-10">
          <label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 border h-12 text-regular-14 "
            />
          </label>
          <label className="mt-5 block">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border h-12 text-regular-14 "
            />
          </label>
          <label className="mt-5 block">
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-4 border h-12 text-regular-14 "
            />
          </label>
          <label className="mt-5 block">
            <input
              type="next"
              placeholder="How did you find us?"
              className="w-full p-4 border h-12 text-regular-14  focus:outline-none text-black placeholder:text-black"
              readOnly
            />
          </label>
          <button
            type="submit"
            className="h-12 w-full bg-primary text-white text-bold-16 mt-5"
          >
            SEND
          </button>
        </form>
        <div className="flex items-center justify-between">
          {contactForm.map((box) => (
            <div
              key={box.id}
              className="flex items-center gap-4 max-1000:gap-3 max-900:flex-col max-900:text-center"
            >
              <img src={box.icon} alt={box.name} />
              <div className="flex flex-col gap-1">
                <h3 className="text-bold-14">{box.name}</h3>
                <p className="text-medium-14 max-450:text-[12px]">
                  {box.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[540px] max-1100:w-[450px] max-1000:w-[400px] max-900:w-full">
        <img src={mapImg} alt="map" />
      </div>
    </div>
  );
};

export default Form;
