import React from "react";
import Heading from "./minicomponents/heading";
import Text from "./minicomponents/Text";

const Services = () => {
  const serviceData = [
    {
      id: "1",
      serviceTitle: "Digital Marketing",
      serviceImg: "/digital-marketing.png",
      serviceText:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      serviceCta: "Learn more",
    },
    {
      id: "2",
      serviceTitle: "Business Growth",
      serviceImg: "/business-growth.png",
      serviceText:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      serviceCta: "Learn more",
    },
    {
      id: "3",
      serviceTitle: "Content Marketing",
      serviceImg: "/content-marketing.png",
      serviceText:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      serviceCta: "Learn more",
    },
  ];
  if (serviceData.length === 0) {
    return (
      <div className="text-3xl font-bold text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
        Please wait
      </div>
    );
  }
  if (!serviceData) {
    <div className="text-3xl font-bold text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
      Please try agin later.
    </div>;
  }
  return (
    <section className="px-[25px] lg:px-[50px] 2xl:px-[300px] bg-[#F4F7FA] py-[100px]">
      <div className="flex flex-col items-start lg:items-center justify-center">
        <Heading
          className={"text-[36px]"}
          headingText={"Services we offer for you"}
        />
        <Text
          className={"lg:w-[50%] lg:text-center my-[20px]"}
          text={
            "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
          }
        />
      </div>
      <div>
        <div className="grid lg:grid-cols-3 items-start gap-[40px] ">
          {serviceData.map(
            ({ id, serviceCta, serviceImg, serviceText, serviceTitle }) => (
              <div key={id} className="">
                <h6 className="py-4 text-[21px] font-bold">{serviceTitle}</h6>
                <img
                  src={serviceImg}
                  alt={serviceTitle}
                  className="rounded-md h-[165px] w-[350px]"
                />
                <p className="py-3 text-base text-[#161C2D] font-[400] lg:w-[70%]">
                  {serviceText}
                </p>
                <span className="text-[#473BF0] font-bold flex flex-row items-center">
                  {serviceCta}{" "}
                  <i class="bxr  bx-arrow-right-stroke text-[32px]"></i>
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
