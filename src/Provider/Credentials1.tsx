import {Creation1} from "./Context.ts";
import toast from "react-hot-toast";
import { useState } from "react";

type Bata = { children: React.ReactNode };

interface Info_Object{
     username:string,
     password:string,
     confirm:string
}

const MainProvider: React.FC<Bata> = ({children}) => {

    const [user,setUser] = useState<Info_Object>({
          username:"",
          password:"",
          confirm:""
     });


     const handleChanges = (type:any,value:any) =>{
           setUser(pro => {
               return{
                    ...pro,
                    [type]:value
               }
           })
     };


    const handleSubmit = async(e: React.FormEvent) => {
       e.preventDefault();
      try{

          const response = await fetch(`http://localhost:3000/register`,{
               method:"POST",
               headers:{
                    'Content-Type':'application/json'
               },
               body:JSON.stringify({
                   username: user.username,
                   passwords:user.password
               })
          });


        if(!response.ok) return toast.error("Register not successfully submitted");

        setUser(pro => ({...pro, username:"",password:"", confirm:""}));
        return toast.success("Register success! ");

      }catch(error){
          console.log(error)
      }
    }

     

  return (
    <Creation1.Provider value={{handleChanges, user, handleSubmit}}>
         {children}
    </Creation1.Provider>
  )
}

export default MainProvider;