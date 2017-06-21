//Functions: What do we use them for?
//Executes actiion(s)
//Allows us to reuse code without retyping it
//Makes code cleaner

function hello(){
	console.log("Hello World");
}
hello();//This how you "Call" the function in order to use it.

function printOneNum(){
	console.log(1);
}
printOneNum();

function divider(){
	console.log("------------------------------------------------");
}
divider();

//Scope with variables
//Think of it like a rifle scope

var x = 7;

function add(){//Scoping is having the ability to only look within a function and ignoring the rest of the code outside of the function.
	var x = 2;
	var y = 7;
	console.log(x + y);
}
function subtract(){
	var x = 4;
	var y = 1;
	console.log(x-y);
}
subtract();//See we get 3, again we are scoping. While in the function, you can use a variable that is already present outside of the function.
add();

divider();

//Parameters/Arguments (Essentially the same thing)
//Parameters are what the names in the function definition.
//Arguments are what is based to the function.

function numEnt(x){
	console.log("Number Entered: " + x);
}
numEnt(7);//Here we are putting the number 7 into x in the function numEnt. 
		  //x is a parameter and 7 is an argument (being passed to the function).

//Can have as many parameters as you please or want. In this case, x and y are parameters while 12 and 4 are arguments.
function addTwoNums(x,y){
	console.log(x + y);
}
addTwoNums(12,4); //Again we are adding in two arguments into the function called addTwoNums.
divider();

//The Return
//When JS hits the return, it will stop executing the function and return its argument (or what was passed to the function).

function mood(){
	return "I'm feeling great!";
}
console.log(mood());//Can treat the mood fucntion like a variable and then display the returned value. Mood becomes the argument.

function multiply(x,y){
	return x*y;
}
console.log(multiply(6,8)); //Just like the mood function, multiply is the variable. 
							//This time tho, we are inserting two arguments for the function.

divider();

//Function Writing Challenge:
//Write a function that takes two arguments, a first name and a last name, and combines them to return 
//<firstname> <lastname> and then return value to the console.

function combineName(firstname, lastname){
	return "<" + firstname + "> <" + lastname + ">";
}
console.log(combineName("Brett", "Mullenix"));

//What if i wanted to do the same function multiple times? This can be very tedious. That's where loops come in.
//divider();
//divider();
//divider();
//divider();
//divider();

for(var i = 0; i < 5; i++){ //This is much easier and clearner for your code to use loops. 
	divider();
}