import { useContext } from "react";
import { Creation4 } from "../Provider/Context";


const MainContent = () => {


  const { fetchedData, interaction } = useContext(Creation4);
    
  return (
    <div className="w-[100%] h-[100%]">



   
   <div className="flex flex-col gap-6">
   {
         !fetchedData?
         (<p>Loading...</p>)
         :
         fetchedData.map((pro:any) => {
          return(
               <form key={pro.id} 
               className="w-[100%] h-[2rem] border flex justify-center items-center cursor-pointer">

            {pro.id === interaction.content_Id? (
                <>
                  <h1>Title: {pro.title}</h1>
                  <p>Date: {pro.date}</p>
                  <p>Description: {pro.description}</p>
            
                </>
              ): null}
               </form>
          )
        })

       }
 
  
    </div>


    </div>
  )
}

export default MainContent;