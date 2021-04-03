const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const UserCredential = require('../models/user-credential');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.get('/name', (req,res) => {
    console.log(req.session.userId);
    User.findOne({_id : req.session.userId}).then(user => {
        if(user){
            console.log("Inside get name");
            console.log(user);
        res.status(200).send({firstname : user.firstname});
        }
        else
        res.staus(404).send({message : "No name provided"})
    })
});

router.post('/', (req, res) => {
    if (!req.body) {
        res.status(400).send({error: "Email and Password not present in request"});
        return;
    }

    const { firstname, lastname, email, password } = req.body;

    if (!email) {
        res.status(400).send({error: "Email not present in request"});
        return;
    }

    if (!password) {
        res.status(400).send({error: "Password not present in request"});
        return;
    }

    UserCredential.findOne({ email }).then(user => {
        if (user) {
            res.status(400).send({error: "User already signed up"});
            return;
        }

        const hash = bcrypt.hashSync(password);

        const userCredential = new UserCredential({ email, password: hash });

        userCredential.save().then(() => {
            const user = new User({ firstname, lastname, _id: userCredential.id, email, });
            user.save().then(() => {
                res.status(201).send({ id: userCredential.id });
            });
        });
    }).catch(() => {
        res.status(500).send({ error: "Internal Server Error" });
    });
});

router.get('/me', auth.authenticate, (req, res) => {
    User.findOne({ _id: req.session.userId }).then(user => {
        res.send(user);
    }).catch(() => {
        res.status(500).send({ error: "Internal Server Error" });
    });
});

router.get('/:userId', (req, res) => {
    User.findOne({ _id: req.params.userId }).then(user => {
        res.send(user);
    }).catch(() => {
        res.status(500).send({ error: "Internal Server Error" });
    });
});

router.put('/me', auth.authenticate, (req, res) => {
    if (!req.session.userId) {
        res.send(401).send({ error: "Not logged in"});
    }

    const { firstName, lastName } = req.body;

    const updateQuery = {};
    (firstName !== undefined) && (updateQuery.firstName = firstName);
    (lastName !== undefined) && (updateQuery.lastName = lastName);

    User.updateOne({ _id: req.session.userId }, updateQuery).then(() => {
        res.status(204).send();
    }).catch(() => {
        res.status(500).send({ error: "Internal Server Error" });
    });
});

module.exports = router;