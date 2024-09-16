const Contact = () => {
  return (
    <>
      {/* How to design the contact section ? */}
      <div class="inline-flex items-center justify-center w-full mt-48 ">
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 " />
        <span class="absolute px-3 font-medium mb-2 text-xl  tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-black">
          Get in touch
        </span>
      </div>
      <div className="flex items-center justify-center w-full">
        <p className="justify-center">
          Currently looking for a Full-time job as a Front-end or Fullstack
          developer
        </p>
      </div>
      {/* Email button */}
      <div className="mt-2 md:mt-0 flex items-center justify-center w-full">
        <button className="mt-3 mb-5 rounded-full border border-blue-400 bg-white hover:bg-cyan-100 text-black font-bold py-2 px-4 ">
          Email
        </button>
        <button className="mt-3 mb-5 rounded-full border border-green-500 bg-white hover:bg-lime-100 text-black font-bold py-2 px-4 ml-2 ">
          Message
        </button>
      </div>
    </>
  );
};
export default Contact;
