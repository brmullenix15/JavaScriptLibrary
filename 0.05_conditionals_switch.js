//This is the Switch Conditional (and I am not talking about the gaming system...)
//Swtich Statements: very similar to if statements (of any kind)
// How it works:
//The value is evaluated once
//It is then compared with cases
//If a matching case is found, it then executes the code.

var marginofsuperbowlwin = 17; //Decided not to uppercase the other words because I felt like it.
var result;

switch(marginofsuperbowlwin){
	case 3:
		result = "That will be a good game";
		break;
	case 7:
		result = "I like it, pretty close game";
		break;
	case 17:
		result = "Wow...this is not even close. Rather watch the commercials.";
		break;
	default:
		result = "I don't know, let's see what happens. Hope they don't give up a 28-3 lead...";//cough cough, falcons cough cough
}
console.log("Switch Result: " + result); //Had to display the variable in order to see if the switch worked or not.