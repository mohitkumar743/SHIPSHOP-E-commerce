const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/user.model');
const Admin = require('../models/admin.model');
const user = require('../models/user.model');
const product = require('../models/productModel');
const order = require('../models/orderModel');
const jwt = require('jsonwebtoken');





//   Middleware to authenticate token
const authMiddleware = (req, res, next) => {
  
  const authHeader = req.header('Authorization');
 
  // console.log('Authorization Header:', authHeader); 
  
  if (!authHeader) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];
  // console.log('Extracted Token:', token); 

  if (!token) {
    return res.status(401).json({ message: 'Token missing from Authorization header' });
  }

  try {
    const decoded = jwt.verify(token, 'mohit');
    // console.log('Decoded Token:', decoded); // Log the decoded token payload
    req.user = decoded.user;
    next();
  } catch (err) {
    // console.error('Token verification error:', err.message);
    res.status(400).json({ message: 'Token is not valid' });
  }
};



//  allusers show here

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const userdata = req.user;
    // console.log(userdata.Name)
    const userData =userdata
    res.json(userData);
  } catch (err) {
    // console.error('Server error:', err.message); 
    res.status(500).json({ message: 'Server error' });
  }
});

//  for user login
router.post('/login', async (req, res) => {
  const checkuser ={
    MobileNumber :req.body.mobilenumber,
    password: req.body.password
  };
  try {
    const password= checkuser.password
    const MobileNumber = checkuser.MobileNumber;
    const user = await Users.findOne({ MobileNumber });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
      return res.status(400).json({ message: 'Invalid credentials' })
     };
    
    const token = jwt.sign({ user }, process.env.JWTKEY, { expiresIn: '1h' });
    res.json({ token });

} catch (err) {
    res.status(500).json({ error: err.message });
}
});


//*********admin login *******
router.post('/admin', async (req, res) => {
  const { mobilenumber, password } = req.body;

  try {
    // Find the user by MobileNumber
    const user = await Users.findOne({ MobileNumber: mobilenumber });

    // Check if the user exists
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the user is an admin
    const isuseradmin = user.isAdmin 
    if (!isuseradmin) {
      return res.status(403).json({ message: 'Access denied. Not an admin user.' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, admin: isuseradmin }, process.env.JWTKEY, { expiresIn: '1h' });
    res.json({ token});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
 
// used to Create a new user in db
router.post('/new', async (req, res) => {
  const saltRounds =10

  const users = new Users({
  name:req.body.name,
  email:req.body.email,
  MobileNumber :req.body.mobilenumber,
  password: await bcrypt.hash(req.body.password,saltRounds) 
   
  });
  try {
    const contactno = users.MobileNumber
    const isactiveuser = await Users.findOne({MobileNumber:contactno});
    console.log(users)

    if(isactiveuser){
      res.send ({ message:"user is already have an account please login"});

    }else{
      const newUser = await users.save();
      console.log(newUser)
      res.status(201).json(newUser);
    }
   
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// update the Update a user details but now it not used in project
// router.patch('/updateuser/:id', async (req, res) => {
//   try {
//     const user = await Users.findById(req.params.id);
//     if (req.body.name != null) {
//         user.name=req.body.name;
//     }
//     if (req.body.username != null) {
//         user.username=req.body.username;
//     }
//     if (req.body.phoneno != null) {
//         user.phoneno=req.body.phoneno;
//     }
   
//     if (req.body.email != null) {
//         user.email=req.body.email;
//     }
//     if (req.body.password != null) {
//         user.password=req.body.password;
//     }
   
//     const updateduser = await user.save();
//     res.json(updateduser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
 
// we use this to Delete user by id not in used
router.delete('/deleteuser/:id', async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.json({ message: 'user deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


// {
//   "name": "sneha",
//   "username": "sneha123",
//   "phoneno": 8588956835,
//   "email": "snehat@gmail.com",
//   "password": "sneha123"
  
// }
