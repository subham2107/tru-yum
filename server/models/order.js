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
        product_id: mongoose.ObjectId
      }, 
      {
        quantity: Number
      }, 
      {
        title: { type: String,trim: true }
      },  
      {
        category: { type: String,trim: true }
      }
    ],
    amount: mongoose.Decimal128,
    status: String,
    
});

module.exports = mongoose.model('Order', orderSchema);