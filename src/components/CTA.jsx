import React from "react";

const CTA = () => {
  return (
    <section className="relative lg:h-[580px] bg-[url('/ctaomage.png')] bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="flex flex-col items-center justify-center py-3">
        <button className="bg-white rounded-full p-[20px] flex items-center justify-center">
          <i class="bxr  bxs-play text-[#473BF0] text-[23px]"></i>
        </button>
        <h2 className="flex mt-2 text-5xl font-bold text-center text-white">
          How do we help you to grow?
        </h2>
        <p className="text-[19px] leading-8 font-[400] text-white lg:w-[70%] text-center mt-3">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
     
    </section>
  );
};

export default CTA;
