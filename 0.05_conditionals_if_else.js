//Just like an if statement, just when the conditions are not met you run the else portion of the code

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true){
	console.log("Going Up");//Ran if condition is true
}
else{
	console.log("Going Down");//Ran if condition is false
}

//With an if/else statement: Describe if the elevator is broken or not
if (elevatorNumber === 13 && elevatorBroken === true){//I added in the elevatorNumber condition for a little fun.
	console.log("Elevator is broken, take the stairs.");
}
else{
	console.log("Elevator is just fine. But use a different elevator because I said so.");
}

//Combining variable types for conditionals
if(elevatorStuckWhileWeAreOnIt && elevatorNumber === 13){
	console.log("Today is not our lucky day, becasue we are all stuck bruh.");
}
else{
	console.log("Phew, that could have been a pickle mi amigo.");
}