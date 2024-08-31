const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();
const jwt = require('jsonwebtoken');

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error in get request' });
  }
});


//   Middleware to authenticate token
const authMiddleware = (req, res, next) => {
  
  const authHeader = req.header('Authorization');
 
  // console.log('Authorization Header:', authHeader); 
  
  if (!authHeader) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];
  console.log('Extracted Token:', token); 

  if (!token) {
    return res.status(401).json({ message: 'Token missing from Authorization header' });
  }

  try {
    const decoded = jwt.verify(token, 'mohit');
    console.log('Decoded Token:', decoded); // Log the decoded token payload
    req.user = decoded.userId;
    console.log(decoded.userId)
    next();
  } catch (err) {
    console.error('Token verification error:', err.message);
    res.status(400).json({ message: 'Token is not valid' });
  }
};





// save a new product

router.post('/new',authMiddleware, async (req, res) => {
  const { name, image, description, brand, category, price, countInStock, rating, numReviews, reviews } = req.body;

  try {
    const product = new Product({
      user: req.user, // Assuming user ID is available from middleware
      name,
      image,
      description,
      brand,
      category,
      price,
      countInStock,
      rating,
      numReviews,
      reviews
    });
    const createdProduct = await product.save();
    // console.log(createdProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Failed to add product', error });
  }
});

// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});
router.delete('/product/:_id', async (req, res) => {
  const _id  = req.params;
  console.log(_id)
  try {
    const deletedProduct = await Product.findByIdAndDelete(_id);
    if (!deletedProduct) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting product', error });
  }
});

module.exports = router;
