function divider(){
	console.log("----------------------------");
}

//Objects

var emptyObject = {};

var johnQualls = {
	//Define some Properties
	name: "John Qualls",
	age: 49,
	vocation: "President of Eleven-Fifty Academy",
	isRetired: false,
	//Methods
	greeting: function(){
		console.log("Hello, I am: "+ this.name + ".I am " + this.vocation);//The this.property tag is used to identify the object to which we are using, or what is within this code.
	},
	tellage: function(){
		console.log("I am " + this.age + " years old.");
	},
	extendedGreeting: function(){
		this.greeting();
		this.tellage();
	},
};
divider();

johnQualls.greeting();//Shorter than having to type out console.log everytime you want to, in this case, introduces the person.
johnQualls.tellage();
johnQualls.extendedGreeting();//Instead of having to do what we did in the pervious two lines, just combine the functions into another function.

divider();

console.log(johnQualls.name);//Without the .name, you get everything printed out, this way we get only what we want to see.
console.log(johnQualls.age);
console.log(johnQualls.middlename);//THis should not work due to middlename not being a property defined within the John Qualls section.
divider();

var animal = {
	type: "bear",
	habitat: "woods",
	weight: 500,
	commonInIndiana: false
};

console.log(animal.weight);
console.log(animal["weight"]);//This is the same thing as the line above, but takes longer to type out.
animal.weight = 700;//This is how to change a value within an object.
console.log(animal.weight);
animal.type = "large kitty";
console.log(animal.type);

divider();

console.log(animal.favoritefood);
animal.favoritefood = "spaghetti";//Goes from being undefined to being defined. Neat trick to be able to add to an object on the fly.
console.log(animal.favoritefood);
animal.color = "Orangeish";
animal.garfieldlike = true;

delete animal.garfieldlike;//Just like how we can define on the go, we can also delete on the go or fly.

//Properties can be more than just boolean, integers, strings, and numbers.
//These can be arrays and other objects.

animal.moviesaboutkitty = ["Lion King", "Marley and Me", "Jungle Book"];
console.log(animal.moviesaboutkitty);

//small challange: print out only the second movie. 
console.log("The second movie is: " + animal.moviesaboutkitty[1]);

console.log(Object.keys(animal)); //Prints out all the properties of the object.

//Challenge: Make a friend with at least 4 properties. Make a movie with 3 properties, then a 3rd object with whatever I want.

var friend = {
	name: "Eric",
	age: 20,
	hobby: "Drinking Arnold Palmer",
	goodRA: false
};

var starwarsMovie = {
	setting: "In a Galaxy Far Far Away",
	basicplot: "Forces of Good vs Evil",
	awesomelevel: 100 //out of 100.
};

var randomthing = {
	nameofthing: "blando",
	whatdoesthingdo: "Respects the magic conch",
	soundthingmakes: "........Doesn't make noises"
};

//Constructors

//Inheritance: Get basic characteristics from one object to use for other objects. Base model of car, then you can make any number 
//of different cars from that base model in code.

var car ={
	make: "",
	model: "",
	year: 1,
	constructor: function(make, model, year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
};

//Longish way of Inheritance
var myCar = Object.create(car);
myCar.constructor("Chevy","S-10",2001);
console.log(myCar.make);

//Shorthand way of Inheritance

var book ={
	title: "",
	yearPub: 0,
	numPages: 0,
	constructor: function(title, yearPub, numPages){
		this.title = title;
		this.yearPub = yearPub;
		this.numPages = numPages;
		return this;
	}
};

var mybook = new book.constructor("Divided We Fall", 2014, 275);
console.log(mybook.title);

//Shorterhand version of Inheritance
//JavaScript is chaos
//Technically, functions are also objects
//We can do something like this then.

function computer (screenSize, hardDriveSize, hadNumPad){
	//Never defined any properties, or the object but JS allows us to do this.
	this.screenSize = screenSize;
	this.hardDriveSize = hardDriveSize;
	this.hadNumPad = hadNumPad;
}

var myPC = new computer(18, "1TB", true);
console.log(myPC.screenSize); //Ta dah, mega shorthand version for creating an object.

//Objects are references

var pcone = new computer(12,"500GB", false);
var pctwo = new computer(14, "750GB", true);
var pcthree = pctwo;

console.log(pcone.hardDriveSize);
console.log(pctwo.screenSize);
console.log(pcthree.screenSize);

pctwo.screenSize = 15;
console.log(pctwo.screenSize);
console.log(pcthree.screenSize);

//Objects are not copied
