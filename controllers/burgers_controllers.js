var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")



  

  router.get("/", function(req, res) {
    
    burger.render(function(data){
      console.log("string")
      console.log(data)
      console.log("string")
var burger = {burger: data}
console.log(burger)
res.render("index",burger)

    })
      
    });


  module.exports = router;

