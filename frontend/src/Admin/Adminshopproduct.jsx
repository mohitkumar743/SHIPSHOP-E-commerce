import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

// import { useCart } from '../context/CardContext'; 

function ProductCard({ product,SetProducts}) {

  // delete product handler
  const handleDelete =  async() => {
    
    try {
      const _id = product._id;
      await axios.delete(`https://shipshop-e-commerce-backend.onrender.com/products/product/${_id}`);
      
      // Update the Products state by filtering out the deleted product
      SetProducts(prevProducts => prevProducts.filter(p => p._id !== _id));
      Swal.fire({
        title: "Are you sure?",
        text: "You won't to delete this Product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: `Product deleted successfully. ${_id}`,
            icon: "success"
          });
        }
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  



  // update product handler
  const handleupdate = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      text: `this feature is under working. ${product._id}`,
      showConfirmButton: true,
      
    })
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
            
            </div>
            </div>

            <div className="product-card flex flex-row">
              <img
                // src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                src={product.image}
                alt={product.name}
                style={{  height: "40vh" }}
              />
            
            

            <div className="w-[70%]  ml-5">
              <h1 className="text-3xl">
                <strong>{product.name}</strong>
              </h1>
              <p className="text-2xl">{product.description}</p>

              <p className="text-xl"><strong>Quantity : </strong>{product.countInStock}</p>
              <p className="text-2xl">Price: Rs {product.price}</p>
              <div className="flex items-center pt-3">
              <button onClick={handleDelete} className="btn text-white btn-outline bg-red-500 m-3 w-[100px]">
              delete
            </button>
              <button onClick={handleupdate} className="btn text-white btn-outline bg-green-500 m-3 w-[100px]">
              Update
            </button>
           </div>
            </div>
            </div>
            </div>
          
        </div>
      
    </>
  );
}

export default ProductCard;
