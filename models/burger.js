var orm = require("../config/orm.js");


var burger = {

render: function(cb){

    orm.selectAll(function(res){
console.log(res)
cb(res)


})} 



}

module.exports = burger;