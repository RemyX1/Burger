var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")



  router.get("/", function(req, res) {
    console.log("yes")
    res.render("index")
  });

  module.exports = router;