// const Connection = (function(){
// 	console.log("connection.js loaded");
// 	const mysql = require("mysql");

// 	const connection = mysql.createConnection({
// 		host: "localhost",
// 		database: "burgers_db",
// 		user: "root",
// 		password: process.env.MYSQL_PASSWORD
// 		});

// 	connection.connect(function(error){
// 		if (error){
// 			return console.log("error:", error.stack);
// 		}
// 		return console.log("connected to database as id", connection.threadId);
// 	});

// 	return {
// 		connection: connection
// 	}
// })();

// module.exports = Connection.connection;


console.log("connection.js loaded");

const mysql = require("mysql");

let connection = mysql.createConnection({
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