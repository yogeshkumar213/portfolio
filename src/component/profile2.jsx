import Character from "./character";
export default function Profile2() {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="text-white text-[20.8px] font-bold ">
          Hello,I am Yogesh
        </div>
        {/* reserve space for dynamic content when we apply height */}
        <h1 className=" ">
          FullStack Web Developer + <Character />
        </h1>
        {/* </div> */}
        <br></br>
        <p className="">
          Hi, I'm a Full Stack Developer with a strong foundation in both
          front-end and back-end technologies. I specialize in creating web
          applications that offer seamless, dynamic user experiences, combined
          with efficient and scalable back-end solutions.
        </p>
      </div>
      <div></div>
      
    </div>
  );
}
