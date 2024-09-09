import pic from "../assets/pic.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaGitAlt,
  FaJs,
  FaHtml5,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 mt-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide mt-20">
            Yossi guadie
          </h2>
          <p className="tracking-wide mt-2">Fullstack-Developer</p>
          <p className="mt-4">
            As a developer with a passion for creating seamless, user-friendly
            applications, I specialize in both front-end and back-end
            development. My expertise lies in utilizing modern frameworks like
            React, Node.js, git, to build scalable, efficient solutions.
          </p>
          {/* <!-- profiles icons container --> */}
          <ul className="flex justify-center md:justify-start flex-row mt-8 space-x-4">
            <li>
              <a href="https://github.com/sixeyes198" target="_blank">
                <FaGithub className="bx bxl-github text-2xl text-black hover:text-blue-300 "></FaGithub>
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-400"
                href="https://www.linkedin.com/in/yossi-guadie-78b30a273/"
                target="_blank"
              >
                <FaLinkedin className="bx bxl-linkedin-square text-2xl  text-blue-800 hover:text-blue-500 "></FaLinkedin>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- adding image --> */}
        <div className="flex-shrink-0">
          <img
            src={pic}
            alt="my profile image"
            className=" w-80 h-80 max-w-xs max-h-xs rounded-full object-cover mt-10"
          />
        </div>
      </div>
      {/*Skills icons container*/}
      <div className="flex justify-center mt-20">
        <ul className="flex flex-row items-center space-x-6">
          <li className="group">
            <div className="bg-gray-100 p-4 rounded-full hover:bg-gray-300 transition duration-300 transform group-hover:scale-110">
              <FaGithub className="text-3xl text-purple-600" />
            </div>
          </li>
          <li className="group">
            <div className="bg-gray-100 p-4 rounded-full hover:bg-gray-300 transition duration-300 transform group-hover:scale-110">
              <FaReact className="text-3xl text-blue-500" />
            </div>
          </li>
          <li className="group">
            <div className="bg-gray-100 p-4 rounded-full hover:bg-gray-300 transition duration-300 transform group-hover:scale-110">
              <FaGitAlt className="text-3xl text-red-500" />
            </div>
          </li>
          <li className="group">
            <div className="bg-gray-100 p-4 rounded-full hover:bg-gray-300 transition duration-300 transform group-hover:scale-110">
              <FaJs className="text-3xl text-yellow-500" />
            </div>
          </li>
          <li className="group">
            <div className="bg-gray-100 p-4 rounded-full hover:bg-gray-300 transition duration-300 transform group-hover:scale-110">
              <FaHtml5 className="text-3xl text-orange-600"></FaHtml5>
            </div>
          </li>
          <li className="group">
            <div className="bg-gray-100 p-4 rounded-full hover:bg-gray-300 transition duration-300 transform group-hover:scale-110">
              <RiTailwindCssFill className="text-3xl text-blue-600"></RiTailwindCssFill>
            </div>
          </li>
          <li className="group">
            <div className="bg-gray-100 p-4 rounded-full hover:bg-gray-300 transition duration-300 transform group-hover:scale-110">
              <SiMongodb className="text-3xl text-green-600"></SiMongodb>
            </div>
          </li>
          <li className="group">
            <div className="bg-gray-100 p-4 rounded-full hover:bg-gray-300 transition duration-300 transform group-hover:scale-110">
              <SiMysql className="text-3xl text-cyan-500"></SiMysql>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hero;
