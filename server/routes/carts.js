const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Cart = require('../models/cart');


router.post('/', (req, res) => {

  //_id = req.session.userId;
  
  
  const product_id = req.body._id;
   const session_id = req.session.id;
  console.log(session_id);
  Product.find({"_id":product_id}).then(product => {
  const cart = new Cart({ session_id,items: [ {product_id:product_id},{title:toString(product[0].title)},{category:toString(product[0].category)}], price: {mrp:parseFloat(product[0].price.mrp),list_price:parseFloat(product[0].price.mrp)} });
  cart.save().then(() => {
  res.status(201).send("added to cart");
})

}).catch(() => {
  res.status(500).send({ error: "Internal Server Error" });
});

res.send('Hellllo');
}
);


module.exports = router;

