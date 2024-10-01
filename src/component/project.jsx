import airbnb from "../assets/airbnblogo.jpeg";
import simonlogo from "../assets/simonlogo.jpg";
import "../css/index.css";

export default function Project() {
  return (
    <div>
      <div className="flex text-5xl font-bold justify-center items-center mt-36 mb-8">
        <h1 id="project" className="domain">
          {" "}
          My Project
        </h1>
      </div>
      <p className="text-white grid md:w-2/4 w-full text-center mx-auto text-1xl">
        I've worked on several projects, ranging from full-stack applications to
        smaller interactive tools. These projects highlight my ability to create
        dynamic, responsive designs and manage complex data workflows. Each one
        has helped refine my skills and expand my understanding of web
        development
      </p>
      {/* <div> */}
      <div className="grid  max-w-screen-full sm:grid-cols-10 grid-cols-8  sm:gap-6 items-center justify-center sm:mx-64 my-4 mx-2">
        <div className="sm:col-span-5 col-span-8 text-center border border-[#8750f7] bg-black rounded-3xl sm:px-8 sm:py-4 px-2 py-4 ml-2 items-center custom-border card ">
          <img src={airbnb} alt="airbnb logo" className="rounded-3xl "></img>
          <h1 className="text-3xl text-white  pt-2 ">Wanderlust - Airbnb </h1>
          <p className=" text-white w-full mt-2 px-7">
            This project is a full-stack web application inspired by Airbnb. I
            used Node.js and Express to build the server, with secure user
            authentication using Passport.js. It features a fully functional
            user profile section, where users can manage their details, add or
            delete listings, and leave reviews. The app also includes
            interactive maps for property location searches using Mapbox, and
            secure image uploads handled by Cloudinary
          </p>
          <div className="text-white mt-2">
            <ul className=" px-20 list-disc custom-bullet">
              <li>Multer for file uploads</li>
              <li> Joi for user input validation</li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-8 my-5">
            <a
              className="text-[#8750f7] py-4 px-8 rounded-full border border-[#8750f7] text-sm font-bold hover:bg-[#8750f7] hover:text-white transition-all duration-500 ease-in-out delay-0 hover:shadow-[0_0_1rem_#8750f7]"
              href="https://air-bnb-5k2p.onrender.com/listings"
            >
              Exploer Project
            </a>
            <a
              href="https://github.com/yogeshkumar213/Air-bnb"
              className="text-[#8750f7]  p-2  h-9 w-9 flex items-center justify-center ml-2 hover:bg-[#8750f7] hover:text-white rounded-full border border-[#8750f7] transition-all duration-500 ease-in-out delay-0 hover:shadow-[0_0_2rem_#8750f7]"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className=" sm:col-span-5 col-span-8  w-full border border-[#8750f7] bg-black  sm:px-8 sm:py-4 px-2 py-4 sm:ml-2 rounded-3xl text-center items-center custom-border my-12 card">
          <img
            src={simonlogo}
            alt="Simon logo"
            className="rounded-3xl h-60 w-full text-center  px-1 py-1 "
          ></img>
          {/* <div> */}
          <div className="text-white w-full">
            <h1 className="pb-4 text-3xl pt-1">Mini-project</h1>
          </div>
          <div className="text-white w-full mb-4">
            <h3 className="text-2xl ">Simon Game</h3>
            <p className=" px-14 pt-2">
              A fun memory game built using HTML, CSS, and JavaScript where
              players follow increasingly complex patterns of colors.
            </p>
          </div>
          <hr></hr>
          <div className="text-white w-full mt-4">
            <h3 className="text-2xl ">ToDo List (React-Redux)</h3>
            <p className="px-12 pt-2">
              A simple yet powerful task manager built with React and Redux for
              state management. It allows users to add, delete, and update tasks
              efficiently
            </p>
          </div>
          {/* </div> */}
          <div className="flex items-center justify-center gap-8 my-4">
            <a
              className="text-[#8750f7] py-4 px-8 rounded-full border border-[#8750f7] text-sm font-bold hover:bg-[#8750f7] hover:text-white transition-all duration-500 ease-in-out delay-0 hover:shadow-[0_0_1rem_#8750f7]"
              href="https://github.com/yogeshkumar213"
            >
              Many more
            </a>
            <a
              href="https://github.com/yogeshkumar213"
              className="text-[#8750f7]  p-2  h-9 w-9 flex items-center justify-center ml-2 hover:bg-[#8750f7] hover:text-white rounded-full border border-[#8750f7] transition-all duration-500 ease-in-out delay-0 hover:shadow-[0_0_2rem_#8750f7]"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
