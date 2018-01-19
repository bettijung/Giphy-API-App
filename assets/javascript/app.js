// Giphy App 

// Array of animals
var topics = ["dog", "horse", "cow", "deer", "giraffe", "lion", "tiger", "elephant", "ibis", "sheep", "pig", "eagle", "fox"];

// Function to dump gifs when user inputs animal and clicks button
$("#select-animal").on("click", function(event) {
	event.preventDefault();
	var inputAnimal = $("#animal-input").val().trim();
	
	animalSearch(inputAnimal);
});

// Function that grabs gifs 
function animalSearch(animal) {

	// Store Giphy API URL
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=xcm8mnCYZBb4tt8AhxoLpZLxw9Xg7ciS&limit=10"; 
	// AJAX GET request
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {

		var results = response.data;

		for (var i = 0; i < results.length; i++) {
			var animalDiv = $("<div>");
			var p = $("<p>").text("Rating: " + results[i].rating);
			var animalImage = $("<img>");
			animalImage.attr("src", results[i].images.fixed_height.url);
			animalDiv.append(animalImage);
			animalDiv.append(p);

			$("#gif-div").prepend(animalDiv);
		}
	});
}


// Function for displaying rendered buttons
function renderButtons() {
	$("#button-section").empty();

	for (var i = 0; i < topics.length; i++) {
	// Dynamically generate buttons for each movie in array
		var x = $("<button>");
		x.addClass("animal-btn");
		x.attr("data-name", topics[i]);
		x.text(topics[i]);
		$("#button-section").append(x);
	}	
}


// Function that adds newly inputed animals to array
$("#select-animal").on("click", function(event) {
	event.preventDefault();
	var inputAnimal = $("#animal-input").val().trim();
	topics.push(inputAnimal);
	renderButtons();
});


// Function that dumps gifs when animal buttons are clicked
$("<button>").on("click", function(event) {
	event.preventDefault();
****	var inputAnimal = $("#animal-input").val().trim();
	
	animalSearch(inputAnimal);
});

renderButtons();




// $("#button-section").on("click", function() {
//   // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//   var state = $(this).attr("data-state");
  
//   if (state === "still") {
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//   } else {
//     $(this).attr("src", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
//   }
// });

			


// When user clicks on one of the still Giphy images, hte gif shuld animate.


	