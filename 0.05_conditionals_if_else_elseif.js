//This is the elseif conditional
//ElseIf states allow for more than just two possible outcomes.

var isFast = true;
var isSmart = true;

if(isFast){ //Only one of these conditions can be true. The first one to be true will be ran and the others will be skipped.
	console.log("Wow you got some wheels on yah.");
}
else if(isSmart){
	console.log("At least you're smart...");
}
else{
	console.log("Maybe spend sometime in the gym or in the books...just saying");
}