console.log("main_layout.js loaded");

$("#postBurger").on("click", function (){
	let newBurger = {};
	newBurger.burger_name = $("#burger_name").val();
	if ($("#devoured").is(":checked")){
		newBurger.devoured = "1";
	}else{
		newBurger.devoured = "0";
	}

	console.log("\nnewBurger", newBurger);

	$.post("/api/new", newBurger).done(function(data){
		console.log("\nsuccess\n");
		console.log("data", data);
	});


});

$(document).on("click", ".deleteButton", function (){
	let id = $(this).attr("id");
	console.log('id', id);

	$.ajax({
		url:"delete/" + id,
		success: function(data){
		console.log("\nsuccess\n");
		console.log("data", data);
		},
		type: "DELETE"
	});

	$(this).remove();
});