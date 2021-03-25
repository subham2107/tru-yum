const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/', (req, res) => {
  Category.find({}).then(category => {
    let categoryNames = category.map(function (cat) {
      return cat.name;
    });
    res.send(categoryNames);
  }).catch(() => {
      res.status(500).send({ error: "Internal Server Error" });
  });
});

module.exports = router;
