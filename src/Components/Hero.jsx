import pic from "../assets/pic.jpg";
const Hero = () => {
  return (
    <>
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* <!-- icons container --> */}
        <ul className="flex space-x-4">
          <li>
            <a
              className="text-white hover:text-gray-400"
              href="https://github.com/sixeyes198"
              target="_blank"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-gray-400"
              href="https://www.linkedin.com/in/yossi-guadie-78b30a273/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square text-2xl"></i>
            </a>
          </li>
        </ul>

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide">Yossi guadie</h2>
          <p className="tracking-wide">Fullstack-Developer</p>
          <p className="mt-4">
            As a developer with a passion for creating seamless, user-friendly
            applications, I specialize in both front-end and back-end
            development. My expertise lies in utilizing modern frameworks like
            React and Node.js to build scalable, efficient solutions.
          </p>
        </div>

        {/* <!-- adding image --> */}
        <div className="flex-shrink-0">
          <img
            src={pic}
            alt="my profile image"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
