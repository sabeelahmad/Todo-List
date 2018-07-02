// Click event for all li's inside
//Check off todos
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on Trash icon to delete
// A span inside ul is clicked
$("ul").on("click", "span", function(event) {
	// Remove li
	$(this).parent().fadeOut(600, function() {
		// Delete completed
		$(this).remove();
		console.log("Deleted!");
	});
	// Avoiding event bubble
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
	//Run if enter pressed
	if(event.which === 13) {
		// Enter has been hit
		//text of todo
		var todoText = $(this).val();
		//Clear input
		$(this).val("");
		//create a new todo and add to page
		// using jQuery append method
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle(300);
})