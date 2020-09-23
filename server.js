var express = require("express");
var bodyParser = require("body-parser");


var port = process.env.PORT || 3000; 

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended:true }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
var routes = require("./controllers/controller.js");

app.use("/", routes);

app.listen(port);