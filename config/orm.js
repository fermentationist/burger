

const orm = (function(){
	console.log("orm.js loaded");
	const connection = require("./connection.js");

	function objToString(itemObject){
		let keys = Object.keys(itemObject);
		let outputString = "";
		keys.forEach(function (key){
			let value = itemObject[key];
			if (typeof value === "string"){
				value = `"${value}"`;
			}
			outputString += `${key}=${value}, `
		});
		outputString = outputString.slice(0, outputString.length - 2);
		return outputString;
	}

	function selectAll(tableName, callback){
		let queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableName], function(error, result){
			if (error){
				return console.log("selectAll error -", error.stack);
			}
			console.log(`SELECT * FROM ${tableName}`);
			if (callback){
				return callback(result);
			}
			return result;
		});
	}

	function insertOne(tableName, newItemObject, callback){
		let keys = Object.keys(newItemObject);
		let qMarkString = `(${("?, ").repeat(keys.length - 1)}?)`;
		let values = keys.map((key) => {return newItemObject[key]});
		keys = keys.join(", ");
		let queryString = `INSERT INTO ${tableName} (${keys}) VALUES ${qMarkString}`;
		connection.query(queryString, values, function(err, result){
			if (err){
				throw err;
			}
			if (callback){
				return callback(result);
			}
			console.log("SUCCESS!!");
			return console.log(result);
		});
	}

	function updateOne(tableName, updatedItemObject, conditionObject, callback){
		console.log("Orm.updateOne called");
		let data = objToString(updatedItemObject);
		let condition = objToString(conditionObject);
		let queryString = `UPDATE ${tableName} SET ${data} WHERE ${condition}`;
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			if (callback){
				return callback(result);
			}
			console.log("SUCCESS!!");
			return console.log(result);
		});
	}

	return {
		connection: connection,
		selectAll: selectAll,
		insertOne: insertOne,
		updateOne: updateOne
	}

})();

module.exports = orm;




