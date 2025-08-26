import React from "react";
import Heading from "./minicomponents/heading";
import Button from "./minicomponents/Button";
import Text from "./minicomponents/Text";

const Hero = () => {
  return (
    <section className="  mt-[40px]">
      <div className=" lg:flex  items-center justify-between mx-[25px] 2xl:mx-[300px] lg:mx-[50px]">
        <div>
          <Heading
            className={`w-[70%]`}
            headingText={"Make your business powerful with Shade."}
          />
          <Text
            className={"lg:w-[60%] my-[30px]"}
            text={`With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.`}
          />
          <Button
            className={"px-[30px] py-[20px]"}
            btnText={"Get A Free Quote"}
          />
          <p className="text-[14px] mt-[25px] text-[#161C2D] font-[700] pl-[25px]">
            WATCH HOW WE CAN HE
          </p>
        </div>
        <div>
          <img src="/Herolady.png" alt="herolady" />
        </div>
      </div>
      <div className=" flex items-center justify-center bg-[#161C2D] text-white py-[30px]  ">
        <i class="bxr  bx-play text-[22px]"></i>
        <p className="text-[17px]">
          Interested how our software works for you?
        </p>
        <p className="text-[17px] underline">Watch our 1 minute video</p>
      </div>
    </section>
  );
};

export default Hero;
