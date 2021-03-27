const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res) => {
  Product.find({}).then(product => {
      res.send(product);
  }).catch(() => {
      res.status(500).send({ error: "Internal Server Error" });
  });
});

router.get('/:productId', (req, res) => {
  Product.findOne({ _id: req.params.productId }).then(product => {
      res.send(product);
  }).catch(() => {
      res.status(500).send({ error: "Internal Server Error" });
  });
});

router.get('/categories/:categoryname', (req,res) => {
  console.log("xxxxxxxxxx");
  console.log(req.params.categoryname)
  Product.find({ category: req.params.categoryname})
  .then(user => {       
         if(!user) {       
            res.status(404).send();      
         }
         res.send(user);
       }).catch((e) => {      
          res.status(400).send(e);    
       });
});

module.exports = router;