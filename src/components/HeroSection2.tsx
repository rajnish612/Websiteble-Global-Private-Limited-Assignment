import { motion } from "motion/react";

const focusViewport = { once: false, amount: 0.35 };

export const HeroSection2 = () => {
  return (
    <motion.section
      className="w-full relative gap-y-6 flex flex-col mt-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* Part1 */}

      <motion.div
        className="w-full gap-y-4 flex flex-wrap justify-evenly items-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={focusViewport}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="lg:max-w-2xl md:max-w-xl px-5 max-w-auto justify-center items-center gap-y-4 flex flex-col w-full"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={focusViewport}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/images/Tomorrow should be better than today.png"
            alt="hero2"
            className="md:w-full object-cover"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          />

          <span className="md:w-full">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to
            play things safe.
          </span>
          <motion.div
            className="gap-x-2 w-full flex justify-start items-center"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.2 }}
          >
            <span>Read more</span>
            <motion.svg
              className="mt-2"
              height="5"
              viewBox="0 0 145 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={focusViewport}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <path
                d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z"
                fill="black"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:max-w-lg justify-center items-center max-w-sm flex w-full"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={focusViewport}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <motion.img
              src="/images/person.png"
              alt="hero2"
              className="max-w-60 md:max-w-sm md:w-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
            />
            <motion.svg
              className="absolute md:h-40 h-20  -z-10 top-5 -right-10 md:-right-20"
              viewBox="0 0 233 227"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: [0, 4, 0], y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M45.3254 -2.02656e-06L232.277 40.5018L186.952 226.343L4.78625e-05 185.841L45.3254 -2.02656e-06Z"
                fill="#FF7171"
              />
            </motion.svg>
          </div>
        </motion.div>
      </motion.div>
      {/*curve line svg */}
      <motion.svg
        className="absolute mx-auto lg:-bottom-10 top-50 w-fit -z-10 "
        viewBox="0 0 1483 654"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={focusViewport}
        transition={{ duration: 0.5 }}
      >
        <g filter="url(#filter0_d_2_9)">
          <motion.path
            d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727"
            stroke="#FF6D6D"
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={focusViewport}
            transition={{ duration: 1.2, ease: "easeInOut" }}
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
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
      </motion.svg>
      {/* part2 */}
      <motion.div
        className="w-full gap-y-4 flex flex-wrap-reverse justify-evenly items-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={focusViewport}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="md:max-w-lg justify-center items-center max-w-sm sm:max-w-md px-5 gap-y-4 flex flex-col w-full"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={focusViewport}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <motion.svg
              className="absolute md:h-40 sm:h-30 h-20 top-0 md:-top-5  sm:bottom-2 left-0 ri md:-left-10 -z-10"
              height="100"
              viewBox="0 0 238 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M118.646 0L237.291 200.25H3.05176e-05L118.646 0Z"
                fill="#FF7171"
              />
            </motion.svg>
            <motion.img
              src="/images/person2.png"
              alt="hero2"
              className=" max-w-60 md:max-w-sm md:w-full w-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
            />
            <motion.svg
              className="absolute md:h-40 sm:h-30 h-20 bottom-0 md:-bottom-5  sm:bottom-2 right-0 ri md:-right-10"
              height="100"
              viewBox="0 0 238 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M118.646 0L237.291 200.25H3.05176e-05L118.646 0Z"
                fill="#FF7171"
              />
            </motion.svg>
          </div>
        </motion.div>

        <motion.div
          className="lg:max-w-2xl md:max-w-xl px-5 max-w-auto justify-center items-center gap-y-4 flex flex-col w-full"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={focusViewport}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/images/See how we can help you progress.png"
            alt="hero2"
            className="md:w-full object-cover"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          />

          <span className="md:w-full">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to
            play things safe.
          </span>
          <motion.div
            className="gap-x-2 w-full flex justify-start items-center"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.2 }}
          >
            <span className="w-full">Read more</span>
            <motion.svg
              className="mt-2"
              height="5"
              viewBox="0 0 238 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={focusViewport}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <path
                d="M118.646 0L237.291 200.25H3.05176e-05L118.646 0Z"
                fill="#FF7171"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection2;
