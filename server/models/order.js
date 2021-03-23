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
    
    user_id: ObjectId,
    items: [
      {
        product_id: ObjectId
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
    amount: String,
    status: Boolean,
    
});

module.exports = mongoose.model('Order', orderSchema);