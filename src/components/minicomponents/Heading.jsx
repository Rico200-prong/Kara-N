import React from "react";

const Heading = ({ className, headingText }) => {
  return (
    <div
      className={`text-[45px] text-brainyWaveBlack font-[700] ${className}  `}
    >
      {headingText}
    </div>
  );
};

export default Heading;
