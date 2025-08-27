import React from "react";
import Heading from "./../minicomponents/Heading";
import Text from "./../minicomponents/Text";
import Button from "./../minicomponents/Button";

const Secondhero = () => {
  return (
    <section className="px-[300px] pt-[50px] bg-[#68D5851A]">
      <div className="flex gap-[150px]">
        <div className="w-[40%] mt-[90px]">
          <Heading
            className="text-[60px] leading-[65px] mb-[20px]"
            headingText={"Find a dream job that changes life."}
          />
          <Text
            text={
              "With lots of unique blocks, you can easily build a page without coding. Build your next job website."
            }
          />
          <p className="mt-[150px] text-[#161C2D]">
            Try Product Designer, Software Engineer etc.
          </p>
        </div>
        <div>
          <img src="/hero2lady.png" alt="lady-on-blue" />
        </div>
      </div>
      <div className="absolute top-[550px] left-[300px]">
        <form className="flex items-center gap-[15px] bg-[#473BF0] px-[20px] py-[20px] rounded-[10px]">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="p-5 rounded-md w-[250px] h-[50px]"
          />
          <input
            type="text"
            placeholder="City"
            className="p-5 rounded-md w-[250px] h-[50px]"
          />
          <Button btnText={"Search"} className="bg-black py-[15px] px-[50px]" />
        </form>
      </div>
    </section>
  );
};

export default Secondhero;
