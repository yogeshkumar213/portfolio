import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState("left");
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); 
  // const [isNavVisible, setisNavVisible] = React.useState(false);
  console.log("small screen", isSmallScreen);
  // const toggleHandling = () => {
  //   setisNavVisible((preValue) => !preValue);
  // };

  const handleAlignment = (
    event, // Removed type annotations
    newAlignment
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div>
      {isSmallScreen && (
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
        >
          <ToggleButton
          
            value="right"
            aria-label="right aligned"
            // onClick={toggleHandling}
            className="fixed "
          >
            <FormatAlignRightIcon className="text-white mx-2 size-5" />
          </ToggleButton>
        </ToggleButtonGroup>
      )}
      {/* {isNavVisible && (
        <div className="flex  ">
          <a
            href="/"
            className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7] underline-offset-8 text-4 line"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7] underline-offset-8 text-4 line"
          >
            About me
          </a>
          <a
            href="/"
            className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7] underline-offset-8 text-4 line"
          >
            My Projects
          </a>
          <a
            href="/"
            className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7] underline-offset-8 text-4 line"
          >
            Skill
          </a>
          <a
            href="/"
            className="hover:text-gray-300 hover:underline hover:decoration-[#8750f7]  underline-offset-8 text-4 line"
          >
            Contact
          </a>
        </div>
      )} */}
    </div>
  );
}
