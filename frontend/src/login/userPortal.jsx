import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Navbar from "./userNavbar";
// import Shop from '../screen/shop'
import ShopproductCard from "../Components/shopproduct";



function UserPortal() { 
  useEffect(()=>{
    document.title= "Portal || SHIPSHIP";
})

  const navigate = useNavigate();
  const [Userdata, setUserdata] = useState("");
  const [Queries, setQueries] = useState([]);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
 


  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/products");

      // Add cartValue: 1 to each product
      const productsWithCartValue = data.map(product => ({
        ...product,
        cartValue: 1
      }));

      setProducts(productsWithCartValue);
    };

    fetchProducts();
  }, []);

  const handleClick = (product) => {
    // Check if the product is already in the cart
    const isPresent = cart.some((cartItem) => cartItem._id === product._id);

    if (isPresent) {
      // console.log("Product is already in the cart");
      alert("Product is already in the cart");
      return;
    }

    // If the product is not in the cart, add it
    setCart([...cart, product]);
    console.log("Product added to cart");
  };

  useEffect(() => {
    const token = localStorage.getItem("Authtoken");

    if (!token) {
      Swal.fire({
        title: "Sorry",
        text: "You are not authorized to access this page. Please log in to your account.",
        icon: "error",
      }).then(() => {
        navigate("/"); 
      });
    } else {
      const fetchUserInfo = async () => {
        try {
          const res = await axios.get(
            "http://localhost:5000/user/profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserdata(res.data);
          // console.log(Userdata);

          
         
        } catch (err) {
          console.error("Failed to fetch user info", err);
        }
      };

      fetchUserInfo();
    }
  }, [navigate]);

  





  return (
    <>
    <Navbar Userdata={Userdata} size={cart.length} cart={cart} setCart={setCart} setProducts={setProducts} />
      <div>
        <div className="text-white text-center">
          {Userdata && (
            <span className="navbar-user text-3xl">
              Welcome {Userdata.name}
            </span>
          )}
        </div>
      </div>

      {/* <Shop/> */}
      <div className="App text-white max-h-[85vh] overflow-y-auto">
        <h1 className="text-left ml-28 text-xl">Products</h1>
        <div className="p-[10vh] pt-0">
          {products.map((product) => (
            <ShopproductCard
              key={product._id}
              product={product}
              handleClick={handleClick}
              Userdata={Userdata}

            />
          ))}
        </div>
      </div>
    </>
  );
}

export default UserPortal;
