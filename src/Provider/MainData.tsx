import { useState, useEffect } from "react";
import { Creation4 } from "./Context.ts";
import toast from "react-hot-toast";

type Nodes = {children: React.ReactNode};

interface Datas {
      Title:string,
      Description: string,
      Date: string,
}

type Interaction = {
     content_Id: number | null,
     cliked: boolean
}

const MainData: React.FC<Nodes> = ({children}) => {

const [fetchedData, setFetched] = useState<[]>([]);

const [interaction, setInteraction] = useState<Interaction>({
    content_Id: null,
     cliked: false
});


 const [data, setAllData] = useState<Datas>({
     Title:"",
     Description:"",
     Date:"",
     });

  const handleChange = (value: string, type: string) =>{
      setAllData(pro =>{
         return{
          ...pro,
           [type]:value
         }
      })
  };


const handleCreate = async(e: React.FormEvent) => {
     e.preventDefault();

  const formattedDate = {...data, Date: new Date(data.Date)};

try{

  const response = await fetch(`http://localhost:3000/createTodo`,{
    method:"POST",
    body:JSON.stringify(formattedDate),
    headers:{
      'Content-Type': 'application/json'
    },
    credentials: "include"
  });

  if(!response.ok) return toast.error("Cannot post🥹");

  setAllData(pro => ({...pro,  Title:"", Description:"",Date:""}));

  return toast.success("Success!👌");

}catch(error){
  console.log(error);
}
}


useEffect(() =>{
  const getData = async() =>{
    try{

      const response = await fetch(`http://localhost:3000/createdTodos`,{
        method:'GET',
        headers:{
          'Content-Type': 'application/json'
        },
        credentials:'include'
      });

      const data = await response.json();
      setFetched(data.data);
      
    }catch(error) { console.log(error)};
  } 

  getData();
},[]);



  return(
    <Creation4.Provider 
    value= {
    { data, 
    handleChange,
     handleCreate,
     setInteraction,
     interaction,
     fetchedData
   }}>
      {children}
    </Creation4.Provider>

  )
}

export default MainData;