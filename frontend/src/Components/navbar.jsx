import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import '../Components/style/cart.css';

function Navbar({ size, cart, setCart }) {
  const navigate = useNavigate();
  const [shopcartPopup, setShopcartPopup] = useState(false); // State to control popup visibility
  const [price, setPrice] = useState(0);
  const [isLogin, setisLogin] = useState(false);
  // const[preorder,setpreorder]=useState([])
 

  // Toggle the popup visibility
  const toggleCartPopup = () => {
    setShopcartPopup(!shopcartPopup);
  };
  // for increment and decrement
  const handleChange = (product, delta) => {
    console.log(product,delta)
    let ind = -1;
		cart.forEach((data, index)=>{
			if (data._id === product._id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].cartValue += delta;
		
		if (tempArr[ind].cartValue === 0)
			tempArr[ind].cartValue = 1;
		setCart([...tempArr])
	}
  

  const handlePrice = () => {
    let ans = 0;
    
    if (Array.isArray(cart)) {
      cart.map((item) => {
        ans += item.price * item.cartValue;
      });
    }
  
    setPrice(ans);
  }

  useEffect(()=>{
    handlePrice();
  })

 
  // Handle product removal
  const handleRemove = (id) => {
    const updatedCart = cart.filter((product) => product._id !== id);
    setCart(updatedCart);
  };
//logout handle
  const handleLogout = () => {
    localStorage.removeItem("Authtoken");

    Swal.fire({
      position: "center",
      icon: "success",
      text: "You have been logged out successfully.",
      showConfirmButton: true,
      timer: 1500,
    }).then(() => {
      setisLogin(true)
      navigate("/home");
    });
  };

  const handleCheckout = () => {
    if(isLogin){

    
    const order = {
      items: cart,
      total: price,
      orderDate: new Date().toLocaleString(),
    };

    console.log("Order Details:", order);
    
    // Here you would typically send the order object to your backend server
    // e.g., axios.post("http://localhost:5000/orders", order);

    alert("Checkout successful! Check the console for order details.");
    
    // Optionally, clear the cart after checkout
    setCart([]);
    setShopcartPopup(false);
    navigate('/address', { state: { order } });
  }else{
    alert("please login for CheckOut")
    navigate("/Login"); 
  }
  };



  return (
    <>
      <div className="text-center text-white h-[10vh] flex flex-row items-center justify-around">
        <div className="font-extrabold">
          <Link to="/">SHIPSHOP</Link>
        </div>
        <div className="flex items-center relative">
          {isLogin? <><button
              onClick={handleLogout}
              className="btn text-white btn-outline m-3 w-[100px]"
            >
              Logout
            </button>
             <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="/user.png" alt="User Avatar" />
              </div>
              </div></>
           :
        <Link to='/Login'> <button className="btn text-white btn-outline m-3 w-[100px]">
            Login
          </button></Link>}
          <div  className="cursor-pointer" onClick={toggleCartPopup}>
            <CiShoppingCart className="text-5xl" />
            <span className="text-white z-10 bg-red-600 rounded-full w-7 text-xl absolute top-0 right-0">
              {size}
            </span>
          </div>
        </div>
      </div>

      {shopcartPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg min-h-[80vh] w-[80vw] text-black">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <h2 className="text-xl font-bold mb-4"></h2>
                <CiShoppingCart className="text-5xl" />
              </div>
              <button
              
                onClick={toggleCartPopup}
                className="mt-4 bg-red-500 text-white p-2 rounded"
              >
                Close
              </button>
            </div>
            <article>
              {cart.length === 0 ? (
                <p className="text-center">Your cart is empty</p>
              ) : (
                cart.map((product) => (
                  
                  <div className="cart_box" key={product._id}>
                    <div className="cart_img">
                      <img src={product.image} alt={product.name} />
                      <p>{product.name}</p>
                    </div>
                    <div>
                      <button className="border-2" onClick={() => handleChange(product, +1)}> + </button>
                      <span>{product.cartValue}</span>
                      <button className="border-2"  onClick={() => handleChange(product, -1)}> - </button>
                    </div>
                    <div>
                      <span>Rs.{product.price}</span>
                      
                      <button onClick={() => handleRemove(product._id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
              <div className="total">
                <span>Total Price of your Cart</span>
                <span>Rs. {price}</span>
              </div>
              <div className="flex items-center
               justify-end mt-3 pl-0">
            <button type="button" onClick={handleCheckout} class="  text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CheckOut</button></div>
            </article>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
