import React from "react";
import { Menu } from "lucide-react";
const navItems = [];
const Navbar: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between md:justify-evenly p-4">
      <img src="/public/images/Elementum.png" alt="Elementum" className="h-5" />
      <ul
        style={{ fontFamily: "Satoshi" }}
        className="text-black hidden md:flex "
      >
        <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">Studio</li>
        <li className="mx-4 cursor-pointer">Services</li>
        <li className="mx-4 cursor-pointer">Contact</li>
        <li className="mx-4 cursor-pointer">FAQ's</li>
      </ul>
      <div>
        <Menu size={22} />
      </div>
    </div>
  );
};

export default Navbar;
