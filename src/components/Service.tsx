import { motion } from "motion/react";

const focusViewport = { once: false, amount: 0.35 };

const serviceRows = [
  {
    title: "Office of multiple interest content",
    image: "/public/images/Colaborative & partnership.png",
  },
  {
    title: "The hanger US Air force digital experimental",
    image: "/public/images/We talk about our weight.png",
  },
  {
    title: "Office of multiple interest content",
    image: "/public/images/Colaborative & partnership.png",
  },
];

const Service = () => {
  return (
    <motion.section
      className="w-full relative gap-y-6 flex flex-col mt-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* part1 */}
      <motion.div
        className="sm:max-w-[90%] px-5 gap-y-6 justify-start items-center flex w-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={focusViewport}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex min-w-60 max-w-[50%] justify-center items-center w-full"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={focusViewport}
          transition={{ duration: 0.7 }}
        >
          <div className="items-center gap-y-4 flex flex-col w-full">
            <motion.img
              src="/public/images/heading.png"
              alt="hero2"
              className="sm:w-md w-80 md:w-full object-cover"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>
        <motion.div
          className="max-w-[50%] min-w-60 h-fit bg-amber-400 relative flex justify-center items-center w-full"
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={focusViewport}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {/*curve line svg */}
        <motion.svg
          className="absolute h-20 sm:h-30 md:h-60 right-0 "
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
      </motion.div>
      {/*Services */}
      <motion.div
        className="sm:max-w-[90%] flex-col gap-y-6 justify-center items-center flex w-full mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={focusViewport}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {serviceRows.map((row, index) => (
          <motion.div
            key={`${row.title}-${index}`}
            className="border-t pt-7 px-5 gap-y-4 flex-wrap flex justify-between border-slate-100 w-full md:grid-col-3"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{ y: -4 }}
          >
            <span className="max-w-xs w-full">{row.title}</span>
            <motion.img
              className="w-xs sm:max-w-sm"
              src={row.image}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            />
            <motion.svg
              width="145"
              height="8"
              viewBox="0 0 145 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z"
                fill="black"
              />
            </motion.svg>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Service;
