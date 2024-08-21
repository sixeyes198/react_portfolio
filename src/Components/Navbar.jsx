import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; //  react-icons library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-cyan-700 text-black py-2">
      <nav className="container mx-auto  flex justify-between items-center">
        {/* Hamburger menu icon for small screens */}
        <div className="flex items-center">
          <FaBars
            className="text-white cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
          {/* Menu items */}
          <ul
            className={`absolute md:relative top-10 left-0 md:top-auto md:left-auto md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 bg-cyan-500 bg-opacity-80 md:bg-transparent w-1/2 h-4/6 md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a href="#" className="block p-2 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Email button */}
        <div className="mt-2 md:mt-0">
          <button className="rounded-full bg-slate-800 hover:bg-cyan-300 text-gray-50 font-bold py-2 px-4 ">
            Email
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
