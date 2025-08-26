import React from "react";
import Heading from "./minicomponents/heading";
import Text from "./minicomponents/Text";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="lg:flex  bg-brainyWaveBlack px-[25px] lg:px-[50px] 2xl:px-[300px]  py-[100px]    items-start justify-between    ">
      {/* Brainwave.io */}
      <div className="lg:w-[20%]">
        <Heading
          className={`text-[28px] font-bold text-white `}
          headingText={`Brainwave.io`}
        />
        <Text
          className={`text-[15px]  text-white/30`}
          text={`With lots of unique blocks, you can easily build a page without coding. Build your next landing page.`}
        />
        <div className="flex flex-row gap-5 mt-5 text-white/50"></div>
      </div>
      {/* Company */}
      <div>
        <Text
          className={`text-[20px] font-bold text-white/30 pb-5`}
          text={`Company`}
        />
        <ul className="flex flex-col text[17px] text-white">
          <Link to="/">About us</Link>
          <Link to="/">Contact us</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Press</Link>
        </ul>
      </div>
      {/* Product */}
      <div>
        <Text
          className={`text-[20px] font-bold text-white/30 pb-5 `}
          text={`Product`}
        />
        <ul className="flex flex-col text-[17px] text-white">
          <Link to="/">Features</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">News</Link>
          <Link to="/">Help desk</Link>
          <Link to="/">Support</Link>
        </ul>
      </div>
      {/* Services */}
      <div>
        <Text
          className={`text-[20px] font-bold text-white/30 pb-5 `}
          text={`Services`}
        />
        <ul className="flex flex-col text-white text-[17px]">
          <Link to="/">Digital Marketing</Link>
          <Link to="/">Content Writing</Link>
          <Link to="/">SEO for Business</Link>
          <Link to="/">UI Design</Link>
        </ul>
      </div>
      {/* Legal */}
      <div>
        <Text
          className={`text-[20px] font-bold text-white/30 pb-5`}
          text={`Legal`}
        />
        <ul className="flex flex-col text-[17px] text-white ">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Return Policy</Link>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
