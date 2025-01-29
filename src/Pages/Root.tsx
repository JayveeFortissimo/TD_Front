import {Outlet} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>

    <Outlet />
    </>
  )
}

export default Root