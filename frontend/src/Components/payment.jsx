

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Payment() {
  const location = useLocation();
  const { fullOrder } = location.state || {};
  const navigate = useNavigate();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('COD');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleCardDetailChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const updatedOrder = {
      ...fullOrder,
      paymentMethod: selectedPaymentMethod,
      cardDetails: selectedPaymentMethod === 'Card' ? cardDetails : null
    };

    try {
      const response = await axios.post('https://shipshop-e-commerce-backend.onrender.com/order/new', updatedOrder);
      console.log('Order saved:', response.data);
      await Swal.fire({
        icon: "success",
        title: "Successful!",
        text: `Your order is placed successfully and your order ID is ${response.data._id}`,
      });
      navigate("/login");
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  const codhandleSubmit = async(e) => {
    e.preventDefault();

    const updatedOrder = {
      ...fullOrder,
      paymentMethod: selectedPaymentMethod,
      cardDetails: selectedPaymentMethod === 'Card' ? cardDetails : null
    };

    try {
      const response = await axios.post('https://queary-management-system-server.onrender.com/order/new', updatedOrder);
      console.log('Order saved:', response.data);
      await Swal.fire({
        title: "Successful!",
        text: `Your order is placed successfully and your order ID is ${response.data._id}`,
        icon: "success",
      });
      navigate("/login");
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  return (
    <div className="p-8 flex items-center justify-center flex-col max-h-[80vh]">
      <h2 className="font-bold text-xl text-white mb-8 text-center">Payment Method</h2>
      <div>
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setSelectedPaymentMethod('Card')}
            className={`py-2 px-4 w-[18vw] rounded ${
              selectedPaymentMethod === 'Card' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'
            }`}
          >
            Card
          </button>
          <button
            onClick={() => setSelectedPaymentMethod('COD')}
            className={`py-2 px-4 w-[18vw] rounded ${
              selectedPaymentMethod === 'COD' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'
            }`}
          >
            Cash on Delivery (COD)
          </button>
        </div>

        {selectedPaymentMethod === 'COD' && (
          <div className="flex justify-center">
            <button
              onClick={codhandleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>

      {selectedPaymentMethod === 'Card' && (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Card Number:
            </label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailChange}
              placeholder="Card Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Expiry Date:
            </label>
            <input
              type="text"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleCardDetailChange}
              placeholder="MM/YY"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              CVV:
            </label>
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleCardDetailChange}
              placeholder="CVV"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Pay Now
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Payment;

