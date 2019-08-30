//Strike off todos list

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Removing the element when clicked on li

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Adding new elemets into the li when text is entered

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13 ) {
		var newText = $(this).val();
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + newText + "</li>")
	}
})

//Fading out the text when entered

$(".fa-plus").click(function(){
	$("input[type='text']").fadeOut(1000);
})