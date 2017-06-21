//Bronze
var hobbies = ["Video Games", "Netflix", "Board Games", "Playing/Watching Sports"];

//Silver
var awesomecars = ["Ferrari", "Mustang", "Camero", "Fusion, lol"];
for (var i = 0; i < awesomecars.length; i++){
	console.log(awesomecars[i]);
}

//Gold
var pets = ["Buggs", "Sheba", "Axel", "Mr. Goldfish"];
var arraylist = [hobbies, awesomecars, pets];

for(var i = 0; i < arraylist.length; i++){
	console.log("Here are the arrays within the array: ", i);
	console.log(arraylist[i]);
}

//Other Challenges
var rannum = [];
for (i = 0; i < 15; i++){
	rannum [i] = rannumgen();
	console.log(ranum[i]);
}





function rannumgen(){
  var randomnum = Math.random();
  randomnum *= 50;
  return Math.floor(randomnum);
}