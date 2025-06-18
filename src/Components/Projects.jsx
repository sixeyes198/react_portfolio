import { motion } from "framer-motion";
import Notes_app from "../assets/Notes_app.jpg";
const Projects = () => {
  return (
    <>
      {/* <div className="text-center mt-48 ">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          Projects
        </h2>
      </div> */}

      {/* Header with motion */}
      <motion.div
        id="projects"
        class="inline-flex items-center justify-center w-full mt-48 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 " />
        <span class="absolute px-3 font-medium mb-2 text-xl  tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-black">
          Projects
        </span>
      </motion.div>
      {/* card styling / might use this one not sure yet  */}
      {/* <div className="max-w-sm mx-20 mt-10 mb-5 bg-white border-gray-200 rounded-lg shadow dark:border-gray-700">
        <img className="rounded-t-lg" />
        image here...
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            1st project
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aut,
            mollitia ratione ad totam nostrum reiciendis laudantium cum
            recusandae accusantium placeat cumque repellat eos! Quibusdam
            repudiandae earum sapiente dicta vero?
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            check it out
          </a>
        </div>
      </div> */}

      {/* card styling */}
      <motion.div
        className="mx-4 md:mx-20 mt-10 mb-5 flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-md md:flex-row md:max-w-3xl hover:shadow-xl transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          className="ml-2 object-cover w-full h-64 rounded-t-2xl  md:h-full md:w-64 md:rounded-none md:rounded-s-2xl"
          src={Notes_app}
          alt="Project image"
        />
        <div className="flex flex-col justify-between p-6">
          <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            Notes app
          </h5>
          <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            full-stack web application built using MERN stack
            (MongoDB,express,React,Node). It allows useres to create , view,
            update, Pin, and delete personal notes though a clean, user friendly
            interface
          </p>
          <a
            href="https://notes-app-90x5.onrender.com/"
            className="inline-flex items-center w-fit px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors"
          >
            check it out
          </a>
        </div>
      </motion.div>

      {/* card styling */}
      <motion.div
        className="mx-4 md:mx-20 mt-10 mb-5 flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-md md:flex-row md:max-w-3xl hover:shadow-xl transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img className="ml-2 object-cover w-full h-64 rounded-t-2xl  md:h-full md:w-64 md:rounded-none md:rounded-s-2xl" />
        image here...
        <div className="flex flex-col justify-between p-6">
          <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            Second project
          </h5>
          <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus nostrum officia explicabo suscipit in voluptatum
            temporibus fugit nesciunt voluptate, accusamus aperiam. Facilis ea
            quo cum libero reprehenderit modi perferendis error.
          </p>
          <a
            href="#"
            className="inline-flex items-center w-fit px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors"
          >
            check it out
          </a>
        </div>
      </motion.div>

      {/* card styling */}
      <motion.div
        className="mx-4 md:mx-20 mt-10 mb-5 flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-md md:flex-row md:max-w-3xl hover:shadow-xl transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img className="ml-2 object-cover w-full h-64 rounded-t-2xl  md:h-full md:w-64 md:rounded-none md:rounded-s-2xl" />
        image here...
        <div className="flex flex-col justify-between p-6">
          <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Third project
          </h5>
          <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus nostrum officia explicabo suscipit in voluptatum
            temporibus fugit nesciunt voluptate, accusamus aperiam. Facilis ea
            quo cum libero reprehenderit modi perferendis error.
          </p>
          <a
            href="#"
            className="inline-flex items-center w-fit px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors"
          >
            check it out
          </a>
        </div>
      </motion.div>
    </>
  );
};
export default Projects;
