// import './App.css'
import Navbarr from "./component/navbarr";
import Profile from "./component/profile";
import About from "./component/aboutus";
import Project from "./component/project";
import Skill from "./component/skill";
import Contact from "./component/contactus";
import Ending from "./component/Ending";
// import Profile2 from "./component/profile2";


function App() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 z-[-2] min-h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <Navbarr />
     
      <Profile />
      <hr></hr>
      <About />
      <hr></hr>
      <Project />
      <hr></hr>
      <Skill />
      <hr></hr>
      <Contact />
      
      <hr></hr>
     
     
      
      <hr></hr>
      <Ending/>

     
    </div>
  );
}

export default App;
