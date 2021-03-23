const mongoose = require("mongoose");
const { Schema } = mongoose;

const checkoutSchema = new Schema({
    
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }, 

    cart_id: ObjectId,
    delivery_address: String,
    billing_address: String,
    coupon: Boolean,

    price: {
      mrp: Decimal128,

      list_price: Decimal128,

      discount: Decimal128        
   },

    
});

module.exports = mongoose.model('Checkout', checkoutSchema);