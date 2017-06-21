//Bronze
var age = 18;
if (age === 1){
	console.log("Congrats! You sruvived a whole year!");
}
if (age === 50){
	console.log("Halway there, halfway there...to being old lol");
}
if (age === 18){
	console.log("You're an adult now, have fun with that");
}
if (age === 21){
	console.log("Woot woot! Party until you forget what you were celebrating...");
}
if (age === 62){
	console.log("You're offically old, go and play golf or something old people do");
}

//Silver
var gamesWon = 1;

if (gamesWon > 2){
	console.log("Ha we are better than you cheaters!");
}
if (gamesWon = 2){
	console.log("We took two from yall you took two from us, but yall still suck.");
}
if (gamesWon < 2){
	console.log("The refs cheated, probably paid them off.");
}
if (gamesWon = 0){
	console.log("Guess we didn't play yall this year, still hate your guts you ball deflaters.");
}

//Gold
var num = 0;
while (num <= 100){
	num += 1;
	if( num % 3 === 0 && num % 5 === 0)
	{
		console.log("FizzBuzz");
	}
	else if (num % 3 === 0)
	{
		console.log("Fizz");
	}
	else if(num % 5 === 0)
	{
		console.log("Buzz");
	}
	else{
		console.log(num);
	}
}