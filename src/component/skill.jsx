import frontendImg from "../assets/frontend dev.avif";
import backendImg from "../assets/backend dev.jpg";
import databaseImg from "../assets/database img.jpg";
import "../css/index.css";
export default function Skill() {
  return (
    <div id="skill">
      <div className="flex flex-wrap text-5xl font-bold justify-center items-center mt-32 mb-8">
        {/* <h1 className="text-white">My&nbsp;</h1> */}
        <h1 className="domain"> My Skills</h1>
      </div>
      <p className="text-white grid md:w-2/4 w-full text-center mx-auto text-1xl ">
        With comprehensive skills in frontend and backend development, I build
        responsive, high-performance web applications. I’m dedicated to
        professional growth, staying current with the latest technology trends
      </p>
      <div className=" grid text-white grid-max-w-full sm:grid-cols-12  justify-around justify-evenly sm:mx-24  text-center gap-12 mb-52 mt-12">
        <div className=" sm:col-span-4 col-span-9 text-center border border-sky-500 rounded-3xl px-4 px-8 py-4 items-center justify-center custom-border mr-7 ml-1 sm:mx-4 card">
          <img
            src={frontendImg}
            alt="frontend developer"
            className="rounded-3xl "
          ></img>
          <h1 className="mt-4">Frontend Technology</h1>
          <div className="grid grid-col-6">
            <div className="col-span-4">
              <div className="flex text-white justify-center gap-4 flex-wrap px-4 py-4">
                <p>Html</p>
                <p>Css</p>
                <p>JavaScript</p>
                <p>Bootstrap</p>
                <p>Tailwind</p>
                <p>React.js</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 col-span-9 justify-center text-center border border-sky-500 rounded-3xl px-4 sm:px-8 py-4 mr-7 ml-1 sm:mx-4 items-center justify-end custom-border card ">
          <img
            src={backendImg}
            alt="backend developer"
            className="rounded-3xl "
          ></img>

          <h1 className="mt-4">Backend Technology</h1>
          <div className="grid grid-col-6">
            <div className="col-span-4">
              <div className="flex text-white justify-center gap-4 flex-wrap px-4 py-4">
                <p>Node.js</p>
                <p>Express</p>
                <br></br>
                <p>RESTful APIs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 col-span-9 justify-center text-center card border border-sky-500 rounded-3xl sm:px-8 px-4 py-4 mr-7 ml-1 sm:mx-4 items-center justify-end custom-border">
          <img
            src={databaseImg}
            alt=" database manage"
            className="rounded-3xl"
          ></img>
          <h1 className="mt-4">Database Technology</h1>
          <div className="grid grid-col-6">
            <div className="col-span-4">
              <div className="flex text-white justify-center gap-4 flex-wrap px-4 py-4">
                <p>MySQL</p>
                <p>MongoDB</p>
                <br></br>
                <p>Database Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
