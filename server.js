// dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// port for deployment
var PORT = process.env.PORT || 3000; 

var app = express();

// static route
app.use(express.static("public"));

// connect to body parser
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// listening on the port
app.listen(PORT, function(){
  console.log("Server listenting on: http://localhost:" + PORT);
});