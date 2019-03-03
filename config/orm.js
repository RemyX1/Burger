var connection = require("../config/connection.js");

var orm = {

selectAll: function(cb){

connection.query("SELECT * FROM burger",function(err,res){console.log(res),cb(res)})

},



}

module.exports = orm;