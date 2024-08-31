import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Components/navbar";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from 'react-router-dom';


function Login() {

  
   
  useEffect(()=>{
    // console.log(process.env)
    document.title= "Login || SHIPSHIP";
   
})
  const navigate = useNavigate();

  const token = localStorage.getItem('Authtoken');
  useEffect(() => {
    if (token) {
       
        navigate('/user/userPortal');
    }
  }, [navigate]);
 
  const [signinData, setsigninData] = useState({
    mobilenumber: "",
    password: "",

  });

  const handleChange = (e) => {
    setsigninData({
      ...signinData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/user/login", signinData)
      .then((response) => {
        console.log(response.data.token);
        if (response.data.token) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your are Login Sucessfully !",
            showConfirmButton: false,
            timer: 1500
          });
          localStorage.setItem('Authtoken', response.data.token);
          
          
          navigate('/user/userPortal'); 
          
          
        } else {
         
          Swal.fire({
            title: "sorry ",
            text: "your mobile number or password is wrong please try with correct details",
            icon: "error",
          });

          
          
        }
        setsigninData({
          mobilenumber: "",
          password: "",
        });
      })
      .catch((error) => {
       
        // console.error("There was an error saving the data!", error.response.data.message);

        Swal.fire({
          title: "sorry ",
          text: error.response.data.message,
          icon: "error",
        });
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center ">
        <div className="h-[80vh] w-[50vw]  items-center flex flex-col  border-b-orange-500">
          <h3 className=" font-bold text-3xl mt-5 text-white">Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col   mt-3  text-black">
              <input
                className=" w-[30vw] rounded-md py-2  m-3 border-2 border-black"
                type="text"
                name="mobilenumber"
                value={signinData.mobilenumber}
                onChange={handleChange}
                placeholder="Enter Your Mobile Number"
              />

              <input
                className=" w-[30vw] rounded-md py-2  m-3 border-2 border-black"
                type="password"
                name="password"
                value={signinData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
              />

              <button
                className=" border-2  h-[60px] p-1 m-3 rounded-md bg-slate-400 hover:bg-orange-500 border-black text-center"
                type="submit"
              >
                Login
              </button>
          <Link className="text-white  text-right" to="/signup">Register Now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
