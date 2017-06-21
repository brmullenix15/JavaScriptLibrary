//Here we learn about using variables and some of the uses of them
var x = 1;
console.log(x); //this gives us an error message...never mind, fixed it...

var y = 9;
var z = x + y;
console.log(z);

//Naming
//Name variables anything you want
var age = 42;
var spaghetti = 1000;

//Camel Casing (Naming convention)
var numberOfGrammysIHaveWon = 0; //first word is lower cased, the rest are upper cased.
var myBirthYear = 1996;
var newNumber = (z * numberOfGrammysIHaveWon);//10 times 0 which will equal 0.
 console.log(newNumber);

//ShortHand operators
age += 1; //same as age = age + 1, can also do -= to go down instead of up.
console.log(age);

spaghetti %= 100; //same as spaghetti = spaghetti % 100.
console.log(spaghetti);

//Using the var for a value interchange.
var ageInAugust =  age + 1;//Can use other variables within antother variable.
console.log(ageInAugust);
var eleven = 11;
console.log(eleven * eleven);//Can do operations with variables.
console.log(Eleven); //Case-sensitivity is a big deal, will get an error for Eleven bc not defined.
