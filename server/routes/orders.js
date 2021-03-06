const express = require('express');
const Razorpay = require('razorpay');
const crypto = require("crypto");

const auth = require("../middlewares/auth");
const Cart = require("../models/cart");
const Order = require("../models/order");
require('dotenv').config();

const router = express.Router();
const rzpKey = process.env.RZP_KEY_ID;
const secret = process.env.RZP_KEY_SECRET;
const currency = 'INR';

const rzpInstance = new Razorpay({
    key_id: rzpKey,
    key_secret: secret,
});

router.get('/myorders', (req,res) => {
    
    Order.find({user_id : req.session.userId}).then(
        order => {
            
            if(order)
            res.send(order);
            else{
                res.send({msg : "kkk"})
            }
        }
    )   
})

router.get('/:orderid', (req, res) => {
  
  Order.findOne({ _id: req.params.orderid}).then(order => {
      if(order)
      res.send(order);
      else
      res.send({message : "No Orders"})
  }).catch(() => {
      res.status(500).send({ error: "Internal Server Error" });
  });
});

router.post('/', auth.authenticate,(req, res) => {
    Cart.findOne({ _id: req.session.cartId }).then(cart => {
        const { items, totalprice } = cart;
        const amount = totalprice * 100;
        const order = new Order({ user_id: req.session.userId, amount, currency, status: 'CREATED', items });
        order.save().then(() => {
            const orderId = order.id;
            const options = {
                amount,
                currency,
                //receipt denotes our order id on Razorpay
                receipt: orderId,
            };

            //Create order on razorpay
            rzpInstance.orders.create(options, (err, rzpOrder) => {
                if (err) {
                    res.status(500).send({ error: 'Error in creating razorpay order' });
                    return;
                }

                res.status(201).send({
                    amount,
                    currency,
                    orderId,
                    //This is required by client to co-ordinate with razorpay
                    rzpOrderId: rzpOrder.id
                });
            });
        },
        () => {
            res.status(500).send({ error: 'Error in creating order' });
        })
    },
    () => {
        res.status(500).send({ error: 'Error in getting cart' });
    });
});

router.put('/:id', auth.authenticate, (req, res) => {
    const orderId = req.params.id;
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    if (!razorpay_payment_id || !razorpay_signature) {
        res.status(400).error({ error: "Missing razorpay payment id or signature" });
        return;
    }
    const generated_signature = crypto.createHmac('sha256', secret).update(razorpay_order_id + "|" + razorpay_payment_id).digest('hex');
    if (generated_signature === razorpay_signature) {
        Order.updateOne({ _id: orderId }, { $set: { status: 'COMPLETED', razorpay_payment_id, razorpay_order_id, razorpay_signature }}).then(() => {
            res.status(204).send();
        });
        delete req.session.cartId;
    } else {
        res.status(400).send({ error: 'Signature validation failed' });
        return;
    }
});

module.exports = router;