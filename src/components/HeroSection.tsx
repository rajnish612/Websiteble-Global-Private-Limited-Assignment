import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-center  mt-20 items-center flex-col">
      <div
        style={{ fontFamily: "Gerbil" }}
        className="flex relative md:text-7xl w-sm sm:w-md md:w-full px-5  max-w-2xl text-center  font-bold gap-x-4"
      >
        <img
          src="/public/images/The thinkers and doers were changing the status Quo with.png"
          alt="hero1"
          className="w-full h-full object-cover"
        />{" "}
      </div>

      <div className="w-full relative flex-col flex justify-center items-center">
        <svg
          className="absolute h-20  md:h-40  left-0 -z-10 "
          // width="84"
          // height="200"
          viewBox="0 0 84 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809"
            stroke="#0E0E0E"
            stroke-width="8"
          />
        </svg>
        <svg
          className="absolute h-20  md:h-40  left-0  -z-10 "
          width="84"
          height="200"
          viewBox="0 0 84 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809"
            stroke="red"
            stroke-width="8"
          />
        </svg>
        <div
          style={{ fontFamily: "Satoshi" }}
          className="flex mt-5   sm:max-w-md max-w-xs w-full  text-center justify-center items-center break-words  w-full  gap-x-4"
        >
          <span className="  md:max-w-max">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only hghappens when you refuse to
            play things safe.
          </span>
        </div>
      </div>
      <div className="w-full mt-30 flex gap-y-25  items-center flex-wrap md:justify-around gap-x-10 md:gap-x-0 justify-center px-5">
        <div className="flex ">
          <img
            src="/images/person.png"
            alt="team member"
            className="sm:w-40.5 w-30 h-30 sm:h-40.5 bg-amber-300 rounded-full object-cover"
          />
          <img
            src="/images/person2.png"
            alt="team member"
            className="sm:w-40.5 w-30 h-30 sm:h-40.5 relative -top-10 right-15 outline-5 outline-white bg-amber-300 rounded-full object-cover"
          />
        </div>
        <div className="flex sm:pt-20 pt-0"> 
          <img
            src="/images/person2.png"
            alt="team member"
            className="sm:w-40.5 w-30 h-30 sm:h-40.5 relative -top-30 left-6 bg-amber-300 rounded-full object-cover"
          />
          <img
            src="/images/person.png"
            alt="team member"
            className="sm:w-40.5 w-30 h-30 sm:h-40.5  outline-2 outline-white bg-amber-300 rounded-full object-cover"
          />
        </div>
        <div className="flex ">
          <img
            src="/images/person.png"
            alt="team member"
            className="sm:w-40.5 w-30 h-30 sm:h-40.5 relative -top-15 left-10  bg-amber-300 rounded-full object-cover"
          />
          <img
            src="/images/person2.png"
            alt="team member"
            className="sm:w-40.5 w-30 h-30 sm:h-40.5  z-5 outline-5 outline-white bg-amber-300 rounded-full object-cover"
          />
        </div>
        <div className="flex ">
          <img
            src="/images/person2.png"
            alt="team member"
            className="sm:w-40.5 w-30 h-30 sm:h-40.5 relative -top-20 -left-3 outline-2 outline-white bg-amber-300 rounded-full object-cover"
          />
          <img
            src="/images/person.png"
            alt="team member"
            className="sm:w-40.5 w-30 h-30 sm:h-40.5  outline-white bg-amber-300 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
