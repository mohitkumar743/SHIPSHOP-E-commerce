const express = require('express');
const router = express.Router();
const Order = require("../models/orderModel")

// Define your routes here
router.post('/new', async (req, res) => {
  // Handle GET request for orders
  try {
    const orderData = req.body;
    const order = new Order(orderData);
    await order.save();
    res.status(201).send(order);
} catch (error) {
    res.status(400).send(error);
}
});
// update status by admin side
router.put('/updatestatus/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedProduct = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product status', error });
  }
});


// cancel order from user side
router.put('/cancel/:id', async (req, res) => {
  const id= req.params.id;
  const { status } = req.body;

  try {
    const updatedorder = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedorder) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedorder);

  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// show all orders to the user

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    console.log(orders);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error in get request' });
  }
});

router.get('/myorder/:userId', async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  
  try {
    const orders = await Order.find({ 'userDetail._id': userId });
    if (orders.length > 0) {
      res.json(orders);
    } else {
      res.status(404).json({ message: 'No orders found for this user' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// router.post('/', async (req, res) => {
//   // Handle POST request for creating an order
// });

module.exports = router; // Ensure this line exports the router instance
