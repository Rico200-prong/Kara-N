import React from "react";

const Heading = ({ className, headingText }) => {
  return (
    <header
      className={`text-[45px] text-brainyWaveBlack font-[700] ${className} `}
    >
      {headingText}
    </header>
  );
};

export default Heading;
