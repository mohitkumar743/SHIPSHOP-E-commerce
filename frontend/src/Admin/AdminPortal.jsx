import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link ,NavLink} from "react-router-dom";
import Swal from "sweetalert2";
import AllOrder from "./allorders"
import AllProduct from "./allproducts"
// import AdminQuearyCard from "../Components/AdminQuearyCard";


function AdminPortal() {
  useEffect(()=>{
    
    document.title= "Admin Portal || SHIPSHIP";
})
  const navigate = useNavigate();
  const [Product, setProduct] = useState(false);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("AdminAuthtoken");
    Swal.fire({
      position: "center",
      icon: "success",
      text: "You have been logged out successfully.",
      showConfirmButton: true,
      timer: 1500,
    }).then(() => {
      navigate("/"); // Redirect to home page
    });
  };
  
  const handleproduct = () => {
    setProduct(true)
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   text: "product",
    //   showConfirmButton: true,
    //   timer: 1500,}
    // )
  };
  const handleorders = () => {
    setProduct(false);
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   text: "orders",
    //   showConfirmButton: true,
    //   timer: 1500,}
    // )
  };


  return (
    <>
      <div>
        <div className="text-center text-white h-[10vh] flex flex-row items-center justify-around">
          <div className="font-extrabold">
            <Link to="/">SHIPSHOP</Link>
          </div>
          <div className="flex items-center">

            <button
              onClick={handleLogout}
              className="btn text-white btn-outline m-3 w-[100px]"
            >
              Logout
            </button>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="/user.png" alt="User Avatar" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-center">
          <span className="navbar-user text-3xl">Welcome To Admin Panel</span>
        </div>
      </div>
    <div>
    <nav className="flex flex-ro justify-evenly bg-gray-400 h-13 items-center mt-5 text-white">
      
          
           <div className="cursor-pointer" onClick={handleproduct}>Total Products</div> 
          
        
         
          <div className="cursor-pointer" onClick={handleorders}> Orders</div> 
          
        
    </nav>

    </div>

    {/* //product or ordershown below */}
    <div>
      
      
      {Product ? (
        <div className="text-white">
          <AllProduct/>
        </div>
      ) : (
        <div className="text-white">
         <AllOrder/>
        </div>
      )}
    </div>
   
      
    </>
  );
}

export default AdminPortal;
