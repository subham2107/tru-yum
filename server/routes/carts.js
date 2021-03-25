const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Cart = require('../models/cart');


router.post('/', (req, res) => {

  //_id = req.session.userId;
  const product_id = req.body._id;
  const session_id = req.session.id;

  Product.find({"_id":product_id}).then(product => {
  
   console.log(product[0].quantity);
 console.log(product[0].category);
 console.log(product[0].price.mrp);

}).catch(() => {
  res.status(500).send({ error: "Internal Server Error" });
});

res.send('Hellllo');
});


module.exports = router;

// const cart = new Cart({ _id: session_id,["product_id":], price: product[0].price.mrp });
/*
  userCredential.save().then(() => {
      const user = new User({ _id: userCredential.id, email });
      user.save().then(() => {
          res.status(201).send({ id: userCredential.id });
      });
  });
  */
//   items: [
//     {
//       product_id: mongoose.ObjectId
//     }, 
//     {
//       quantity: Number
//     }, 
//     {
//       title: { type: String,trim: true }
//     },  
//     {
//       category: { type: String,trim: true }
//     }
//   ],

//   price: {
//     mrp: mongoose.Decimal128,

//     list_price: mongoose.Decimal128,

//  },
