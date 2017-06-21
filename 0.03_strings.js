//We are going to learn about using Strings and how to code with them.
//Strings are a group of characters. They MUST go in quotes.

console.log("Hello World");//Can put whatever you want to say, or even a string variable.

var tweet = "Hello, this is a tweet";
console. log(tweet); //just like I mentioned above. Allows Java to update what is being said, like any other variable.
var username = "SmilingNevada9";
console.log(username);

var password = "2345password";//Hint, Hint, not my actual password...or is it...But strings can contain numbers or other characters in them.
console.log(password);

var birthCity = "St. Paul";
var birthState = "Minnesota";
var commaspace = ",";
console.log(birthCity + birthState); //Here we joined birthCity and birthState into one string of text.
console.log(birthCity +"," + birthState); //But since we just joined the two, if we wanted a comma we can do it this way or...
console.log(birthCity + commaspace + birthState); //Just do it this way with another variable.
console.log(birthCity + 5 + birthState); //Just like any string, everything is just smushed together.
//Be Sure to notice the difference when running the file.

//Mixing Strings & Integers
var ageInAugust = 20;
var highSchool = "Eastern Howard High School";
var graduatedHS = 2015;

console.log(highSchool + commaspace + graduatedHS);
console.log("My age in August:",ageInAugust); //Be sure the comma is after the quoted text if you don't want the comma in the shown text.
console.log("My 'age' in August:",ageInAugust);
console.log('My "age" in August:',ageInAugust);//These are ways to quoted stuff within quotes.
console.log("My \"age\" in August:", ageInAugust);

//Challange: I Graduated from <hs> in <year>
//The text should show: I Graduated from Eastern Howard High School in the year 2015.
console.log("I Graduated from " + highSchool +" in the year " + graduatedHS); //To add in spaces and commas easily, just add them within your quotes.

//String Methods(functions)
console.log(highSchool.length);//Shows us how long/ how many characters are within the string. This doesn't affect string.
console.log(highSchool.toUpperCase()); //Put text within string to all UPPER CASE. These fucntions affect string.
console.log(highSchool.toLowerCase()); //Put text within string to all lower case.
console.log(highSchool.split(" ")); //This removes the characters within the " " and seperates the string that way. (This will show 'Eastern', 'Howard', 'High', 'School').
console.log(highSchool.slice(3)); //Will slice everything before the indicated number, in this case everything will stay after the 3rd charcter(tern Howard High School will be shown).