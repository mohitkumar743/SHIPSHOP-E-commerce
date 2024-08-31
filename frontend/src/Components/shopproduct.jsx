import React from "react";
import { Link } from "react-router-dom";
// import { useCart } from '../context/CardContext'; 

function ProductCard({ product,handleClick }) {
  
  return (
    <>
      <div className="m-3 text-black  h-[40 vh] flex-col  ">
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
                style={{ height:"35vh" }}
              />
            
            

            <div className="w-[70%]  ml-5">
              <h1 className="text-4xl">
                <strong>{product.name}</strong>
              </h1>
              <p className="text-2xl">{product.description}</p>

              <p className="text-4xl">Price: Rs {product.price}</p>
              <div className="flex items-center pt-5">
            {/* <button className="btn text-black btn-outline m-3 w-[100px] ">buy now</button> */}
            <button onClick={()=>handleClick(product)}  className="btn text-black btn-outline m-3 w-[100px] ">add to cart</button></div>
            </div>
            </div>
            </div>
          
        </div>
      
    </>
  );
}

export default ProductCard;
