import React from "react";

const Service = () => {
  return (
    <div className="w-full relative gap-y-6 flex flex-col mt-20">
      {/* part1 */}
      <div className="w-full max-w-[90%] mx-auto  gap-y-4  grid grid-cols-1 md:grid-cols-2  items-center">
        <div className="flex">
          <div className="   items-center gap-y-4 flex flex-col w-full">
            <img
              src="/public/images/heading.png"
              alt="hero2"
              className="sm:w-md w-80 md:w-full  object-cover"
            />
          </div>
        </div>
        <div className="   relative  flex justify-center items-center w-full">
          {/*curve line svg */}
          <svg
            className="  "
            viewBox="0 0 1483 654"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2_9)">
              <path
                d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727"
                stroke="#FF6D6D"
                stroke-width="5"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2_9"
                x="0"
                y="0"
                width="1502.99"
                height="653.604"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="16" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_9"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_9"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="max-w-[90%] w-full mx-auto">
        <div className="border-t border-slate-100 w-full md:grid-col-3">
          <span>Office of multiple interest content</span>
        </div>
      </div>
    </div>
  );
};

export default Service;
