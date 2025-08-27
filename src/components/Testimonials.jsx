import React from "react";
import Heading from "./minicomponents/Heading";
import Text from "./minicomponents/Text";
import Button from "./minicomponents/Button";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      userImg: "/Test1.png",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
    {
      id: 2,
      userImg: "/Test2.png",
      quote:
        "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      userName: "Curtis Rhodes",
      userJD: "Digital Marketer",
    },
    {
      id: 3,
      userImg: "/Test3.png",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
  ];

  if (testimonialData.length === 0) {
    return (
      <div className="text-3xl font-bold text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
        No data points in the response
      </div>
    );
  }

  if (!testimonialData) {
    <div className="text-3xl font-bold text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
      Data did not come
    </div>;
  }
  return (
    <section>
      <div className="lg:mx-[50px] 2xl:mx-[300px] mx-[25px]">
        <div className="flex flex-col items-center justify-center ">
          <Heading
            className="text-[36px]  mt-[100px] mb-[15px]"
            headingText={"What people say about us"}
          />
          <Text
            className=" lg:w-[50%] lg:text-center "
            text={
              "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
            }
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mt-20  ">
          {testimonialData.map(({ id, userImg, userJD, userName, quote }) => (
            <div key={id} className="p-5 border rounded-md shadow-lg">
              <img
                src={userImg}
                alt={userName}
                className="rounded-full w-[54px] mt-[20px] mb-[40px]"
              />
              <p className=" text-[21px] leading-[32px] mb-[20px]">{quote}</p>
              <div>
                <span className="font-bold">{userName}</span>
                <span className="font-extralight text-[#161C2D]">{userJD}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#68D585] lg:flex items-start lg:items-center justify-center px-[25px] py-[50px]  ">
        <Heading
          className="text-white text-[32px]"
          headingText={"Ready to get started?"}
        />
        <Button
          className="bg-white text-red-950 text-[18px] font-[700] ml-[20px] "
          btnText={"Get A Free Quote"}
        />
      </div>
    </section>
  );
};

export default Testimonials;
