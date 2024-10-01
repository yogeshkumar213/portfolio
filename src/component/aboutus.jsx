import Picture from "./picture";
export default function About() {
  return (
    <div>
    <div className="grid sm:gap-12 max-w-screen-full grid-cols-12 mt-32  mb-28 "id="aboutme" >
       <div className="sm:order-1 order-2 sm:col-span-6 w-full col-span-12 ">
        <Picture />
      </div>

      <div className=" sm:order-2 order-1 sm:col-span-5 col-span-12 text-white text-1xl p- mx-2 py-8 w-full ">
        <div className="flex  text-4xl font-bold w-full ">
          <h1 className="domain " >About Me</h1>
        </div>
        <h1 className="text-2xl font-bold">FullStack Developer</h1>
        <br></br>
        <p>
          I'm Yogesh Kumar, a third-year B.Tech Computer Science student at
          Ganga Institute of Technology and Management, Bahadurgarh. Passionate
          about software engineering and web development, I'm always eager to
          learn and explore emerging technologies. With a strong foundation in
          programming and a focus on continuous learning, I'm excited to
          contribute to the tech industry
        </p>
        <div className="py-4">
          <a className="text-[#8750f7] py-3 px-7 rounded-full border border-[#8750f7] text-sm font-bold hover:bg-[#8750f7] hover:text-white transition-all duration-500 ease-in-out delay-0 hover:shadow-[0_0_1rem_#8750f7]"href="https://www.gangainstitute.com">
            Read More
          </a>
        </div>
      </div>
     
    </div>
    </div>
  );
}
