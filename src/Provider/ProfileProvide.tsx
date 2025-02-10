import { useState, useEffect } from "react";

import { Creation3 } from "./Context.ts";

type NodeChildren = {children: React.ReactNode};

interface userData{
   id: number,
   userName:string,
   isAdmin: boolean
}

const ProfileProvide: React.FC<NodeChildren> = ({children}) => {

    const [profile, setProfile] = useState<userData | null>(null);
  const [create, setCreate] = useState<boolean>(false);
 
  const handleCreate = () => setCreate(pro => !pro);


  
  const userProfile = async() =>{
    try{
        const response = await fetch(`http://localhost:3000/userProfile`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials:'include'
        });

        const data = await response.json();

         if(data === "unauthorize") return console.log("Login First")
         setProfile(data.Data[0]);

    }catch(error) {
        console.log(error);
    }
};

  useEffect(() =>{

   userProfile();

   },[]);

  return (

    <Creation3.Provider value={{create, handleCreate, profile}}>
    {children}
    </Creation3.Provider>
  )
}

export default ProfileProvide;