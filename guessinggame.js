var numOne;
var numTwo;
var numThree;

var ansOne = rannumgen();
var ansTwo;
var ansThree;

var tries = 10;

do{
  ansTwo = rannumgen();
} while (ansTwo === ansOne);
do{
  ansThree = rannumgen()
} while (ansThree === ansOne || ansThree === ansTwo);

// function check(){
$(document).ready(function(){
  $("#check").click(function(){
  
  numOne = $("#num1").val();
  numTwo = $("#num2").val();
  numThree = $("#num3").val();
  
  if(numOne == ansOne){
    changecolor("num1", "green");
  }else if (numOne == ansTwo || numOne == ansThree){
    changecolor("num1", "yellow");
  }else{
    changecolor("num1","red");
  }
if(numTwo == ansTwo){
    changecolor("num2", "green");
  }else if (numTwo == ansOne || numTwo == ansThree){
    changecolor("num2", "yellow");
  }else{
    changecolor("num2","red");
  }
if(numThree == ansThree){
    changecolor("num3", "green");
  }else if (numThree == ansTwo || numThree == ansOne){
    changecolor("num3", "yellow");
  }else{
    changecolor("num3","red");
  }
  tries = tries -1;
  //var triesField = document.getElementById("tries").innerHTML = "You have " + tries + " tries left";
  changetext("tries","You Have " + tries + " tries left");
  
    if (tries === 0){
    //var loss = document.getElementById("win-lose").innerHTML = "YOU LOST!!!";
    changetext("win-lose","You Lose!");
  }
  if (numOne == ansOne && numTwo == ansTwo && numThree == ansThree){
   // var wins = document.getElementById("win-lose").innerHTML = "YOU WON!!!";
    changetext("win-lose","You Win!");
    return;
  }
  });
});
//}

function changecolor(id, color){
  //document.getElementById(id).style.backgroundColor = color;
  $("#" + id).css("background-color",color);
}

function changetext(id, text){
  //document.getElementbyId(id).innerHTML = text;
  $("#" +id).text(text);
}

function rannumgen(){
  var randomnum = Math.random();
  randomnum *= 10;
  return Math.floor(randomnum);
}