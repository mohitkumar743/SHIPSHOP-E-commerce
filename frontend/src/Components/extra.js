// // {/* <h1>Queries</h1>
// //       <ul>
// //         {queries.map(query => (
// //           <li key={query._id}>
// //             {query.title}
// //             <ul>
// //               <li> {query.description}</li>
// //               <li> {query.status}</li>
// //             </ul>
// //           </li>
// //         ))}
// //       </ul> 




// //       <form onSubmit={handleSubmit(onSubmit)}>
// //             <div className="flex flex-col   mt-3  text-white">
// //               <input
// //                 placeholder="Enter Your Full Name"
// //                 className=" w-[30vw] rounded-md py-2 text-black m-3 border-2 border-black"
// //                 {...register("Name", { required: true })}
// //               />
// //               {errors.Name && (
// //                 <span>
// //                   <font color="red">this is required please fil this</font>
// //                 </span>
// //               )}

// //               <input
// //                 placeholder="Enter Your Mobile Number"
// //                 className=" text-black w-[30vw] rounded-md py-2 m-3 border-2 border-black"
// //                 {...register("MobileNumber", {
// //                   required: true,
// //                   minLength: {
// //                     value: 10,
// //                     message: "mobile no must be  10 digit",
// //                   },
// //                   maxLength: {
// //                     value: 10,
// //                     message: "Mobile No must be 10 digit",
// //                   },
// //                 })}
// //               />
// //               {errors.MobileNumber && (
// //                 <span>
// //                   <font color="red">{errors.MobileNumber.message}</font>
// //                 </span>
// //               )}

// //               <input
// //                 placeholder="Enter Your Email"
// //                 className=" text-black w-[30vw] rounded-md py-2 m-3 border-2 border-black"
// //                 {...register("Email", { required: true })}
// //               />
// //               {errors.Email && (
// //                 <span>
// //                   <font color="red">{errors.Email.message}</font>
// //                 </span>
// //               )}

// //               <input
// //                 placeholder="Enter Your QUEARY"
// //                 className=" text-black w-[30vw] rounded-md py-2 m-3 border-2 border-black"
// //                 {...register("quearytitle", {
// //                   required: true,
// //                   minLength: { value: 8, message: "min length is 8" },
// //                   maxLength: { value: 180, message: "max length is 180" },
// //                 })}
// //               />
// //               {errors.quearytitle && (
// //                 <span>
// //                   <font color="red">{errors.quearytitle.message}</font>
// //                 </span>
// //               )}

// //               <textarea
// //                 placeholder="Describe about your problem"
// //                 className=" text-black w-[30vw] h-[28vh] rounded-md py-2 m-3 border-2 border-black"
// //                 {...register("queary", { required: true })}
// //               ></textarea>
// //               {errors.queary && (
// //                 <span>
// //                   <font color="red">{errors.queary.message}</font>
// //                 </span>
// //               )}

// //               <button onClick={finalsubmit}
// //                 className="border-2  p-2 m-3 rounded-md bg-slate-400 hover:bg-orange-500 border-black text-center"
// //                 type="submit"
// //               >
// //                 Submit
// //               </button>
// //             </div>
// //           </form>
      
      
      
      
      

          
// //   // const {
// //   //   register,
// //   //   handleSubmit,
// //   //   watch,
// //   //   formState: { errors },
// //   // } = useForm();
// //   // const onSubmit = ((data) => {
// //   //   fetch("http://localhost:5000/api/queary/newqueary",{
// //   //     method:'POST',
    
// //   //     body:data
// //   //   }).then((result)=>{
// //   //     console.log(result);
// //   //   })
// //   //     console.log(data);
// //   //   })


// //   //   function finalsubmit(){
     
// //   //   }

// //     // const FormComponent = () => {
// //     //   const [formData, setFormData] = useState({
// //     //     name: '',
// //     //     email: '',
// //     //     MobileNumber: '',
// //     //     queary: '',
// //     //     quearytitle: '',
// //     //   });}

// //       // Email

// //     // MobileNumber

// //     // Name

// //     // queary

// //     // quearytitle

// //     // axios({
// //     //   // Endpoint to send files
// //     //   url: "http://localhost:5000/api/queary/newqueary",
// //     //   method: "POST",
// //     //   data: Data,
// //     //   }).then((res) => {
// //     //     console.log(res);
// //     //   }).catch((err) => {});

// //     // console.log(data);
      


// //     if (!response.data.message) {
// //           Swal.fire({
// //             title: "Thank You ",
// //             text: " Your are Sucessfully Registered !",
// //             icon: "success",
// //           });
// //         } else {
// //           Swal.fire({
// //             title: "sorrry ",
// //             text: " user is already have an account please login",
// //             icon: "error",
// //           });
// //         }




// //         *********************userportel .ajs****************************
// //         import { Link } from "react-router-dom";
// // import React, { useEffect } from "react";
// // import axios from 'axios';

// // import { useNavigate } from "react-router-dom";
// // import Swal from "sweetalert2";

// // async function userPortal() {
// //   const navigate = useNavigate();
// //   const [username, setUsername] = useState('User');
// //   useEffect(() => {
// //     const token = localStorage.getItem("Authtoken");
// //     if (!token) {
// //       Swal.fire({
// //         title: "Sorry",
// //         text: "You are not authorized to access this page. Please log in to your account.",
// //         icon: "error",
// //       }).then(() => {
// //         // Redirect to login after the alert is closed
// //         navigate("/");
// //       });
// //     }else{

// //       useEffect(() => {
// //         const fetchUserInfo = async () => {
// //           if (token) {
// //             try {
// //               const res = await axios.get('http://localhost:5000/api/user/profile', {
// //                 headers: {
// //                   'Authorization': Authtoken,
// //                 },
// //               });
// //               setUsername(res.data.username); // Assuming your user model has a 'name' field
// //             } catch (err) {
// //               console.error('Failed to fetch user info', err);
// //             }
// //           }}
// //         });

// //         fetchUserInfo();


        

        
// //     }

   
// //   }, [navigate]);
  

// //   const handleLogout = () => {
// //     // Remove token from localStorage
// //     localStorage.removeItem("Authtoken");

// //     // Show confirmation alert
// //     Swal.fire({
// //       position: "center",
// //       icon: "success",
// //       text: "You have been logged out successfully.",
// //       showConfirmButton: true,
// //       timer: 1500,
// //     }).then(() => {
// //       // Redirect to login page
// //       navigate("/");
// //     });
// //   };
// //   return (

// //     <>

// //       <div className="text-center text-white h-[10vh] flex flex-row items-center justify-around">
// //         <div className="font-extrabold">
// //           {" "}
// //           <Link to="/">Q M S</Link>
// //         </div>
// //         <div className=" flex items-center">
         
// //           {/* <Link to="/Login"><button className="btn text-white btn-outline m-3 w-[100px] ">Login</button></Link> */}
// // //           <button
// // //             onClick={handleLogout}
// // //             className="btn text-white btn-outline m-3 w-[100px] ">Logout
// // //           </button>
// // //           <div className="avatar">
// // //             <div className="w-10 rounded-full">
// // //               <img src="/user.png" />
// // //             </div>
            
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="text-white text-center">
// // //       {username && <span className="navbar-user">Welcome, {username}</span>}
      

// // //       </div>
// // //     </>
// // //   );
// // // }


// // {cart?.map((product) => (
// //   <div key={product._id}>
// //     <div className="border-2 border-black flex flex-row justify-evenly">
// //     <div className="cart_img">
// //       <img src={product.img} />
// //       <p>{product.name}</p>
// //     </div>
// //     <div>
// //       <button onClick={() => handleChange(product, +1)}> + </button>
// //       <button>{product.amount}</button>
// //       <button onClick={() => handleChange(product, -1)}> - </button>
// //     </div>
// //     <div>
// //       <span>{product.price}</span>
// //       <button >
// //         Remove
// //       </button>
// //     </div>
// //   </div>
// //   </div>
// // ))}
// // <div className="total">
// //   <span>Total Price of your Cart</span>
// //   <span>Rs - {price}</span>
// // </div>

// // {/* Add yourpcart form or any content you want in the popup */}
// // </div>
// // </div>






// **************************************

// payment .jsx

// // import React, { useState } from "react";
// // import { useLocation } from "react-router-dom";
// // import axios from "axios";
// // import Swal from "sweetalert2";
// // import { useNavigate } from "react-router-dom";

// // function Payment() {
// //     const location = useLocation();
// // const { fullOrder } = location.state || {};
// // const navigate = useNavigate();


// //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('COD');
// //   const [cardDetails, setCardDetails] = useState({
// //     cardNumber: '',
// //     expiryDate: '',
// //     cvv: ''
// //   });
  


// //   const handleCardDetailChange = (e) => {
// //     const { name, value } = e.target;
// //     setCardDetails(prevDetails => ({
// //       ...prevDetails,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async(e) => {
// //     e.preventDefault(); // Prevent default form submission behavior

// //     // Add payment method and card details to the fullOrder
// //     const updatedOrder = {
// //         ...fullOrder,
// //         paymentMethod: selectedPaymentMethod,
// //         cardDetails: selectedPaymentMethod === 'Card' ? cardDetails : null
// //     };

// //     // console.log("Updated Order:", updatedOrder);

// //     try {
// //         const response = await axios.post('http://localhost:5000/order/new', updatedOrder);
// //         console.log('Order saved:', response.data);
// //         // alert("order sucess");
// //         // Swal.fire({
// //         //     title: "Sucessfull!! ",
// //         //     text: `your Order is placed Sucessfully and your oder id is ${response.data._id}`,
// //         //     icon: "success",
// //         //   });
// //         await Swal.fire({
// //           icon: "success",
// //           title:"Sucessfull!! ",
// //           text: `your Order is placed Sucessfully and your oder id is ${response.data._id}`,
// //         });
// //         navigate("/Login");
// //         // Handle success (e.g., redirect or show a confirmation message)
// //     } catch (error) {
// //         console.error('Error saving order:', error);
// //         // Handle error (e.g., show an error message)
// //     }
// //     // Here you would send the updatedOrder to your backend or handle it as needed
// // };


// //   const codhandleSubmit = async(e) => {
// //     e.preventDefault(); // Prevent default form submission behavior
// //     console.log("Selected Payment Method:", selectedPaymentMethod);
// //     const updatedOrder = {
// //         ...fullOrder,
// //         paymentMethod: selectedPaymentMethod,
// //         cardDetails: selectedPaymentMethod === 'Card' ? cardDetails : null
// //     };

// //     try {
// //         const response = await axios.post('http://localhost:5000/order/new', updatedOrder);
// //         console.log('Order saved:', response.data);
// //         // alert("order sucess");
// //         Swal.fire({
// //             title: "Sucessfull!! ",
// //             text: `your Order is placed Sucessfully and your oder id is ${response.data._id}`,
// //             icon: "success",
// //           });
// //         // Handle success (e.g., redirect or show a confirmation message)
// //     } catch (error) {
// //         console.error('Error saving order:', error);
// //         // Handle error (e.g., show an error message)
// //     }
// //     console.log("Updated Order:", updatedOrder);
    
// //     // Additional logic for form submission can go here
// //   };

// //   return (
// //     <div className="p-8 flex items-center justify-center flex-col  max-h-[80vh]">
// //       <h2 className="font-bold text-xl text-white mb-8 text-center">Payment Method</h2>
// //       <div>
// //       <div className="flex space-x-4 mb-8">
// //         <button
// //           onClick={() => setSelectedPaymentMethod('Card')}
// //           className={`py-2 px-4 w-[18vw] rounded ${
// //             selectedPaymentMethod === 'Card' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'
// //           }`}
// //         >
// //           Card
// //         </button>
        
// //         <button
// //           onClick={() => setSelectedPaymentMethod('COD')}
// //           className={`py-2 px-4 w-[18vw] rounded ${
// //             selectedPaymentMethod === 'COD' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'
// //           }`}
// //         >
// //           Cash on Delivery (COD)
// //         </button>
// //         </div>

// //         {selectedPaymentMethod === 'COD' &&(
// //             <div className=" flex  justify-center">
// //             <button  onClick={codhandleSubmit}
// //               className="bg-blue-500   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //               type="submit"
// //             >
// //               Pay Now
// //             </button>
// //           </div>)}
// //       </div>
      
        
          

// //       {/* Conditionally Render Payment Details */}
// //       {selectedPaymentMethod === 'Card' && (
// //         <form onSubmit={handleSubmit} className="w-full max-w-md">
// //           <div className="mb-4">
// //             <label className="block text-white text-sm font-bold mb-2">
// //               Card Number:
// //             </label>
// //             <input
// //               type="text"
// //               name="cardNumber"
// //               value={cardDetails.cardNumber}
// //               onChange={handleCardDetailChange}
// //               placeholder="Card Number"
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label className="block text-white text-sm font-bold mb-2">
// //               Expiry Date:
// //             </label>
// //             <input
// //               type="text"
// //               name="expiryDate"
// //               value={cardDetails.expiryDate}
// //               onChange={handleCardDetailChange}
// //               placeholder="MM/YY"
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label className="block text-white text-sm font-bold mb-2">
// //               CVV:
// //             </label>
// //             <input
// //               type="text"
// //               name="cvv"
// //               value={cardDetails.cvv}
// //               onChange={handleCardDetailChange}
// //               placeholder="CVV"
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             />
// //           </div>

// //           <div className="flex items-center justify-between mt-4">
// //             <button
// //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //               type="submit"
// //             >
// //               Pay Now
// //             </button>
// //           </div>
// //         </form>
// //       )}
// //     </div>
// //   );
// // }

// // export default Payment;
// **************************************

// // // export default userPortal;

    