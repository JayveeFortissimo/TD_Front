import { LuClipboardPen } from "react-icons/lu";
import Register from "./Register";
import Image from '../assets/bg.jpeg';
import { useState, useContext } from "react";
import { Creation2 } from "../Provider/Context.ts";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Creden: React.FC = () => {

  const navigate = useNavigate();
  const [isRegister, setRegister] = useState<boolean>(false);
  const [isClicked, setClicked] = useState<boolean>(false);
     
  const handleChange = () => setRegister(pro => !pro);
  const handleClick = () =>  setClicked(pro => !pro);

  const  {HandleChange, credentials} = useContext(Creation2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:3000/Login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
  
      if (data.message === "Credentials doesn't exist!") return toast.error("Credentials doesn't exist!");
      if (data.message === "Password is not correct!") return toast.error("Password is not correct!");
      
  
      toast.success("Hi, welcome to the TODO APP!");
      navigate('/Profile');
    } catch (error) {
      console.log("Server Problem", error);
    }
  }
  
  

  return (
    <div className="min-h-[100vh] px-6 flex justify-center items-center relative bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${Image})` }}>

  {
   !isRegister &&
   (
    <div className="min-h-[auto] w-[25rem]  rounded p-4 shadow-2xl flex flex-col  items-center gap-10 backdrop-blur-md z-20">
   
    <div className="flex gap-3 items-center w-[100%]">
       <LuClipboardPen  size={30} />
       <h1>TODO.IOS</h1>
    </div>

          <form 
          onSubmit={e => handleSubmit(e)}
          className="w-[100%] flex flex-col gap-4">
               <h1>Login</h1>
            <div className="w-[100%] flex flex-col ">
              <h1 className="text-[0.8rem] text-white">Username</h1>
              <input type="text"
              onChange={e => HandleChange("username", e.target.value)}
              value={credentials.username}
               className="focus:outline-hidden border-b border-black  h-[1.6rem] p-2 flex-auto"/>
            </div>

            <div className="w-[100%] flex flex-col ">
              <h1 className="text-[0.8rem] text-white">Password</h1>
              <input type={`${isClicked? "text": "password"}`} 
               onChange={e => HandleChange("password", e.target.value)}
               value={credentials.password}
              className="focus:outline-hidden border-b border-black  h-[1.6rem] p-2 flex-auto" />
            </div>

            <div className="w-[100%] flex  gap-1">
              <input type="checkbox" 
                onClick={handleClick}
              className="cursor-pointer"
              />
              <h1 className="text-[0.8rem] ">Show password? </h1>                   
            </div>

            <div className="w-[100%] flex justify-between items-center text-[0.8rem] ">
              <button className="w-[6rem] h-[2rem] cursor-pointer text-white bg-[#363636] ">SUBMIT</button>
              <p 
              
              onClick={handleChange}
              className=" underline hover:text-[#709ef3] cursor-pointer text-white"
              >
                Don't Have Account Already? </p>
            </div>

         </form>

</div>

   )
  }

  { isRegister && <Register handleChange={handleChange} handleClick={handleClick } isClicked={isClicked}/> }

   </div>
  )
}

export default Creden