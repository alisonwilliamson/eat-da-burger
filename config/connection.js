const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // connection settings
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "maggiemay233",
    database: "burgers_db"
  });
}
// create connection
connection.connect();
// export connection for ORM
module.exports = connection;
