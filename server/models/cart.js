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
      
        title: { type: String,trim: true },
      
        category: { type: String,trim: true }
      }
    ],

    price: {
      mrp: Number,

      list_price: Number,

   },
   
});

module.exports = mongoose.model('Cart', cartSchema);

// items: [
//   {
//     product_id: mongoose.ObjectId
//   }, 
//   {
//     quantity: Number
//   }, 
//   {
//     title: { type: String,trim: true }
//   },  
//   {
//     category: { type: String,trim: true }
//   }
// ]