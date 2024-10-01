import Character from "./character";
import Picture from "./picture";
import "../css/index.css";
import "../css/forResponsive.css";

export default function Profile() {
  return (
    <div id="home">
      <div className="grid gap-4 max-w-screen-full sm:grid-cols-12 grid-cols-12  sm:mt-52 mt-44 sm:mx-12 pb-32  ">
        <div className="md:col-span-5 col-span-12 w-full mx-4 sm:mx-8">
          <div
            className="text-white text-[20.8px] font-bold "
            style={{ marginBottom: "0.2rem" }}
          >
            Hello,I am Yogesh
          </div>
          {/* reserve space for dynamic content when we apply height */}

          <h1 className=" text-4xl sm:text-5xl font-bold domain sm:min-h-[9rem] min-h-[10rem] w-full ">
            FullStack Web Developer + <Character />
          </h1>

          <br></br>
          <p className="text-white text-1xl sm:text-lg sm:py-4 pr-3 sm:pr-8 w-full ">
            Hi, I'm a Full Stack Developer with a strong foundation in both
            front-end and back-end technologies. I specialize in creating web
            applications that offer seamless, dynamic user experiences, combined
            with efficient and scalable back-end solutions.
          </p>

          <div className="flex w-full flex-wrap">
            <button className="my-8 ">
              <a
                href="#"
                className="text-[#8750f7] sm:py-4 sm:px-8 py-5 px-10 rounded-full border border-[#8750f7] sm:text-sm text font-bold hover:bg-[#8750f7] hover:text-white transition-all duration-500 ease-in-out delay-0 hover:shadow-[0_0_1rem_#8750f7]"
              >
                Download CV <i className="fa-solid fa-download"></i>
              </a>
            </button>
            <div className="space-x-6 sm:mt-5 flex sm:mx-16 px-2 mt-2">
              <a
                href="#"
                className="text-[#8750f7]  p-2 h-9 w-9 flex items-center justify-center hover:bg-[#8750f7] hover:text-white rounded-full border border-[#8750f7] transition-all duration-500 ease-in-out delay-0 hover:shadow-[0_0_2rem_#8750f7]"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                className="text-[#8750f7]  p-2 h-9 w-9 flex items-center justify-center ml-2  hover:bg-[#8750f7] hover:text-white rounded-full border border-[#8750f7] transition-all duration-300 ease-in-out delay-0 hover:shadow-[0_0_2rem_#8750f7]"
              >
                <i className="fa-solid fa-basketball"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yogesh-kumar-2a0a91219"
                className="text-[#8750f7]  p-2 h-9 w-9 flex items-center justify-center ml-2 hover:bg-[#8750f7] hover:text-white rounded-full border border-[#8750f7] transition-all duration-500 ease-in-out delay-0 hover:shadow-[0_0_2rem_#8750f7]"
              >
                <i className="fa-brands fa-linkedin-in"></i>
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

        <br></br>

        <div className=" sm:col-span-6 col-span-12 sm:mx-4 w-full ">
          <Picture />
        </div>
      </div>
    </div>
  );
}
