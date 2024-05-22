const Navbar = () => {
  return (
    <>
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <ul className="flex space-x-4">
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
          <div className="header-buttons">
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
