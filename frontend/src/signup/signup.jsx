import React,{ useState,useEffect} from "react";
import Navbar from "../Components/navbar";
import axios from "axios";
import Swal from "sweetalert2";
import SendMail from "../api/api"
import { Link } from "react-router-dom";
function signup() {

  useEffect(()=>{
    
    document.title= "Signup || SHIPSHIP";
})
const [btnaction, setbtnaction] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobilenumber: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(formData)
    
    e.preventDefault();
    setbtnaction(true);
    axios
      .post("https://shipshop-e-commerce-backend.onrender.com/user/new", formData)
      .then(async(response) => {
        setbtnaction(false);
        if(!response.data.message){
        Swal.fire({
          title: "Thank You ",
          text: " Your are Sucessfully Registered !",
          icon: "success",
        });
        setbtnaction(false);
      }else{
          Swal.fire({
            title: "sorrry ",
            text: " user is already have an account please login",
            icon: "error",
          });

        };
        setFormData({
          name: "",
          mobilenumber: "",
          email: "",
          password: ""
        });
        


      }).catch((error) => {
        console.error("There was an error saving the data!", error.response.data);
      });

        // console.log(response)
        // const Usermail = formData.email;
      // const agentRespose = `Hello ${formData.name}. Your Registration is completed Sucessfully. please login to Register your Queary. Thank You . `;
    //   const agentRespose =  `
    //   <!DOCTYPE html>
    //   <html lang="en">
    //   <head>
    //       <meta charset="UTF-8">
    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //       <title>Registration Confirmation</title>
    //       <style>
    //           body {
    //               font-family: Arial, sans-serif;
    //               background-color: #f4f4f4;
    //               margin: 0;
    //               padding: 0;
    //               color: #333333;
    //           }
    //           .container {
    //               max-width: 600px;
    //               margin: 50px auto;
    //               background-color: #ffffff;
    //               padding: 20px;
    //               border-radius: 10px;
    //               box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    //           }
    //           .header {
    //               text-align: center;
    //               padding: 10px 0;
    //               border-bottom: 1px solid #dddddd;
    //           }
    //           .header h1 {
    //               margin: 0;
    //               font-size: 24px;
    //               color: #333333;
    //           }
    //           .content {
    //               padding: 20px 0;
    //               text-align: left;
    //           }
    //           .content h2 {
    //               margin: 0;
    //               font-size: 20px;
    //               color: #333333;
    //           }
    //           .content p {
    //               margin: 20px 0;
    //               font-size: 16px;
    //               line-height: 1.5;
    //           }
    //           .button {
    //               display: inline-block;
    //               background-color: #007bff;
    //               color: #ffffff;
    //               text-decoration: none;
    //               padding: 10px 20px;
    //               border-radius: 5px;
    //               margin-top: 20px;
    //           }
    //           .footer {
    //               text-align: center;
    //               padding: 10px 0;
    //               border-top: 1px solid #dddddd;
    //               margin-top: 20px;
    //               font-size: 12px;
    //               color: #777777;
    //           }
    //       </style>
    //   </head>
    //   <body>
    //       <div class="container">
    //           <div class="header">
    //               <h1>Welcome to SHIPSHIP!</h1>
    //           </div>
    //           <div class="content">
    //               <h2>Registration Confirmation</h2>
    //               <p>Hi ${formData.name},</p>
    //               <p>Thank you for registering with SHIPSHIP. Your account has been successfully created.
    //               <br> please Login to register your Queary.<br> Thank You .</p>
    //              <a href="http://localhost:5173/login" class="button">Login</a>
    //           </div>
    //           <div class="footer">
    //               <p>© 2024 Q M S. All rights reserved.</p>
    //               <p>If you have any questions, feel free to <a href="mailto:apnacollegework@gmail.com">contact us</a>.</p>
    //           </div>
    //       </div>
    //   </body>
    //   </html>
    //   `;
    //   const ttitle =`Registration completed `;
    // await SendMail(ttitle,Usermail,agentRespose);
    //   // console.log(Usermail);
    //   // console.log(agentRespose);
    //   setbtnaction(false);
    //     if(!response.data.message){
    //     Swal.fire({
    //       title: "Thank You ",
    //       text: " Your are Sucessfully Registered !",
    //       icon: "success",
    //     });}else{
    //       Swal.fire({
    //         title: "sorrry ",
    //         text: " user is already have an account please login",
    //         icon: "error",
    //       });

    //     };
    //     setFormData({
    //       name: "",
    //       username: "",
    //       mobilenumber: "",
    //       email: "",
    //       password: ""
    //     });

        
    //   })
      
      
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center ">
        <div className="h-[80vh] w-[50vw]  items-center flex flex-col  border-b-orange-500">
          <h3 className=" font-bold text-3xl mt-5 text-white">
            Registration Form
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col   mt-3  text-black">
              <input
                className=" w-[30vw] rounded-md py-2  m-3 border-2 border-black"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
              />
              
              <input
                className=" w-[30vw] rounded-md py-2  m-3 border-2 border-black"
                type="text"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={handleChange}
                placeholder="Enter Your Mobile Number"
              />
              <input
                className=" w-[30vw] rounded-md py-2  m-3 border-2 border-black"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />
              <input
                className=" w-[30vw] rounded-md py-2  m-3 border-2 border-black"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
              />

              <button disabled={btnaction}
                className=" border-2  h-[60px] p-1 m-3 rounded-md bg-slate-400 hover:bg-orange-500 border-black text-center"
                type="submit"
              >
                 {btnaction?"Please Wait":"Signup"}
                
              </button>
              <Link className="text-white  text-right" to="/Login">SignIn Now</Link>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default signup;
