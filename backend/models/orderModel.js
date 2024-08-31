const mongoose = require('mongoose');

// Define the schema for orders
const OrderSchema = new mongoose.Schema({

    items: Array,
    total: Number,
    orderDate: String,
    userDetail: Object,
    deliveryAddress: Object,
    paymentMethod: String,
    cardDetails: Object,
    status: {
        type: String,
        enum: ['created', 'processed', 'shipped', 'delivered'],  // List of possible status values
        default: 'created',
    }
});


// Create the Order model
const Order = mongoose.model('Order', OrderSchema);

// Export the Order model
module.exports =Order;
