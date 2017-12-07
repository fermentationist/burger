console.log("connection.js loaded");

const mysql = require("mysql");

let connection = mysql.createConnection({
	port: process.env.PORT || 3306,
	host: "us-cdbr-iron-east-05.cleardb.net",//"localhost",
	database: "heroku_8d5f65f121aa1f8",//"burgers_db",
	user: "b487ee65f8da86",//"root",
	password: "fe8ee5dd"//process.env.MYSQL_PASSWORD
	});

connection.connect(function(error){
	if (error){
		return console.log("error:", error.stack);
	}
	return console.log("connected to database as id", connection.threadId);
});

module.exports = connection;