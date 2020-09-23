var connection = require("../config/connection");

// helper function
function createQmarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// helper function to translate string into sql
function translateSql(obj) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  // select all rows in the table
  selectAll: function (table, cb) {
    var dbQuery = "SELECT * FROM " + table + ";";
    // run connection query
    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  // insert a row into the table
  insertOne: function(table, cols, vals, cb) {
    var dbQuery = 
    "INSERT INTO " + 
    table +
    " (" +
    cols.toString() +
    ") " +
    createQmarks(vals.length) +
    ") ";

    console.log(dbQuery);
    connection.query(dbQuery, vals, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  
  // update a row in the table
  updateOne: function(table, objColVals, condition, cb) {
    var dbQuery = 
    "UPDATE " + 
    table +
    " SET " +
    translateSql(objColVals) +
    " WHERE " +
    condition;

    console.log(dbQuery);
    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  
  deleteOne: function (table, condition, cb) {
    var dbQuery = "DELETE FROM " + table + " WHERE " + condition;

    console.log(dbQuery);
    connection.query(dbQuery, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// export ORM for the model
module.exports = orm;