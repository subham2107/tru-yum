const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const Product = require('../models/product');
const Cart = require('../models/cart');
//const {ObjectId} = require('mongodb');

router.get('/', auth.authenticate, (req,res) => {
    if (!req.session.userId) {
        res.status(401).send({ error: "Not logged in"});
    }
    else{
        res.status(200).send({message : "Successful"});
    }
})

router.get('/getcount',(req,res) => {
    Cart.find({_id : req.session.cartId}).then(cart => {
        if(cart){
            if(cart.length !== 0)
            res.send({itemcount:cart[0].items.length});
            else
            res.send({itemcount:0})
        }
        else{
            res.send({itemcount:0})
        }

    })
})

router.get('/cartitems', (req, res) => {
  Cart.findOne({ _id: req.session.cartId }).then(user => {
      if(user)
      res.send(user);
      else
      res.send({message : "No products"})
  }).catch(() => {
      res.status(500).send({ error: "Internal Server Error" });
  });
});


router.post('/:productId', (req, res) => {
       
  Product.findOne({ _id: (req.params.productId) }).then(product => { 
    
  Cart.findOne({_id : req.session.cartId}).then(cart => {
      if(cart){
          
          // var result = cart.items.filter(x => x.productId === req.params.productId);
          var index = cart.items.findIndex(function(item, i){
              return item.product_id === req.params.productId;
            });
          if(index === -1){
              cart.items.push({title: product.title, product_id :  req.params.productId, quantity : 1,productprice : product.price.mrp})
              cart.totalprice = cart.totalprice + product.price.mrp;
              cart.save().then(() => {
              res.status(201).send({message : 'Product Added in DB'});});
          }
          else{
              //result.quantity = result.quantity + 1;
              cart.items[index].quantity++;
              const prodprice = cart.items[index].productprice + product.price.mrp;
                cart.items[index].productprice = prodprice;
                cart.totalprice = cart.totalprice + product.price.mrp; 
              cart.save().then(() => {
              res.status(201).send({message : 'Product Updated in DB'});});
          }
      }
         else
          {
          
        // title=product.title;
              const cartdb = new Cart({items : {title: product.title, product_id : (req.params.productId), quantity : 1,productprice : product.price.mrp},totalprice:product.price.mrp});
                 cartdb.save().then((cart3) => {
                     req.session.cartId =  cart3.id;
                         res.status(201).send({message : 'Product Added in DB'});
             })
         }
     }
      ,err  => {
});
});
});

router.delete('/:productId', (req, res) => {
    Cart.findOne({_id : req.session.cartId}).then(cart => {
        let balance = 0;
        for (var i in cart.items) {
            if(cart.items[i].product_id === req.params.productId){
                balance = cart.items[i].productprice;
                cart.items.splice(i, 1);
            }
        }
        cart.totalprice = cart.totalprice - balance;
        cart.save().then(() => {
        res.status(204).send({message : 'Product Deleted in DB'});
    });
});
});
module.exports = router;

