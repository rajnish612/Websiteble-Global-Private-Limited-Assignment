import React from "react";

const Testimonials = () => {
  return (
    <div className="flex mt-40 justify-center max-w-[80%] sm:max-w-[90%] mx-auto relative items-center flex-wrap w-full">
      <img src="/public/images/image.png" />
      <div className="md:max-w-xl sm:w-sm w-xs gap-y-4 absolute justify-center items-center  md:w-full flex flex-col">
        <img
          className="sm:w-sm w-xs  lg:w-auto"
          src="/public/images/head.png"
          alt="Testimonial"
        />
        <img src="/public/images/msg.png" alt="Testimonial" />
      </div>
    </div>
  );
};

export default Testimonials;
