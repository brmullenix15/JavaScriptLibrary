// -----------------Lesson: The DOM-----------------------
//--------------------------------------------------------
//--------------------------------------------------------

/*What we've done so far is fun, but how do we display our awesome JS on a website?

The Document Object Model is created when a web page loads HTML
  It  defines the logical structure of an HTML document and how it is accessed and manipulated
  Using JS you can do stuff like.....

        change all the HTML elements in the page
        change all the HTML attributes in the page
        change all the CSS styles in the page
        remove existing HTML elements and attributes
        add new HTML elements and attributes
        react to all existing HTML events in the page
        create new HTML events in the page


//--------------------------------------------------------
//--------------------------------------------------------
DOM Access Methods*/

//Finding DOM nodes by id:
        //document.getElementById(id);
        
//Finding DOM nodes by tag name:
        //document.getElementsByTagName(tagName);
        
//Finding DOM nodes by class name:
        //document.getElementsByClassName(className);
//Finding DOM nodes by query selector:
          //document.querySelector(cssQuery);
          //document.querySelectorAll(cssQuery);

     
//---------JavaScript and use Chrome Dev Tools to see the console.log

//By ID
var hobbiesList = document.getElementById('hobby-list');
console.log(hobbiesList);

//By Tag Name
var hobbies = document.getElementsByTagName('li');
console.log(hobbies);
console.log(hobbies[0].innerHTML);//value of the first li

//By Class Name
var list = document.getElementsByClassName('hobby');
console.log(list);

//By CSS Query
var firstHobby = document.querySelector('ul li.hobby');//Grabs the first one.
console.log(firstHobby);
var secondHobby = document.querySelectorAll('ul li.hobby');//Grabs all with that match the query.
console.log(secondHobby);

//Rendering to HTML
//Each DOM node has an innerHTML attribute.
//You cans set innerHTML yourself to replace the contents of the node.

function favoritesong(){
	document.getElementById("favorite").innerHTML = "No Favorites";
}
favoritesong();

function worstsong(){
	document.getElementById("worst").innerHTML = "Old Justin Beiber...ew";
}
function bestgenre(){
	document.getElementById("best").innerHTML = "Hunters by Galantis";
}
worstsong();
bestgenre();

function addsong(x){
	document.getElementById("best").innerHTML += x;
}
addsong(" and Too Cold by Trip Lee");

//--------------------------------------------------------
//MORE HTML MANIPULATIONS

// Adding and Deleting Elements

// document.createElement(element)      Create an HTML element
// document.removeChild(element)        Remove an HTML element
// document.appendChild(element)        Add an HTML element
// document.replaceChild(element)       Replace an HTML element
// document.write(text)                 Write into the HTML output stream

function addButton(){
	var btn = document.createElement("BUTTON"); //Creates a button element.
	var text = document.createTextNode("I JUST GOT ADDED!!");//Creates a Text Node.
	btn.appendChild(text);
	document.body.appendChild(btn);
}

function removeList(){
	var list = document.getElementById('Music');
	document.body.removeChild(list);
}

// function watertowine(){
// 	var textnode = document.createTextNode("Wine!!!");
// 	var item = document.getElementById("myList").childNode[0];
// 	item.replaceChild(textnode,item.childNode[0]);
// }

function writeWords(){
	document.write("Brett Added me!!!");
}

///-------------------------------------------------------
//--------------------------------------------------------
// -----------------Challenge: The DOM--------------------
//--------------------------------------------------------
//--------------------------------------------------------


// Using codepen.io make a simple tip calculator using input fields and DOM references to calculate a tip


// Options
// Split it amongst x people
// Add sales tax
// Convert everything to another currency 


// Here's an example 
// http://codepen.io/heatherromney/pen/GpBzJx

// Barriers 
// You'll need a button with onClick="" that calls a function