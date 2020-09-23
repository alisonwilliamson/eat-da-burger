var connection = require("./connection.js");

// necessary for sql syntax
function addQuotes(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// necessary for sql syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
      if(Object.hasOwnProperty.call(ob, key)) {
        arr.push(key + "=" + ob[key]);
      }
  }

  return arr.toString();
}

var orm = {
  // select all rows in the table
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // insert a row into the table
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += addQuotes(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  // update a row in the table
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// export ORM for the model
module.exports = orm;