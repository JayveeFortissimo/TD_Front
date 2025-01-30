import {Creation2} from './Context.ts';
import { useState } from 'react';


type CredentialProps = { children: React.ReactNode };

interface Info_Objects{
  username:string,
  password:string,
}

const Credentials2: React.FC<CredentialProps> = ({children}) => {


const [credentials, setCredentials] = useState<Info_Objects>({
    username:"",
    password:""
});


const HandleChange = (type:string,value:string) =>{
   setCredentials(pro =>{
    return{
      ...pro,
      [type]:value
    }
   })
};


  return (

    <Creation2.Provider  value={{
      HandleChange,
      credentials
    }}>
        {children}
   </Creation2.Provider>
  )
}

export default Credentials2;