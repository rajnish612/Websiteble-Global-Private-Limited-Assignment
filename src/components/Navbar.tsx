import React from "react";
import { Menu } from "lucide-react";
const Navbar: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between p-4">
      <span>Elementum</span>
      <ul className="text-black hidden md:flex ">
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
