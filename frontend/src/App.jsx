import React from 'react';
import Home from './Components/Home';
import Login from './login/Login';
import Signup from './signup/signup';
import UserPortal from './login/userPortal';
import Shop from './screen/shop'
import AdminLogin from './Admin/adminLogin'
import AdminPortal from './Admin/AdminPortal';
import Address from './Components/address'
import Payment from './Components/payment'
import MyOrders from './login/myorders'
import UserShop from './login/userPortal'
import AllProduct from './Admin/allproducts'
import AllOrders from './Admin/allorders'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/usershop",
    element: <UserShop/>,
  },
  {
    path: "/address",
    element: <Address/>,
  },
  {
    path: "/payment",
    element: <Payment/>,
  },
  {
    path: "/myorders",
    element: <MyOrders/>,
  },
  {
    path: "/admin/products",
    element: <AllProduct/>,
  },
  {
    path: "/admin/orders",
    element: <AllOrders/>,
  },


  
  {
    path: "/admin",
    element: <AdminLogin/>,
  },
  {
    path: "/admin/adminPortal",
    element: <AdminPortal/>,
  },
  
  {
    path: "/user/userPortal",
    element: <UserPortal/>,
  },
 
]);



function App() {
  
  
  return (
   
    <div className=' h-screen'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <RouterProvider router={router} />
      
    </div>
   
  );
}

export default App
