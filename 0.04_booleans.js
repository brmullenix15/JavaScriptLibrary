//Here we are learning about the boolean variable. This takes values such as TRUE or FALSE

var tired = false;
var awake = true;
var hungry = true;
var sad = false;
var happy = true;
var happyToWorkWithYall = true; //ehh maybe...
var corny = true; //I prefer to go by punny, because the pun is never intended

console.log(tired);

//Comparisons (These come in handy with loops)
//    == Eqaulity
//    === Strict Eqaulity
//    != Inequality
//    !== Strict Ineqaulity
//    > Greater than
//    < Less than
//    >= Greater than or equal to
//    <= Less than or equal to 

console.log(2 > 1); //Should print out true.
console.log(3 < 2); //Should print out false.

var test = 2 >= 3;
console.log(test); //Test will eqaul 2 and 2 is not greater than or equal to 3.

console.log("Two is greater than one? " + (2 > 1));//Can mix boolean with string variables or integer variables.

//When checking for equality you want to use === over the == in JavaScript
2 == "2"; //true
2 === "2"; //false becuase "2" is a string, not an integer.
2 === 2; //true
1 + 1 === 2; //again true.

//Inequality
"Joey" !== "Tif"; //True
10 !== 10; //false

// Overview, differences between =, ==, and ===
var one = 1; //This is for assingment of variables.
//var stringOne == 1; //This is for comparison.
//console.log("Two equals? ", one === stringOne); //Compares type and value, unlike ==.

//Logical Operators
//Operators          Meaning      True Expressions
// &&                 AND         4 > 0 && -2 < 0. To get this, both sides have to be true for whole operation to be true.
// ||                 OR          4 > 0 || -2 > 0. Only one side needs to be in order for the whole operation to be true.
// !                  NOT         !(-5 > 0). Have to put something that is false ( -5 > 0) and place a ! to make it true, as shown.

console.log("&& operator:", 2 === 2 && 1===1); //In the text below, it will display the result following what is in the " ", in this case true.
console.log("|| operator:", 2 ===2 || 1===1);
console.log("! operator:", 2 != 1);