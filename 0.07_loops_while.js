//We are going to learn about loops. You can say we are getting a little loopy while we do this...
//Loops are used to do things in multiples, and makes code cleaner and more efficent.
//The while loop tells JS to repeat statements until condition is deemed false.

//Example
var score = 0;
while (score < 10){//Loop stops once score is not less than 10.
	score ++; //Shorthand for score = score + 1.
	console.log("Score is: " + score);
}

//Another Example
var age = 0;
while (age < 100){
	age +=10; //Again shorthand for age = age + 10.
	console.log("The age is: " + age);
}
if (age === 100){
	console.log("I am a century year old...man I am old...where'd my keys go?");
}

//Challenge: Write a while loop that prints 10-100 by 10's
//at 50 prtin halfway there

var myage = 0;
while (myage < 100){ //Here we have a nested if loop inside of the while loop.
	myage += 10;
	console.log("My age is: " + myage);
	if (myage == 50)
	{
		console.log("Halway there, halfway there...");
	}
}
