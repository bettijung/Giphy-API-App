// Giphy App 

// Buttons
// Loop that appends a button for each string in the array

	var topics = ["dog", "horse", "cow", "deer", "giraffe", "lion", "tiger", "elephant", "ibis", "sheep", "pig", "eagle", "fox"];

	


// Button clicks to 
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

for (var i = 0; i < topics.length 0; i++) {
	
	document.addEventListener()	
	
	$("#button-section").append(buttonDiv);
}

			

// When user clicks on one of hte still Giphy images, hte gif shuld animate.



// Add a Button

	// Add a form to your page takes the value from a user input box and adds it into your topics array. 
	// Then make a function call that takes each topic in the array remakes the buttons on the page


	