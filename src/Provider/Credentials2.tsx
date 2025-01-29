
import {Creation2} from '../Provider/Context.ts';
                          //!For Children
type CredentialProps = { children: React.ReactNode };


interface Info_Objects{
  username:string,
  password:string,
}

const Credentials2: React.FC<CredentialProps> = ({children}) => {


  return (

    <Creation2.Provider  value={{name:"asdasds"}}>
        {children}
   </Creation2.Provider>
  )
}

export default Credentials2;