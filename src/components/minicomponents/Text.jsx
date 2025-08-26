import React from "react";

const Text = ({ className, text }) => {
  return (
    <p className={`text-[#161c2dbb] text-[19px] leading-[32px] ${className}`}>
      {text}
    </p>
  );
};

export default Text;
