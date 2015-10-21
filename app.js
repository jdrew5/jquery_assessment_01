$(document).ready(function(){
	var clickedCount=0;

	// listen for the generate button and add to dom
	$("#container").on('click', '.generateButton', function() {
		
		clickedCount++;
		addToDOM(clickedCount);
	});

	// listen for delete button and remove from dom
	$("#container").on('click', '.deleteButton', function() {
		$(this).parent().remove();
	});

	// listen for delete button and remove from dom
	$("#container").on('click', '.changeButton', function() {
		if($(this).parent().hasClass('setRed')) {
			$(this).parent().removeClass('setRed');
		} else {
			$(this).parent().addClass('setRed');
		};
	});

	
});

function addToDOM(clickedCount) {
	
	$("#container").append("<div class=buttoncontainer></div>");

	// get the element of the last div
	var $el = $("#container").children().last();

	// append object values
	$el.append("<button class='deleteButton'>Delete</button>");
	$el.append("<button class='changeButton'>Change</button>");
	$el.append("<p># times generate button clicked: "+clickedCount+"</p>");



}