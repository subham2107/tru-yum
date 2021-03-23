const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: { type: String,trim: true },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }   
});

module.exports = mongoose.model('Category', categorySchema);