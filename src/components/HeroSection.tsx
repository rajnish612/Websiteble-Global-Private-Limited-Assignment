import React from "react";
import { motion } from "motion/react";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.35 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export const HeroSection: React.FC = () => {
  const avatarGroups = [
    {
      className: "flex",
      members: [
        {
          src: "/images/person.png",
          className:
            "sm:w-40.5 w-30 h-30 sm:h-40.5 bg-amber-300 rounded-full object-cover",
        },
        {
          src: "/images/person2.png",
          className:
            "sm:w-40.5 w-30 h-30 sm:h-40.5 relative -top-10 right-15 outline-5 outline-white bg-amber-300 rounded-full object-cover",
        },
      ],
    },
    {
      className: "flex sm:pt-20 pt-0",
      members: [
        {
          src: "/images/person2.png",
          className:
            "sm:w-40.5 w-30 h-30 sm:h-40.5 relative -top-30 left-6 bg-amber-300 rounded-full object-cover",
        },
        {
          src: "/images/person.png",
          className:
            "sm:w-40.5 w-30 h-30 sm:h-40.5  outline-2 outline-white bg-amber-300 rounded-full object-cover",
        },
      ],
    },
    {
      className: "flex",
      members: [
        {
          src: "/images/person.png",
          className:
            "sm:w-40.5 w-30 h-30 sm:h-40.5 relative -top-15 left-10  bg-amber-300 rounded-full object-cover",
        },
        {
          src: "/images/person2.png",
          className:
            "sm:w-40.5 w-30 h-30 sm:h-40.5  z-5 outline-5 outline-white bg-amber-300 rounded-full object-cover",
        },
      ],
    },
    {
      className: "flex",
      members: [
        {
          src: "/images/person2.png",
          className:
            "sm:w-40.5 w-30 h-30 sm:h-40.5 relative -top-20 -left-3 outline-2 outline-white bg-amber-300 rounded-full object-cover",
        },
        {
          src: "/images/person.png",
          className:
            "sm:w-40.5 w-30 h-30 sm:h-40.5  outline-white bg-amber-300 rounded-full object-cover",
        },
      ],
    },
  ];

  return (
    <motion.section
      className="flex justify-center mt-20 items-center flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full relative flex max-w-[80%] justify-center flex-wrap-reverse"
        {...reveal}
      >
        <motion.div
          style={{ fontFamily: "Gerbil" }}
          className="flex relative md:text-7xl w-sm sm:w-md md:w-full px-5 max-w-2xl text-center font-bold gap-x-4"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/public/images/hero.png"
            alt="hero1"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.svg
          className="absolute h-10 md:h-20 lg:h-30 right-0  -z-10 "
          viewBox="0 0 117 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M77.8783 -4.93067e-06C86.7352 5.11355 94.4983 11.9216 100.724 20.0353C106.95 28.149 111.517 37.4095 114.164 47.2882C116.811 57.1668 117.486 67.4701 116.151 77.6097C114.816 87.7494 111.497 97.5268 106.384 106.384C101.27 115.241 94.4622 123.004 86.3484 129.23C78.2347 135.455 68.9742 140.022 59.0955 142.669C49.2169 145.316 38.9136 145.992 28.774 144.657C18.6344 143.322 8.85694 140.003 -7.20974e-06 134.889L38.9391 67.4446L77.8783 -4.93067e-06Z"
            fill="#934CEC"
          />
        </motion.svg>
      </motion.div>

      <div className="w-full relative flex-col flex justify-center items-center">
        <motion.svg
          className="absolute h-20  md:h-40  left-0 -z-10 "
          viewBox="0 0 84 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.path
            d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809"
            stroke="#0E0E0E"
            strokeWidth="8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.svg>
        <motion.svg
          className="absolute h-20  md:h-40  left-0  -z-10 "
          width="84"
          height="200"
          viewBox="0 0 84 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.path
            d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809"
            stroke="red"
            strokeWidth="8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0.15, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      <motion.div
        className="w-full mt-40 flex gap-y-35 items-center flex-wrap md:justify-around gap-x-10 md:gap-x-0 justify-center px-5"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          initial: {},
          whileInView: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {avatarGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            className={group.className}
            variants={{
              initial: { opacity: 0, y: 36 },
              whileInView: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {group.members.map((member, memberIndex) => (
              <motion.img
                key={`${groupIndex}-${memberIndex}`}
                src={member.src}
                alt="team member"
                className={member.className}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.25 }}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
