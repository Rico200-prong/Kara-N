import React from "react";
import Heading from "./../minicomponents/Heading";
import Text from "./../minicomponents/Text";

const Featured = () => {
  return (
    <section className="px-[25px] py-[100px] lg:px-[50px] 2xl:px-[300px] border-t border-[#E7E9ED]">
      <h2 className="text-[36px] text-[#161C2D] font-[700] mb-[10px]">
        Featured jobs
      </h2>
      <div className="lg:flex items-center justify-between mb-[50px]">
        <Text
          className={"w-[100%] lg:w-[27%]"}
          text={
            "With lots of unique blocks, you can easily build a page without coding."
          }
        />
        <div className="bg-[#F4F7FA] w-[79px] h-[44px] flex items-center justify-items-center rounded-[10px]">
          <button>
            <i class="bxr  bx-arrow-left-stroke text-[#161C2D] text-[40px]"></i>
          </button>
          <button>
            <i class="bxr  bx-arrow-right-stroke text-[#161C2D] text-[40px]"></i>
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-y-[20px] lg:grid-cols-4">
        <div className="border border-solid rounded-[10px] px-[25px] py-[25px] h-[279px] w-[100%] lg:w-[255px] flex flex-col justify-between">
          <div>
            <p className="text-[13px] font-[700] text-[#68D585] mb-[15px]">
              FULL-TIME
            </p>
            <p className="text-[21px] text-[#161C2D] font-[700] mb-[10px]">
              Senior Software Engineer
            </p>
            <p className="text-[15px] text-[#161C2D]">New York, USA</p>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <img src="/Logo (2).png" alt="" />
            <p className="text-[17px] text-[#161C2D] font-[700]">Dorfus</p>
          </div>
        </div>
        <div className="border border-solid rounded-[10px] px-[25px] py-[25px] h-[279px] w-[100%] lg:w-[255px] flex flex-col justify-between">
          <div>
            <p className="text-[13px] font-[700] text-[#473BF0] mb-[15px]">
              REMOTE
            </p>
            <p className="text-[21px] text-[#161C2D] font-[700] mb-[10px]">
              Product Designer
            </p>
            <p className="text-[15px] text-[#161C2D]">Lake Colby, UK</p>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <img src="/sss.png" alt="" />
            <p className="text-[17px] text-[#161C2D] font-[700]">Coworks</p>
          </div>
        </div>
        <div className="border border-solid rounded-[10px] px-[25px] py-[25px] h-[279px] w-[100%] lg:w-[255px] flex flex-col justify-between">
          <div>
            <p className="text-[13px] font-[700] text-[#68D585] mb-[15px]">
              FULL-TIME
            </p>
            <p className="text-[21px] text-[#161C2D] font-[700] mb-[10px]">
              UX Designer
            </p>
            <p className="text-[15px] text-[#161C2D]">California, USA</p>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <img src="/Logo.png" alt="" />
            <p className="text-[17px] text-[#161C2D] font-[700]">Askimat</p>
          </div>
        </div>
        <div className="border border-solid rounded-[10px] px-[25px] py-[25px] h-[279px] w-[100%] lg:w-[255px] flex flex-col justify-between">
          <div>
            <p className="text-[13px] font-[700] text-[#F64B4B] mb-[15px]">
              FULL-TIME
            </p>
            <p className="text-[21px] text-[#161C2D] font-[700] mb-[10px]">
              Full-stack Web Developer
            </p>
            <p className="text-[15px] text-[#161C2D]">Katlynburgh, Sweden</p>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <img src="/Logo (1).png" alt="" />
            <p className="text-[17px] text-[#161C2D] font-[700]">Greener</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
