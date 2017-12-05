const orm = require("../config/orm.js");

const burger = (function (){

	function all (callback){
		return orm.selectAll("burgers", callback);
	}

	function create (newItemObject, callback){
		return orm.insertOne("burgers", newItemObject, callback);
	}

	function update (updatedItemObject, idNum, callback){
		let conditionObject = {id: idNum};
		return orm.updateOne("burgers", updatedItemObject, conditionObject, callback);
	}

	return {
		all: all,
		create: create,
		update: update
	}
})();

module.exports = burger;
