const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String,trim: true },
    description: { type: String,trim: true },
    category: { type: String,trim: true },
    quantity: { type: Number,default: 100},
    price: {
       mrp: {
        type: mongoose.Decimal128,
        default: 0
      },

      list_price: {
        type: mongoose.Decimal128,
        default: 0
      }       
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
    
});

module.exports = mongoose.model('Product', productSchema);