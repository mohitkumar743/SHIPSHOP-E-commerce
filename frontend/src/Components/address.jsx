import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function AddressPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { order } = location.state || {}; // Retrieve order details from location state


  const [form, setForm] = useState({
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Merge form data with order details
    const fullOrder = {
      ...order,
      deliveryAddress: form,
    };

    // Process the full order data here
    // console.log('order after address Order:', fullOrder);
    
    // Optionally, send the complete order to your server
    // e.g., axios.post('/api/submit-order', fullOrder);

    alert(' address submitted successfully!');

    // Optionally, navigate to a confirmation page
    navigate('/payment', { state: { fullOrder } });
  };

  if (!order) {
    return <p>No order details available.</p>;
  }

  return (
    <div className="address-page flex text-white h-screen">
      <div className=" w-[50%]  p-5">
        <h1 className="font-bold text-xl">Order Details</h1>
        <table className="table">
        <tbody>
            <tr>
              <td>Order Date:</td>
              <td>{order.orderDate}</td>
            </tr>
          </tbody>
        </table>
        <h1 className="font-bold text-xl">User Details</h1> 
        <table className="table">
        <tbody>
          <tr>
            <td>user name</td>
            <td> {order.userDetail.name}</td>
          </tr>
          <tr>
            <td>user Mobile Number</td>
            <td> {order.userDetail.MobileNumber}</td>
          </tr>
          </tbody>
          </table>
        

        <h3 className="font-bold">Items:</h3>
        <table className="table ">
        <thead>
          <th className="text-white">Price</th>
          <th className="text-white">quantity</th>
          <th className="text-white">title</th>
          </thead>
          {order.items.map((item) => (
            <tbody>            <tr key={item._id}>
              <td>{item.name}</td>
              <td> Rs. {item.price}</td>
              <td>{item.cartValue}</td>
            </tr>
            </tbody>

          ))}
        </table>
        <h1 className="font-extrabold text-right pr-28">
          
          Total Price: Rs.{order.total}
        </h1>



      </div>




      <div className=" w-[50%] m-10">
        <div>
        <h2>Delivery Address</h2>
        {/* Implement address form here */}
        <form onSubmit={handleSubmit}>
        <div  className="flex flex-col gap-3 m-5">
          <label htmlFor="name">Name:</label>
          <input className="text-black h-12"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div  className="flex flex-col gap-3 m-5">
          <label htmlFor="streetAddress">Street Address:</label>
          <input className="text-black h-12"
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={form.streetAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div  className="flex flex-col gap-3 m-5">
          <label htmlFor="city">City:</label>
          <input className="text-black h-12"
            type="text"
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>
        <div  className="flex flex-col gap-3 m-5">
          <label htmlFor="state">State:</label>
          <input className="text-black h-12"
            type="text"
            id="state"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          />
        </div>
        <div  className="flex flex-col gap-3 m-5">
          <label htmlFor="postalCode">Postal Code:</label>
          <input className="text-black h-12"
            type="text"
            id="postalCode"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            required
          />
        </div >
        <button className="btn m-3 hover:bg-amber-600 hover:text-black text-white bg-slate-600 shadow-md" type="submit">Submit Address</button>
      </form>

       
          </div>
        </div>
        </div>
      
  );
}

export default AddressPage;
