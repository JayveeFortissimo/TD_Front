import { IoCreateOutline } from "react-icons/io5";
import Create from "../Components/Create";
import { Creation3, Creation4 } from "../Provider/Context.ts";
import { useContext } from "react";
import Startup from "../Components/Startup.tsx";
import MainContent from "../Components/MainContent.tsx";

const Profile = () => {

const {create, handleCreate, profile} = useContext(Creation3);
const {fetchedData, setInteraction, interaction} = useContext(Creation4);
   
  return (
    <div className="min-h-[100vh] p-6 flex justify-center items-center">

<div className="min-h-[30rem] w-[50rem]  px-3 py-3 rounded shadow-2xl flex gap-10">  
<aside className="w-[13rem] min-h-[30rem] rounded shadow-2xl p-3">

{/*Header Aside */}
<div className="w-full h-[9rem] flex items-center justify-center">
    <div className="border h-[7rem] w-[8rem] p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
      <p>{profile? profile.userName.charAt(0): "no Data"}</p>
    </div>
</div>

{/*Parent Div of Button*/}
<div className="w-[100%] flex justify-center items-center underline">
      <button className="h-[1.6rem] w-[70%] mb-3 rounded cursor-pointer text-[0.8rem] shadow-2xl flex justify-center items-center gap-2">
        CREATE
        <IoCreateOutline size={20}/>
      </button>
</div>

        {/*Content of Div of aside*/}
        <div  className="h-[16rem] shadow-2xl rounded flex flex-col gap-2">
       {
         !fetchedData?
         (<p>Loading...</p>)
         :
         fetchedData.map((pro:any) => {
          return(
               <div key={pro.id} 
               onClick={() => {
                setInteraction((prox:any) => ({...prox, content_Id:pro.id, cliked: true}))
               }}
               className="w-[100%] h-[2rem] border flex justify-center items-center cursor-pointer">
               <p className="text-[0.7rem] text-center">{pro.title}</p>
               </div>
          )
        })

       }
       </div>
       
<div>
</div>
</aside>

{/** Main Content */}
<div className="w-[100%] p-4 flex justify-center items-center">
{ 

interaction.cliked? <MainContent/> : create? (<Create />) : ( <Startup handleCreate ={ handleCreate }/>)

}
</div>

</div>

    </div>
  )
}

export default Profile;