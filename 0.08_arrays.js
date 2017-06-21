//Arrays are a collcetion of items.
//We define them by using [].

var rainbowColors = ["Red", "Orange", "Blue", "Yellow","Green", "Indigo", "Violet"];//Your array can contain a bunch in one spot
var raceWinners = [33,72,64];//Your array can also contain numbers in them.
var myFavorites = ["Bacon", 58, "Green Bay Packers", true];//Here we can even mix arrays with various data types. DO NOT ACTUALLY DO THIS.

console.log(rainbowColors);

//Arrays have indexes

var countries = ["USA", "Russia", "Germany"];
//Indexes          0        1          2
console.log(countries[0]); //Use an index to call a specific spot in the array. Hence here we call USA spot in the array.

//Iterating over arrays
//Tricky at firstm then becomes easier.

var movies = ["Die hard", "Dumb and Dumber", "Lord of the Rings", "The Departed", "Inception", "Fight Club"];

for (var i = 0; i < movies.length; i ++){ //Use this to remove any single quotes that you do not want to display with your array.
	console.log("The Index is: ", i);
	console.log(movies[i]);
}

console.log("--------------------------------------------");

var actors = ["Tom Cruise", "Andrew Garfield", "The Rock"];

for (var i = 0; i < actors.length; i ++){
	console.log("The actor is: ");
	console.log(actors[i]);
}