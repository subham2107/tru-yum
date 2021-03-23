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

    price: {
      mrp: Decimal128,

      list_price: Decimal128,

      discount: Decimal128
         
   },

    
});

module.exports = mongoose.model('Cart', cartSchema);