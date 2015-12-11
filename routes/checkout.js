'use strict';

var express = require('express');
var router = express.Router();

var stripe = require("stripe")(process.env.SK_KEY);

router.post('/', function(req, res) {
  var tokenObj = req.body.tokenObj;
  var total = req.body.total;

  var charge = stripe.charges.create({
    amount: Math.round(total * 100),
    currency: "usd",
    source: tokenObj.id,
    description: "Read it!"
  }, function(err, charge) {
    res.status(err ? 400 : 200).send(err || charge);
  });
});

module.exports = router;
