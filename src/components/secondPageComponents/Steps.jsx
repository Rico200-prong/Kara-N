import React from "react";
import Text from "./../minicomponents/Text";

const Steps = () => {
  return (
    <section className="2xl:mx-[300px] mx-[25px] lg:mx-[50px] my-[100px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[36px] text-[#161C2D] font-[700] mb-[15px]">
          Find jobs with 3 easy steps
        </h2>
        <Text
          text={
            "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
          }
          className={"w-[50%] text-center"}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-[425px]">
          <img src="/stepsimg.png" alt="" />
        </div>
        <div>
          <div className="flex items-start gap-x-[20px]">
            <span className="w-[43px] h-[43px] bg-[#473BF0] font-[700] text-[17px] text-white flex items-center justify-center rounded-full">
              1
            </span>
            <div>
              <h3 className="text-[21px] text-[#161C2D] font-[700] mb-[15px]">
                Search for a job
              </h3>
              <p className="text-[17px] text-[#161c2dbb] w-[60%] leading-[29px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[20px] my-[40px]">
            <span className="w-[43px] h-[43px] bg-[#473BF0] font-[700] text-[17px] text-white flex items-center justify-center rounded-full">
              2
            </span>
            <div>
              <h3 className="text-[21px] text-[#161C2D] font-[700] mb-[15px]">
                Apply within our website
              </h3>
              <p className="text-[17px] text-[#161c2dbb] w-[60%] leading-[29px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[20px]">
            <span className="w-[43px] h-[43px] bg-[#473BF0] font-[700] text-[17px] text-white flex items-center justify-center rounded-full">
              3
            </span>
            <div>
              <h3 className="text-[21px] text-[#161C2D] font-[700] mb-[15px]">
                Get interview call
              </h3>
              <p className="text-[17px] text-[#161c2dbb] w-[60%] leading-[29px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
