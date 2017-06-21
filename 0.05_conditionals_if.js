//If statement: Are used to tell JS which statements to execute based on a condition.

var isOn = true;
var isHot = true;

//Shorthand version for checking truality.
if (isOn){
	console.log("The light is on");
}

//Longhand version for checking truality.
if (isOn === true){
	console.log("The light is still on");
}

//Conditional Operators
//AND -> &&
//OR  -> ||
//NOT -> !

if(isOn && isHot){//If any of the variables become false, then this section of code will not be displayed.
	console.log("The light is on and it is hot");
}

if(isOn || isHot){//Here only one needs to be true in order to execute the section.
	console.log("I am not sure what so say");
}

if(!isOn){
	console.log("The light is not on");
}