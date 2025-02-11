import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Creation3 } from "./Context.ts";

type NodeChildren = {children: React.ReactNode};

interface userData{
   id: number,
   userName:string,
   isAdmin: boolean
}


const socket  = io("http://localhost:3000");


const ProfileProvide: React.FC<NodeChildren> = ({children}) => {

  const [profile, setProfile] = useState<userData | null>(null);
  const [create, setCreate] = useState<boolean>(false);
  const handleCreate = () => setCreate(pro => !pro);


  useEffect(() => {

    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on('user', (newMessage:any) => {
      setProfile(newMessage)
    });

    socket.on('Data', (newMessage:any) => {
    
      console.log("Received WebSocket event SSS:", newMessage);
    });

    return () => {
      socket.off('user');
      socket.off('Data');
    };
  }, []);


  
  const userProfile = async() =>{
    try{
        const response = await fetch(`http://localhost:3000/userProfile/`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials:'include'
        });

        const data = await response.json();

         if(data === "unauthorize") return console.log("Login First");
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