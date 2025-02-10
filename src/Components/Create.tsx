import { useContext } from "react";
import {  Creation4 } from "../Provider/Context.ts";

const Create: React.FC  = () => {

 const { data , handleChange, handleCreate} = useContext(Creation4);

  return (
    <form 
    onSubmit={e => handleCreate(e)}
    className="w-[100%] ">
   
   <div className="flex flex-col gap-6">

   <div>
    <h1>Title</h1>
    <input type="text"
    onChange={e => handleChange(e.target.value, "Title")}
     value={data.Title}
    className="w-[100%] h-[2rem] mt-3 px-2 focus:outline-hidden border-b border-black "/>
   </div>

   <div>
    <h1>Description</h1>
    <input type="text" 
   value={data.Description}
     onChange={e => handleChange(e.target.value, "Description")}
    className="w-[100%] h-[2rem] mt-3 px-2 focus:outline-hidden border-b border-black "/>
   </div>

    <div>
        <h1>Date</h1>
        <input type="date"  
       value={data.Date}
         onChange={e => handleChange(e.target.value, "Date")}
        className="mt-3 w-[100%] h-[2rem] px-2 focus:outline-hidden border-b border-black "/>
    </div>
   </div>

    <button type="submit" className="h-[1.5rem] mt-10 shadow-2xl px-2 w-[7rem] text-[0.9rem] bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold cursor-pointer">Submit</button>

    
    </form>
  )
}

export default Create