// const Navbar = () => {
//   // const [isOpen, setIsOpen] = useState(false);

//   // const toggleMenu = () => {
//   //   setIsOpen(!isOpen);
//   // };

//   return (
//     <>
//       <header className="bg-gray-800 text-white">
//         <nav className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
//           <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <div className="header-buttons mt-2 md:mt-0">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Email
//             </button>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };
// export default Navbar;

import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; //  react-icons library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Hamburger menu icon for small screens */}
        <div className="flex items-center">
          <FaBars
            className="text-white cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
          {/* Menu items */}
          <ul
            className={`absolute md:relative top-12 left-0 md:top-auto md:left-auto md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 bg-gray-600 md:bg-transparent w-full md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Email button */}
        <div className="mt-2 md:mt-0">
          <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
            Email
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
