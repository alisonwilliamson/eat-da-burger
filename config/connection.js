// dependencies
var mysql = require("mysql");

// connection settings
connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"maggiemay233",
    database:"burgers_db"
});

// create connection and console.log if connected
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export connection for ORM
module.exports = connection;