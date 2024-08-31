import React, { useState, useEffect } from "react";
import Navbar from "./userNavbar";
import axios from "axios";
import UserOrders from "./userorders";





function myorders() {
  
  const [Orders, SetOrders] = useState([]);
  const [btnaction, setbtnaction] = useState(false);
  const [Status, SetStatus] = useState("created");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [productData, setProductData] = useState({
  //   name: '',
  //   image: '',
  //   brand: '',
  //   category: '',
  //   description: '',
  //   rating: 3.5,
  //   numReviews:0,
  //   price: '',
  //   countInStock: '',
  //   reviews: [],
  // });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/order");
        const data = response.data; // Assuming the API response has a 'data' property containing the array
        
        // Ensure 'data' is an array before setting state
        if (Array.isArray(data)) {
          SetOrders(data);
        } else {
          console.error("API did not return an array of products:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchOrders();
  }, []);



  return (
    <>
      <Navbar />
      <div className="text-white text-center text-2xl">myorders</div>

      <div className="p-[5vh] pt-2 h-[80vh] overflow-y-scroll">
          {Orders.map((Order) => (
            <UserOrders
              key={Order._id}
              order={Order}
            />
          ))}
        </div>
     

    </>
  );
}

export default myorders;
