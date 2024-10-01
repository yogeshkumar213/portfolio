import photo from "../assets/yogesh2.photo.jpg";
import "../index.css"

export default function Picture() {
  return (
    <div className="flex justify-center items-center ">
      {/* <div className=""> */}

      <div className="h-[40vh] w-[40vh] md:h-[60vh] md:w-[60vh] rounded-full overflow-hidden card">
        <img className="h-full w-full " src={photo} alt="profile picture" />
        {/* </div> */}
      </div>
    </div>
  );
}
