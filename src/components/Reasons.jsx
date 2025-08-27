import React from "react";
import Heading from "./minicomponents/Heading";
import Text from "./minicomponents/Text";

const Reasons = () => {
  return (
    <section className="grid lg:grid-cols-2 items-center  lg:gap-[150px] mx-[25px] lg:mx-[50p] 2xl:mx-[300px]">
      <div>
        <img src="/Reasonimage.png" alt="reasonimage" />
      </div>
      <div>
        <Heading
          className="lg:w-[75%]"
          headingText={"Reasons you should choose us to grow today."}
        />
        <Text
          className="lg:w-[60%] my-[20px] "
          text={
            "We share common trends and strategies for improving your rental income and making sure you stay in high demand."
          }
        />
        <div className="lg:flex items-start justify-between">
          <div>
            <div className="flex items-center gap-[10px] mb-[30px]">
              <i class="bxr  bxs-check text-[#473BF0] text-[20px]"></i>
              <p className="text-[19px] text-[#161C2D] font-[700]">
                Fully Responsive
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <i class="bxr  bxs-check text-[#473BF0] text-[20px]"></i>
              <p className="text-[19px] text-[#161C2D] font-[700]">
                Easy to Edit
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[10px] mb-[30px]">
              <i class="bxr  bxs-check text-[#473BF0] text-[20px]"></i>
              <p className="text-[19px] text-[#161C2D] font-[700]">
                Beautiful Layouts
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <i class="bxr  bxs-check text-[#473BF0] text-[20px]"></i>
              <p className="text-[19px] text-[#161C2D] font-[700]">
                Google Font Included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
