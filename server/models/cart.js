const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
    
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }, 
    session_id: mongoose.ObjectId,
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

    price: {
      mrp: mongoose.Decimal128,

      list_price: mongoose.Decimal128,

   },
   
});

module.exports = mongoose.model('Cart', cartSchema);