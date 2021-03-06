console.log("server.js loaded");
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT, function(){
	console.log("app listening on port", PORT);
});


