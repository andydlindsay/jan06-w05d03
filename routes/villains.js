const express = require('express');
const router = express.Router();
const { getAllVillains } = require('../db/queries');

router.get('/', (req, res) => {
  getAllVillains()
    .then(villains => {
      res.json(villains);
    });
});

module.exports = router;
