var orm = require("../config/orm.js");


var burger = {

render: function(){console.log(orm.selectAll())}



}

module.exports = burger;