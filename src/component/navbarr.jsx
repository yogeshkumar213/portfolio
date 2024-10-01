import ToggleButtons from "./practice.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from 'react-scroll';  
import "../css/index.css";

export default function Navbarr() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)"); 
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <nav className="bg-black text-white flex w-full justify-between p-6 fixed top-0  ">
        <div className="text-4xl hover:text-[#8750f7] lg:pl-28">yk</div>

        {isLargeScreen && (
          <div className="flex gap-4 mr-16 ">
           
            <a
              href="#home"
              className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7] underline-offset-8 text-4 line"
            >
              Home
            </a>
            <a
              href="#aboutme"
              className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7] underline-offset-8 text-4 line"
            >
              About me
            </a>
            <a
              href="#project"
              className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7] underline-offset-8 text-4 line"
            >
              My Projects
            </a>
            <a
              href="#skill"
              className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7] underline-offset-8 text-4 line"
            >
              Skill
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7]  underline-offset-8 text-4 line"
            >
              Contact
            </a>
           
          </div>
        )}
         {isSmallScreen&&
          <ToggleButtons />}
      </nav>
    </>
  );
}
