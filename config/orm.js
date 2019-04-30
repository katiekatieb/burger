var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(id){
    var queryString = "DELETE FROM burgers WHERE id = ?";
    connection.query(queryString, [id], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
      else if (result.affectedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    });

  }

}


module.exports = orm;