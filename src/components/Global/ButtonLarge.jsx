import React from "react";

const ButtonLarge = ({ title, variant, children }) => {
  return (
    <button
      className={`bg-primary h-11 px-7  text-white text-bold-16 rounded-[57px] `}
    >
      {title}
    </button>
  );
};

export default ButtonLarge;
