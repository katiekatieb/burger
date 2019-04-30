var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb){
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(col, val, cb){
    orm.updateOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  removeOne: function(id, cb){
    console.log("hi")
    orm.removeOne(id, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;