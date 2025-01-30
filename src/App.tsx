import CredentialsProvider from './Provider/Register';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './Pages/Root';
import Creadentials from './Pages/Creadentials';

function App() {

 const createRoutes = createBrowserRouter([

{
  path:'/',
  element: <Root />,
  children:[
    {
      index:true, element: <Creadentials />
    },

  ]
}
  
 ]);


  return(
    <>

    <CredentialsProvider>
    <RouterProvider router={createRoutes} />
    </CredentialsProvider>
   
    </>
  )
}

export default App;
