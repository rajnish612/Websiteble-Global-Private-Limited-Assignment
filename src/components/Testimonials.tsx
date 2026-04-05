import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.section
      className="flex mt-40 justify-center max-w-[80%] sm:max-w-[90%] mx-auto relative items-center flex-wrap w-full"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src="/public/images/image.png"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        className="md:max-w-xl sm:w-sm w-xs gap-y-4 absolute justify-center items-center  md:w-full flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.65, delay: 0.15 }}
      >
        <motion.img
          className="sm:w-sm w-xs  lg:w-auto"
          src="/public/images/head.png"
          alt="Testimonial"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        />
        <motion.img
          src="/public/images/msg.png"
          alt="Testimonial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
