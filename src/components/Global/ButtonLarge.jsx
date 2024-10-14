import React from "react";

const ButtonLarge = ({ title, variant, children, width }) => {
  return (
    <button
      className={`bg-primary h-11 px-7  text-white text-medium-16 rounded-[57px] ${
        variant === "outline" &&
        "bg-transparent border border-primary !text-primary flex items-center gap-2"
      } ${width === "full" && "w-full justify-center"}`}
    >
      {title}
      {children}
    </button>
  );
};

export default ButtonLarge;
