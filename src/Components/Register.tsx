import { LuClipboardPen } from "react-icons/lu";
import { useContext } from "react";
import {Creation1} from '../Provider/Context.ts';


type RegisterProps = {
  handleChange: () => void;
  handleClick : () => void;
  isClicked:boolean
}


const Register: React.FC<RegisterProps> = ({handleChange, handleClick, isClicked }) => {

  const {handleChanges, user, handleSubmit} = useContext(Creation1);

   
  return (
  <div className="min-h-[100vh] px-6 flex justify-center items-center ">
  
      <div className="min-h-[auto] w-[25rem]  rounded p-4 shadow-2xl flex flex-col  items-center gap-10 backdrop-blur-md">
  
          <div className="flex gap-3 items-center w-[100%]">
             <LuClipboardPen  size={30} />
             <h1>TODO.IOS</h1>
          </div>
  
                <form
           onSubmit={handleSubmit}
                className="w-[100%] flex flex-col gap-4">
                <h1>Register</h1>
                  <div className="w-[100%] flex flex-col ">
                    <h1 className="text-[0.8rem] text-white">Username</h1>
                    <input type="text"
                  onChange={e => handleChanges("username",e.target.value)}
                  value={user.username}
                     className="focus:outline-hidden border-b border-black  h-[1.6rem] p-2 flex-auto"
                     />
                  </div>
  
                  <div className="w-[100%] flex flex-col ">
                    <h1 className="text-[0.8rem] text-white">Password</h1>
                    <input type={`${isClicked? "text": "password"}`}  
                    value={user.password}
                    onChange={e => handleChanges("password",e.target.value)}
                    className="focus:outline-hidden border-b border-black  h-[1.6rem] p-2 flex-auto" />
                  </div>
                  
                  <div className="w-[100%] flex flex-col ">
                    <h1 className="text-[0.8rem] text-white">Confirm Password</h1>
                    <input type={`${isClicked? "text": "password"}`}  
                      onChange={e => handleChanges("confirm",e.target.value)}
                    className="focus:outline-hidden border-b border-black  h-[1.6rem] p-2 flex-auto"/>
                  </div>
  
  
                  <div className="w-[100%] flex  gap-1">
                    <input type="checkbox" 
                    onClick={handleClick}
                    value={user.confirm}
                    className="cursor-pointer"/>
                    <h1 className="text-[0.8rem] ">Show password? </h1>                   
                  </div>
  
                  <div className="w-[100%] flex justify-between items-center text-[0.8rem] ">
                    <button type="submit" className="w-[6rem] h-[2rem] cursor-pointer text-white bg-[#363636]">SUBMIT</button>
                   
                    <p 
                   onClick={handleChange}
                    className=" underline hover:text-[#709ef3] cursor-pointer text-white">Have Account Already? </p>
                  </div>
  
               </form>
  
      </div>
      
     </div>
  )
}

export default Register