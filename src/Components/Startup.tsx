
import { FiBookOpen } from "react-icons/fi";

interface interaction{
    handleCreate: () => void
}

const Startup: React.FC<interaction> = ({handleCreate}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
    <FiBookOpen size={80}/>
    <p className="text-2xl text-center">No Project Selected</p>
  
    <p className="text-[0.8rem]">Select a project or create a new one</p>
  
    <button 
    onClick={handleCreate}
    className="h-[2rem] px-5 border text-[0.9rem] bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold cursor-pointer">Create New Project</button>
    </div>
  )
}

export default Startup