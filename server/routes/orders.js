const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// router.post('/', (req, res) => {
    
//     const { items, passwor } = req.body;

//     UserCredential.findOne({ email }).then(user => {
//         if (user) {
//             res.status(400).send({error: "User already signed up"});
//             return;
//         }

//         const hash = bcrypt.hashSync(password);

//         const userCredential = new UserCredential({ email, password: hash });

//         userCredential.save().then(() => {
//             const user = new User({ _id: userCredential.id, email });
//             user.save().then(() => {
//                 res.status(201).send({ id: userCredential.id });
//             });
//         });
//     }).catch(() => {
//         res.status(500).send({ error: "Internal Server Error" });
//     });
// });

// router.get('/me', auth.authenticate, (req, res) => {
//     User.findOne({ _id: req.session.userId }).then(user => {
//         res.send(user);
//     }).catch(() => {
//         res.status(500).send({ error: "Internal Server Error" });
//     });
// });

// router.get('/:userId', (req, res) => {
//     User.findOne({ _id: req.params.userId }).then(user => {
//         res.send(user);
//     }).catch(() => {
//         res.status(500).send({ error: "Internal Server Error" });
//     });
// });

// router.put('/me', auth.authenticate, (req, res) => {
//     if (!req.session.userId) {
//         res.send(401).send({ error: "Not logged in"});
//     }

//     const { firstName, lastName } = req.body;

//     const updateQuery = {};
//     (firstName !== undefined) && (updateQuery.firstName = firstName);
//     (lastName !== undefined) && (updateQuery.lastName = lastName);

//     User.updateOne({ _id: req.session.userId }, updateQuery).then(() => {
//         res.status(204).send();
//     }).catch(() => {
//         res.status(500).send({ error: "Internal Server Error" });
//     });
// });

module.exports = router;