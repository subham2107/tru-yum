const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Cart = require('../models/cart');
// const {ObjectId} = require('mongodb');

router.get('/cartitems', (req, res) => {
  console.log("JJJJJJj")
  Cart.findOne({ _id: req.session.cartId }).then(user => {
      if(user)
      res.send(user);
      else
      res.send({message : "No products"})
  }).catch(() => {
      res.status(500).send({ error: "Internal Server Error" });
  });
});

router.post('/mycart', (req, res) => {
  console.log("Hi");

  const productId = req.body.productId;   
  const mrp = req.body.mrp;
  const lp = req.body.lp;
  console.log(lp);
  console.log(productId);

              Cart.findOne({ product_id : productId })
              .then(blog => {
                  if(blog){
                      console.log("iiiii")
                      console.log(blog);
                  console.log(blog.id)
                 blog.quantity++;
                  blog.save().then(() => {console.log("Updated");
                  res.status(201).send({message : 'Product Updated in D/B'});});

              }
              else{
                  const categorydb = new Cart({sessionid : req.session.usedId, product_id : productId, "price.mrp" : mrp, quantity : 1, "price.list_price" : lp});
                      console.log("HHHHH")
                      categorydb.save().then(() => {
                              console.log("HHH")
                              res.status(201).send({message : 'Product Added in D/B'});
                  })
              }
          }, err => {
                  console.log(`Error in finding blog ${err}`);
              });
           
          });




router.post('/:productId', (req, res) => {
                
  Cart.findOne({_id : req.session.cartId}).then(cart => {
      if(cart){
          console.log(cart);
          console.log(cart.items);
          // var result = cart.items.filter(x => x.productId === req.params.productId);
          var index = cart.items.findIndex(function(item, i){
              return item.product_id === req.params.productId;
            });
          if(index === -1){
              cart.items.push({product_id :  req.params.productId, quantity : 1})
              cart.save().then(() => {console.log("Updated");
              res.status(201).send({message : 'Product Added in DB'});});
          }
          else{
              //result.quantity = result.quantity + 1;
              cart.items[index].quantity++; 
              cart.save().then(() => {console.log("Updated");
              res.status(201).send({message : 'Product Updated in DB'});});
          }
      }
         else
          {
           // console.log(ObjectId(req.params.productId));
            
              const cartdb = new Cart({items : {product_id : (req.params.productId), quantity : 1}});
                 cartdb.save().then((cart3) => {
                     req.session.cartId =  cart3.id;
                         res.status(201).send({message : 'Product Added in DB'});
             })
         }
     }, err => {
console.log(`Error in finding cart ${err}`);
});
});


module.exports = router;

