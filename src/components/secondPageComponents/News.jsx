import React from "react";

const News = () => {
   const newsData = [
      {
        id: "1",
        newsImg: "/career.svg",
        newsTitle: "Career",
        newsHeading: "How to win any job you want. Get started with 5 steps.",
      },
      {
        id: "2",
        newsImg: "/lifestyle.svg",
        newsTitle: "Lifestyle",
        newsHeading: "10 ways to reduce your office work depression.",
      },
      {
        id: "3",
        newsImg: "/career-2.svg",
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

  return <div>News</div>;
};

export default News;
