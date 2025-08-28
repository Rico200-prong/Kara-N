import React from "react";
import Heading from "./../minicomponents/Heading";
import Text from "./../minicomponents/Text";

const Companies = () => {
  return (
    <section className="2xl:mx-[300px] mx-[25px] lg:mx-[50px] my-[100px]">
      <div className="flex flex-col items-center justify-center ">
        <Heading className="" headingText={"Big companies are here"} />
        <Text
          className="lg:w-[56%] w-[100%] text-center"
          text={
            "With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes. You have a business to run. Stop worring about cross-browser bugs, designing new pages."
          }
        />
      </div>
    </section>
  );
};

export default Companies;
