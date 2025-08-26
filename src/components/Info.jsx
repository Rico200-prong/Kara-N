import React from "react";
import Heading from "./minicomponents/heading";
import Button from "./minicomponents/Button";
import Text from "./minicomponents/Text";

const Info = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 items-center mx-[25px] lg:mx-[50px] 2xl:mx-[300px] mt-[100px]">
      <div className="w-[80%]">
        <Heading
          className={"text-[32px] "}
          headingText={"Experienced experts are giving advices."}
        />
        <Text
          className={" my-[30px]"}
          text={
            "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
          }
        />
        <Button btnText={"Learn how we work"} />
      </div>
      <div>
        <img
          src="/infoImage.png"
          alt="infoImage"
          className="h-[419px] w-[308px]"
        />
      </div>
      <div className="ml-[lg:50px]">
        <div>
          <Heading className={"text-[32px]"} headingText={"1M+"} />
          <Text
            text={
              "Customers visit Albino every month to get their service done."
            }
          />
        </div>
        <div className="my-[30px]">
          <Heading className={"text-[32px]"} headingText={"92%"} />
          <Text text={"Satisfaction rate comes from our awesome customers."} />
        </div>
        <div>
          <Heading className={"text-[32px]"} headingText={"4.9/5.0"} />
          <Text
            text={"Average customer ratings we have got all over internet."}
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
