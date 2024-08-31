import React,{useEffect, useState} from "react";
import axios from 'axios';
import Swal from "sweetalert2";



function OrderCard({order}) {
  // let cancelbtn="";
  const [cancelbtn,setCancelBtn]=useState("false")
  useEffect(()=>{
    document.title= "Orders || SHIPSHIP";
})

useEffect(() => {
  if (order.status === "delivered"|| order.status === "Canceled") {
    setCancelBtn(false);
  } else {
    setCancelBtn(true);
  }
}, [order.status]);

  const statusColor = order.status === 'Canceled' ? 'text-red-500' : 'text-green-500';
  // Function to handle cancel click
const handleCancelClick = async (orderId) => {
  try {
    // Send request to backend to update the order status
    const response = await axios.put(`http://localhost:5000/order/cancel/${orderId}`, {
      status: 'Canceled'
    });
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't to cancel this Product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
         await Swal.fire({
          title: "Canceled !",
          text: "Your Porduct is Canceled Sucessfully.",
          icon: "success"
        });
      }
    });
    // alert('Order status updated:', response.data);
    window.location.reload()
    // Optionally, update the state or UI here
  } catch (error) {
    console.error('Error updating order status:', error);
  }
};

  return (
    <>
      <div className="m-2 text-black  h-[40 vh] flex-col  ">
        <div className="bg-white rounded-lg p-4 shadow-md   ">
          <div className="flex   flex-">
            <div className="flex gap-1">
              <div className="circle">
                <span className="bg-blue-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-purple-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-pink-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div className=" ml-3 circle">
                <p>
                  <strong>Order Details</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div
              className="flex flex-row
            gap-5"
            >
              <p>
                <strong>Order Date:</strong> {order.orderDate}
              </p>
              <p>
                <strong>Order ID:</strong> {order._id}
              </p>
              <p>
                <strong>Total:</strong> Rs.{order.total}
              </p>
            </div>

            <div
              className="flex flex-row
            gap-5 border-2 border-cyan-200 w-fit "
            >
              <h3>User Details :</h3>
              <p>
                <strong>Name:</strong> {order.userDetail.name}
              </p>
              <p>
                <strong>Email:</strong> {order.userDetail.email}
              </p>
              <p>
                <strong>Mobile Number:</strong> {order.userDetail.MobileNumber}
              </p>
            </div>
            <div className=" flex gap-5 border-2 border-gray-200 w-fit">
              <h3>Delivery Address:</h3>

              <p>
                <strong>Name:</strong> {order.deliveryAddress.name}
              </p>

              <p>
                <strong>Street Address:</strong>{" "}
                {order.deliveryAddress.streetAddress}
              </p>

              <p>
                <strong>City:</strong> {order.deliveryAddress.city}
              </p>

              <p>
                <strong>State:</strong> {order.deliveryAddress.state}
              </p>

              <p>
                <strong>Postal Code:</strong> {order.deliveryAddress.postalCode}
              </p>
            </div>
            <div className="">
              <div className="payment-method flex gap-x-8">
                <h3>
                  Payment Method: <strong>{order.paymentMethod}</strong>{" "}
                </h3>
                <h3>
                  
                  <strong>
                  
                   Order Status: <span className={statusColor}>{order.status}</span>
                  </strong>
                </h3>
             
              </div>
              <div>
               
                <h3>Order Items</h3>
                <div className="order-items flex items-center ">
                  <div className="">
                    {order.items.map((item) => (
                      <div key={item._id} className="flex order-item">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="item-image h-10"
                        />
                        <div className="flex gap-5 m-4  item-info">
                          <p>
                            <strong>Name:</strong> {item.name}
                          </p>
                          <p>
                            <strong>Brand:</strong> {item.brand}
                          </p>
                          {/* <p><strong>Category:</strong> {item.category}</p> */}
                          {/* <p><strong>Description:</strong> {item.description}</p> */}
                          <p>
                            <strong>Rating:</strong> {item.rating}
                          </p>
                          {/* <p><strong>Number of Reviews:</strong> {item.numReviews}</p> */}
                          <p>
                            <strong>Price:</strong> Rs.{item.price}
                          </p>
                          {/* <p><strong>Count in Stock:</strong> {item.countInStock}</p> */}
                          <p>
                            <strong>Quantity:</strong> {item.cartValue}
                          </p>
                        </div>
                      </div>
                    ))}
                    {cancelbtn && (
                    <button
                      onClick={() => handleCancelClick(order._id)}
                      className="btn text-white btn-outline bg-red-500 m-3"
                    >
                      Cancel Order
                    </button>
                  )}
                      

                    
                    
                  </div>
                </div>
              </div>
              {/* hgdjfskaihvfdkjxsfjsaedjflew */}
            </div>
         
      
        </div>
        </div></div>
    </>
  );
}

export default OrderCard;
