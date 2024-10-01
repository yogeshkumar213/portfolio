import Form from "./form";

export default function Contact() {
  return (
    // <div className="mt-36 mb-28 bg-black sm:mx-24 sm:px-24 sm:py-20 rounded-2xl w-full">
    //   <div className="grid grid-cols-12 max-width-screen-full">
    <div className="  mt-36 mb-28 bg-black sm:px-24 sm:py-20 rounded-2xl w-/4 items-center mx-4" id="contact">
      <div className="grid grid-cols-12 w-full">
        <div className="sm:col-span-6 col-span-12 bg-[#140c1c] px-8 py-8 rounded-2xl ">
          <h1 className="domain text-2xl font-bold my-2 ">
            Lets work together!
          </h1>
          <p className="text-white mb-4 ">
            I would love to hear from you! Whether you have a project in mind, a
            question, or simply want to connect, feel free to reach out.
          </p>
          <Form />
        </div>
        <div className="col-span-6 sm:mx-32 my-24 ">
          <div className="flex gap-6 my-8">
            <div>
              <a
                href="#"
                className="text-white p-6 ml-14 h-9 w-9 flex items-center justify-center rounded-full border border-[#8750f7] bg-[#8750f7]"
              >
                <i className="fa-solid fa-phone-volume"></i>
              </a>
            </div>
            <div className="text-white">
              <span>Phone</span>
              <br></br>
              <span className="hover:text-[#8750f7] transition-all duration-500 ease-in-out delay-0 font-normal">
                +91 8685083980
              </span>
            </div>
          </div>

          <div className="flex gap-6 my-8">
            <div>
              <a
                href="#"
                className="text-white p-6 ml-14 h-9 w-9 flex items-center justify-center  rounded-full border border-[#8750f7] bg-[#8750f7]"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <div className="text-white">
              <span>Email</span>
              <br></br>
              <span className="hover:text-[#8750f7] transition-all duration-500 ease-in-out delay-0 font-normal">
                x10yogesh@gmail.com
              </span>
            </div>
          </div>
          <div className="flex gap-6 my-8">
            <div>
              <a
                href="#"
                className="text-white p-6 ml-14 h-9 w-9 flex items-center justify-center  rounded-full border border-[#8750f7] bg-[#8750f7]"
              >
                <i className="fa-solid fa-location-dot"></i>
              </a>
            </div>
            <div className="text-white">
              <span>Address</span>
              <br></br>
              <span className="hover:text-[#8750f7] transition-all duration-500 ease-in-out delay-0 font-normal">
                Satroad khass,Hisar<br></br>Haryana(India)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
