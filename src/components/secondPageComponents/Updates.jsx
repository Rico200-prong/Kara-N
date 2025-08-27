import React from "react";
import Heading from "../minicomponents/Heading";
import Text from "./../minicomponents/Text";
import Button from "./../minicomponents/Button";

const Updates = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-[300px] py-[100px]">
      <div className="bg-[#68D585] rounded-full flex items-center justify-center w-[78px] h-[78px]">
        <i class="bxr  bx-folder-open text-[#2D2D2D] text-[30px]"></i>{" "}
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Heading
          className={"text-[36px] my-[30px]"}
          headingText={"Get our latest updates"}
        />
        <Text
          className={"w-[55%] text-center "}
          text={
            "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
          }
        />
      </div>
      <form className="flex my-[30px]">
        <input
          type="text"
          placeholder="Enter your email"
          className="border rounded-[10px] w-[300px] h-[60px] px-5"
        />
        <Button className={"px-[40px] py-[10px]"} btnText={"Subscribe"} />
      </form>
      <div className="flex items-center justify-center">
        <p className="text-[15px] text-[#161C2D] font-[400] leading-[26px] w-[60%] text-center">
          We’ll never share your details with third parties. View our Privacy
          Policy for more info.
        </p>
      </div>
    </section>
  );
};

export default Updates;
