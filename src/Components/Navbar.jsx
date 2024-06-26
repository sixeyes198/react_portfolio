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
import { FaBars } from "react-icons/fa"; // Assuming you are using react-icons library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto p-4">
          {/* Hamburger menu icon for small screens */}
          <div className="flex justify-between items-center">
            <div>
              <FaBars
                className="text-white cursor-pointer md:hidden"
                onClick={toggleMenu}
              />
            </div>
            {/* Menu items */}
            <ul
              className={`md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${
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
          <div className="header-buttons mt-2 md:mt-0">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Email
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
