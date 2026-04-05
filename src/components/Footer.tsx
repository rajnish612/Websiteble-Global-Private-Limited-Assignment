import { motion } from "motion/react";

const focusViewport = { once: false, amount: 0.35 };

const footerColumns = [
  {
    title: "Company",
    items: ["Home", "Studio", "Service", "Blog"],
  },
  {
    title: "Terms & Policies",
    items: ["Privacy Policy", "Terms & Conditions", "Explore Accessibility"],
  },
  {
    title: "Follow Us",
    items: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
  {
    title: "Terms & Policies",
    items: [
      "498w Fluton ste, STE 2D Chicgo, IL 63867.",
      "(123) 456789000",
      "info@elementum.com",
    ],
  },
];

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#D7EEDD] pb-10 flex flex-col mt-40 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      {/* footer part 1 */}
      <motion.div
        className="flex max-w-[90%] justify-start flex-wrap-reverse relative items-center mx-auto w-full"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={focusViewport}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex sm:max-w-[70%] w-full z-10 lg:max-w-[50%] mx-auto justify-center px-10 flex-col gap-y-6 items-center"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={focusViewport}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <div className="flex w-full justify-start">
            <motion.svg
              className="md:h-20 h-15"
              viewBox="0 0 178 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, -6, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z"
                fill="#FF6D6D"
              />
            </motion.svg>
            <motion.svg
              className="md:h-20 h-15"
              viewBox="0 0 178 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
              transition={{
                duration: 5.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z"
                fill="#FF6D6D"
              />
            </motion.svg>
          </div>
          <motion.img
            src="/images/Subscribe to our newsletter.png"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          />
          <span>To make your stay special and even more memorable</span>
          <motion.button
            className="bg-black py-2 px-4 rounded-full text-white"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Subscribe Now
          </motion.button>
        </motion.div>
        <motion.svg
          className="lg:h-30 md:h-20 h-15 absolute right-0 z-2"
          viewBox="0 0 183 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={focusViewport}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <path
            d="M60.9994 227.653C47.1247 219.642 34.9637 208.977 25.2106 196.267C15.4576 183.557 8.30358 169.05 4.15702 153.575C0.0104423 138.099 -1.04745 121.959 1.04373 106.075C3.1349 90.1908 8.33419 74.8742 16.3447 60.9995C24.3553 47.1248 35.0202 34.9638 47.7306 25.2108C60.441 15.4577 74.948 8.3037 90.4232 4.15712C105.898 0.0105539 122.039 -1.04734 137.923 1.04383C153.807 3.13501 169.123 8.3343 182.998 16.3449L121.999 121.999L60.9994 227.653Z"
            fill="#934CEC"
          />
        </motion.svg>
      </motion.div>
      {/* footer part 2 */}
      <motion.div
        className="flex flex-col gap-y-20 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={focusViewport}
        transition={{ duration: 0.65 }}
      >
        <motion.div
          className="max-w-[90%] mt-20 border-t border-black pt-15 grid sm:grid-cols-2 text-center sm:text-left gap-y-8 grid-cols-1 lg:grid-cols-4 mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={focusViewport}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {footerColumns.map((column) => (
            <motion.div
              key={column.title + column.items[0]}
              className="flex flex-col gap-y-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <span className="font-bold">{column.title}</span>
              <ul
                style={{ fontFamily: "Satoshi" }}
                className="flex flex-col gap-y-4"
              >
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.span
          style={{ fontFamily: "Satoshi" }}
          className="px-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          2023 Elementum. All rights reserved
        </motion.span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
