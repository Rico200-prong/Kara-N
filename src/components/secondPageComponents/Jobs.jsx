import React from "react";
import Heading from "./../minicomponents/Heading";
import Text from "./../minicomponents/Text";

const Jobs = () => {
  return (
    <section className="bg-[#161C2D] px-[300px] py-[100px]">
      <div className="flex items-end justify-between">
        <div>
          <Heading
            className={"text-white text-[36px]"}
            headingText={"Jobs by category"}
          />
          <Text
            className={"text-white w-[60%]"}
            text={
              "With lots of unique blocks, you can easily build a page without coding."
            }
          />
        </div>
        <div>
          <p className="text-[#68D585]">Explore all categories</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-[30px] mt-[70px]">
        <div className="bg-[#473BF0] p-[30px] rounded-[10px] flex items-center justify-between">
          <div>
            <p className="text-white font-[700] text-[21px] mb-[15px]">
              Design
            </p>
            <span className="text-[#161c2dbb]">47 Jobs</span>
          </div>
          <div className="bg-[#aaacb321] rounded-full flex items-center justify-center">
            <i class="bxr  bx-arrow-right-stroke text-[40px]"></i>{" "}
          </div>
        </div>
        <div className="p-[30px] rounded-[10px] bg-white">
          <p className="font-[700] text-[21px] text-[#161C2D] mb-[15px]">
            Marketing
          </p>
          <span className="text-[#161c2dbb]">51 Jobs</span>
        </div>
        <div className="p-[30px] rounded-[10px] bg-white">
          <p className="font-[700] text-[21px] text-[#161C2D] mb-[15px]">
            Marketing
          </p>
          <span className="text-[#161c2dbb]">51 Jobs</span>
        </div>
        <div className="p-[30px] rounded-[10px] bg-white">
          <p className="font-[700] text-[21px] text-[#161C2D] mb-[15px]">
            Marketing
          </p>
          <span className="text-[#161c2dbb]">51 Jobs</span>
        </div>
        <div className="p-[30px] rounded-[10px] bg-white">
          <p className="font-[700] text-[21px] text-[#161C2D] mb-[15px]">
            Marketing
          </p>
          <span className="text-[#161c2dbb]">51 Jobs</span>
        </div>
        <div className="p-[30px] rounded-[10px] bg-white">
          <p className="font-[700] text-[21px] text-[#161C2D] mb-[15px]">
            Marketing
          </p>
          <span className="text-[#161c2dbb]">51 Jobs</span>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
