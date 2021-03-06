console.log('burgers_controller.js loaded');
const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
const path = require("path");

router.get(["/", "/api/all"], function (req, res){
	console.log("GET /api/all");
	burger.all(function (results){
		return res.render("index", {burgers: results});
	});
});

router.post("/api/new", function (req, res){
	console.log("POST /api/new");
	burger.create(req.body, function (response){
		res.json(response);
	});
});

router.put("/api/update/:id", function (req, res){
	console.log("PUT /api/update");
	burger.update(req.body, req.params.id, function (response){
		res.json(response);
	});
});

router.delete("/api/delete/:id", function (req, res){
	console.log("DELETE /api/delete");
	console.log("\nreq.params.id =", req.params.id);
	burger.remove(req.params.id, function (response){
		return res.json(response);
	});
});


module.exports = router;
