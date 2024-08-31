import React,{useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";

function OrderCard({ order, SetStatus }) {
  const statusColor = order.status === 'Canceled' ? 'text-red-500' : 'text-green-500';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("created");
  const [OrderId, setOrderId] = useState(null);

  // update product handler
 
  const handleUpdateClick = (id) => {
    setOrderId(id);
    setIsModalOpen(true);
  };
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleeSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.put(`http://localhost:5000/order/updatestatus/${OrderId}`, { status: selectedStatus });
      setIsModalOpen(false);
      // Optionally: refresh products or show success message
      await Swal.fire({
        position: "center",
        icon: "success",
        text: `Product Status is Sucessfully Updated`,
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload()
    } catch (error) {
      console.error('Error updating status:', error);
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
                  Order Status:{" "}
                  <strong>
                  <span className={statusColor}>{order.status}</span>
                  </strong>{" "}
                </h3>
                {/* <p><strong>Method:</strong> </p> */}
              </div>
              <div>
                {/* hgdjfskaihvfdkjxsfjsaedjflew */}
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
                    <button
                      onClick={() => handleUpdateClick(order._id)}
                      className="btn text-white btn-outline bg-green-500 m-3 "
                    >
                      Update Product Status
                    </button>
                  </div>
                </div>
              </div>
              {/* hgdjfskaihvfdkjxsfjsaedjflew */}
            </div>
            {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[300px]">
            <h2 className="text-xl font-bold mb-4">Update Order Status</h2>
            <form onSubmit={handleeSubmit}>
              <select
                value={order.status}
                onChange={handleStatusChange}
                className="w-full p-2 mb-4 border rounded"
              >
                <option value="created">Created</option>
                <option value="processed">Processed</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
              <button type="submit" className="bg-green-500 text-white p-2 rounded">
                Update Status
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="ml-2 p-2 border rounded text-gray-600"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
