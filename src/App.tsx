import CredentialsProvider from './Provider/Register';
import CredentialsProvider2 from './Provider/Login';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

//!Pages
import Root from './Pages/Root';
import Creadentials from './Pages/Creadentials';
import UserProfile from './Pages/Profile';

function App() {

 const createRoutes = createBrowserRouter([

{
  path:'/',
  element: <Root />,
  children:[
    { 
      index:true, 
      element: <Creadentials />,
    },
    {
      path:'Profile',
      element:<UserProfile />
    }

  ]
}
  
 ]);


  return(
    <>

  <CredentialsProvider2>
   <CredentialsProvider>
      <RouterProvider router={createRoutes} />
    </CredentialsProvider>
  </CredentialsProvider2>
    </>
  )
}

export default App;
