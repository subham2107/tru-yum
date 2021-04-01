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
        product_id: String,
      
        quantity: Number,
      
        title: String,

        productprice : Number,
      
        category: String
      }
    ],
    totalprice : Number
   
});

module.exports = mongoose.model('Cart', cartSchema);

