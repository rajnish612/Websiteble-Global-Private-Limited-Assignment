import React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ's", href: "#faqs" },
];

const itemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.12 + index * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex items-center justify-between md:justify-evenly p-4 relative"
    >
      <motion.img
        src="/images/Elementum.png"
        alt="Elementum"
        className="h-5"
        whileHover={{ scale: 1.04, rotate: 1 }}
        transition={{ duration: 0.2 }}
        onClick={() => {
          const target = document.querySelector("#home");
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />
      <motion.ul
        style={{ fontFamily: "Satoshi" }}
        className="text-black hidden md:flex "
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item, index) => (
          <motion.li
            key={item.href}
            custom={index}
            variants={itemVariants}
            className="mx-4 cursor-pointer"
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a href={item.href}>{item.label}</a>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className="opacity-100"
        whileHover={{ scale: 1.08, rotate: -6 }}
        transition={{ duration: 0.2 }}
      >
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => {
            if (window.innerWidth >= 768) {
              return;
            }
            setIsMenuOpen((prev) => !prev);
          }}
          className="rounded-md p-1 md:cursor-default"
        >
          <Menu size={22} />
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full right-4 z-50 mt-2 w-52 rounded-xl border border-black/10 bg-white/95 p-3 shadow-xl backdrop-blur md:hidden"
          >
            <ul style={{ fontFamily: "Satoshi" }} className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={`mobile-${item.href}`}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-black transition-colors hover:bg-black/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
