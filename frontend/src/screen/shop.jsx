import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/navbar";
import ShopproductCard from "../Components/shopproduct";

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
 


  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://shipshop-e-commerce-backend.onrender.com/products");

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
      console.log("Product is already in the cart");
      alert("Product is already in the cart");
      return;
    }

    // If the product is not in the cart, add it
    setCart([...cart, product]);
    console.log("Product added to cart");
  };

  return (
    <>
      <Navbar size={cart.length} cart={cart} setCart={setCart} setProducts={setProducts} />

      <div className="App text-white max-h-[90vh] overflow-y-auto">
        <h1 className="text-center text-5xl">Products</h1>
        <div className="p-[10vh]">
          {products.map((product) => (
            <ShopproductCard
              key={product._id}
              product={product}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
