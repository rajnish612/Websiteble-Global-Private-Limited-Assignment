import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-center   mt-20 items-center flex-col">
      <div className="w-full relative  flex max-w-[80%]  justify-center flex-wrap-reverse">
        <div
          style={{ fontFamily: "Gerbil" }}
          className="flex  relative md:text-7xl w-sm sm:w-md md:w-full px-5  max-w-2xl text-center  font-bold gap-x-4"
        >
          <img
            src="/public/images/hero.png"
            alt="hero1"
            className="w-full h-full object-cover"
          />{" "}
        </div>
        <svg
          className="absolute h-10 md:h-20 lg:h-30 right-0  -z-10 "
          viewBox="0 0 117 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M77.8783 -4.93067e-06C86.7352 5.11355 94.4983 11.9216 100.724 20.0353C106.95 28.149 111.517 37.4095 114.164 47.2882C116.811 57.1668 117.486 67.4701 116.151 77.6097C114.816 87.7494 111.497 97.5268 106.384 106.384C101.27 115.241 94.4622 123.004 86.3484 129.23C78.2347 135.455 68.9742 140.022 59.0955 142.669C49.2169 145.316 38.9136 145.992 28.774 144.657C18.6344 143.322 8.85694 140.003 -7.20974e-06 134.889L38.9391 67.4446L77.8783 -4.93067e-06Z"
            fill="#934CEC"
          />
        </svg>
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
      </div>

      <div className="w-full mt-40 flex gap-y-35  items-center flex-wrap md:justify-around gap-x-10 md:gap-x-0 justify-center px-5">
        <div className="flex ">
          <img
            src="/images/person.png"
            alt="team member"
            className="sm:w-40.5  w-30 h-30 sm:h-40.5 bg-amber-300 rounded-full object-cover"
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
