const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }, 
    
    user_id: mongoose.ObjectId,
    items: [
      {
        product_id: mongoose.ObjectId,
        quantity: Number,
        title: String,
        category: String,
        productprice : Number
      }
    ],
    amount: Number,
    currency: String,
    status: String,
    
});

module.exports = mongoose.model('Order', orderSchema);