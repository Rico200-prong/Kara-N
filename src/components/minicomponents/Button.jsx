import React from "react";

const Button = ({ className, btnText }) => {
  return (
    <button
      className={`bg-brainyWavePurple text-white px-5 py-2 min-h-11 flex items-center rounded-lg font-bold ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
