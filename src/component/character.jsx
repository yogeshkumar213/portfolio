import { useState, useEffect } from "react";
import "../css/index.css"
export default function Character() {
  const titles = ["Problem Solver", "Engineering Student", "Tech Enthusiast","Java + DSA"];
  const [currTitleIndex, setcurrTitleIndex] = useState(0);
  const [currTitle, setcurrTitle] = useState("");
  const [characterIndex, setcharacterIndex] = useState(0);

  // this hooks only give the index of current title
  useEffect(() => {
    const interval = setInterval(() => {
      setcurrTitleIndex((preValue) => {
        return (preValue + 1) % titles.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  // console.log(currTitleIndex)

  //now with this hook we extract value one by one and start print the character one to one

  useEffect(() => {
    setcurrTitle(titles[currTitleIndex]);
    setcharacterIndex(0);
  }, [titles[currTitleIndex]]);

  useEffect(() => {
    if (characterIndex < currTitle.length) {
      const timeout = setTimeout(() => {
        setcharacterIndex(characterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  },[characterIndex,currTitle.length]);

  return (
    <div>
      <p className="domain" >
        {currTitle
          .slice(0, characterIndex)
          .split("")
          .map((e, idx) => {
            return <span key={idx}>{e}</span>;
          })}
      </p>
    </div>
  );
}
