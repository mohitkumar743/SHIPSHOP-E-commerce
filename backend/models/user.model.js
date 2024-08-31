const mongoose = require('mongoose');
// it is used to create user schema
const UserSchema = new mongoose.Schema({
   // User's name
   name: { type: String, required: true },
  // User's email, must be unique
  email: {
    type: String,
    required: true,
   
  },
  MobileNumber: {
    type: Number,
    required: true
  },
  // User's password
  password: {
    type: String,
    required: true
  },
  // Indicates whether the user is an admin or not
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
},
{ timestamps: true } // Adds createdAt and updatedAt timestamps
);
  const Users=mongoose.model('User',UserSchema)
  module.exports = Users;
  