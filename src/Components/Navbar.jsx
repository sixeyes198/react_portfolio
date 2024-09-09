import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; //  react-icons library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" py-2">
      <nav className="container mx-auto  flex justify-between items-center">
        {/* Hamburger menu icon for small screens */}
        <div className="flex items-center">
          <FaBars
            className="text-black cursor-pointer md:hidden mx-10"
            onClick={toggleMenu}
          />
          {/* Menu items */}
          <ul
            className={`absolute md:relative top-10 left-0 md:top-auto md:left-auto md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 bg-slate-200 bg-opacity-80 md:bg-transparent w-1/2 h-4/6 md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="#"
                className="block p-2 hover:text-white bg-opacity-50 hover:bg-zinc-100 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 hover:text-white bg-opacity-50 hover:bg-zinc-100 rounded-md"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 hover:text-white bg-opacity-50 hover:bg-zinc-100 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Email button */}
        <div className="mt-2 md:mt-0">
          <button className="rounded-full border border-gray-400 bg-white hover:bg-zinc-100 text-black font-bold py-2 px-4 ">
            Email
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
