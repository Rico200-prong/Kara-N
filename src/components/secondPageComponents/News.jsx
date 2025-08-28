import React from "react";
import Text from "./../minicomponents/Text";

const News = () => {
  const newsData = [
    {
      id: "1",
      newsImg: "/career.png",
      newsTitle: "Career",
      newsHeading: "How to win any job you want. Get started with 5 steps.",
    },
    {
      id: "2",
      newsImg: "/lifestyle.png",
      newsTitle: "Lifestyle",
      newsHeading: "10 ways to reduce your office work depression.",
    },
    {
      id: "3",
      newsImg: "/career-2.png",
      newsTitle: "Career",
      newsHeading: "Why should you work as a team even on small projects.",
    },
  ];
  if (newsData.length === 0) {
    return (
      <div className="text-3xl font-bold text-red-700 capitalize min-h-[50vh] flex item-center justify-center">
        Please wait
      </div>
    );
  }
  if (!newsData) {
    <div className="text-3xl font-bold text-red-700 capitalize min-h-[50vh] flex item-center justify-center">
      Please try again later
    </div>;
  }

  return (
    <section className="bg-[#F4F7FA] px-[25px] py-[100px] lg:px-[50px] 2xl:px-[300px]">
      <div className="flex flex-col items-center justify-center mb-[70px]">
        <h3 className="text-[36px] text-[#161C2D] font-[700] mb-[15px]">
          News that helps
        </h3>
        <Text
          className={"lg:w-[40%] w-[100%] text-center"}
          text={
            "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-y-[30px] lg:grid-cols-3">
        {newsData.map(({ id, newsImg, newsTitle, newsHeading }) => (
          <div key={id} className=" w-[350px] bg-white rounded-[10px]">
            <img src={newsImg} alt="" className="rounded-t-[10px]" />
            <div className="px-[30px]">
              <p className="text-[15px] text-[#161C2D] my-[20px]">
                {newsTitle}
              </p>
              <p className="text-[21px] text-[#161C2D] font-[700] ">
                {newsHeading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
