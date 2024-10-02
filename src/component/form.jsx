// import { application, json } from "express";
import "../css/index.css";
import { useState } from "react";
export default function Form() {
  let [formValue, setformValue] = useState({
    firstName: "",
    lastName: "",
    emailAdd: "",
    phoneNo: "",
    message: "",
  });
 

  let inputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setformValue((currValue) => {
      currValue[name] = value;
      
      return { ...formValue };
    });
  };

  let handleSubmit = async (event) => {
    event.preventDefault()
    if(!formValue.emailAdd || !formValue.firstName ){
      alert("Please fill out all required fields")
      return
    }
    try{
    // console.log(formValue.firstName)
   
    setformValue({
      firstName: "",
      lastName: "",
      emailAdd: "",
      phoneNo: "",
      message: "",
    })
   alert("Email sent to Yogesh")
    const formData=formValue

    const response= await fetch("https://portfolio-vovo.onrender.com/formdata",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },body:JSON.stringify(formData)// means data send to backend in json object 
      
    })
   
    const result=await response.json();//handle backend response
    console.log(result)
  }catch(err){
    console.error("error sending email",err)
    alert("Failed to send email. Please try again.")
  }
   
  
  };

  return (
    <div>
      <form>
        <div className="flex flex-wrap gap-4 w-full">
          <div className="w-full flex gap-4">
            <input
              value={formValue.firstName}
              onChange={inputChange}
              placeholder="First name"
              name="firstName"
              required
        
              className="bg-black p-1.5 border border-slate-800 form-border rounded-lg w-full text-white" 
            />
            <input
              onChange={inputChange}
              value={formValue.lastName}
              placeholder="Last name"
              name="lastName"
              className="bg-black p-1.5 border border-slate-800 form-border rounded-lg w-full text-white"
            />
          </div>
          <div className="w-full flex gap-4">
            <input
              onChange={inputChange}
              value={formValue.emailAdd}
              placeholder="Email address"
              name="emailAdd"
              className="bg-black p-1.5 border border-slate-800 form-border rounded-lg w-full text-white"
            />
            <input
              onChange={inputChange}
              value={formValue.phoneNo}
              placeholder="Phone number"
              name="phoneNo"
              className="bg-black p-1.5 border border-slate-800 form-border rounded-lg w-full text-white"
            />
          </div>
          <textarea
            onChange={inputChange}
            value={formValue.message}
            placeholder="Message"
            name="message"
            rows="6"
            cols="20"
            className="bg-black p-1.5 border border-slate-800 form-border rounded-lg w-full text-white"
          />
          <button
            className="text-[#8750f7] py-4 px-8 rounded-full border border-[#8750f7] text-sm font-bold hover:bg-[#8750f7] hover:text-white transition-all duration-500 ease-in-out delay-0 hover:shadow-[0_0_1rem_#8750f7]"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
