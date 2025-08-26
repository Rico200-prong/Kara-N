import React from "react";
import { Link } from "react-router-dom";
import Button from "./minicomponents/Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-[25px] lg:mx-[50px] 2xl:mx-[100px] mt-[50px] flex-cols">
      <div className="font-rubik">
        <Link to="/" className="text-[28px] font-bold">
          Brainwave.io
        </Link>
      </div>
      <div className="lg:flex items-center justify-between space-x-6 flex-cols hidden">
        <ul className="flex gap-[40px] space-x-5">
          <Link to="/" className="text-[#161C2D] font-bold">
            Demos
          </Link>
          <Link to="/Secondpage" className="text-[#161C2D] font-bold">
            Pages
          </Link>
          <Link to="/" className="text-[#161C2D] font-bold">
            Support
          </Link>
          <Link to="/" className="text-[#161C2D] font-bold">
            Contact
          </Link>
        </ul>
        <Button btnText={"Get A Free Quote"} />
      </div>
      <div className="block lg:hidden text-[28px]">
        <i class="bxr  bx-menu"></i>
      </div>
    </nav>
  );
};

export default Navbar;
