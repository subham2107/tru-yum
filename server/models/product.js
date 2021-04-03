const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String,trim: true },
    description: { type: String,trim: true },
    category: { type: String,trim: true },
    quantity: { type: Number,default: 100},
    price : {
        mrp : Number,
        list_price : Number
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







