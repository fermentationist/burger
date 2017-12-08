console.log("connection.js loaded");

const mysql = require("mysql");

let connection = mysql.createConnection({
	port: process.env.PORT || 3306,
	host: "localhost",
	database: "burgers_db",
	user: "root",
	password: process.env.MYSQL_PASSWORD
	});

connection.connect(function(error){
	if (error){
		return console.log("error:", error.stack);
	}
	return console.log("connected to database as id", connection.threadId);
});

module.exports = connection;