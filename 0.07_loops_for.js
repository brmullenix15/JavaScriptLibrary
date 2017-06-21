//For loops are similar to while loops in that we are able to repeat statements. However, they are more specialized.

//Basic set up:
//for(counter; condition; increment;){
//	Code to be run
//}

//for (var i = 1; i < 50; i += 5){    Count by five until 50 starting at 1
//	console.log(i);
//}

//for (var i = 0; i <= 100; i += 5){  Count by 5 starting at 0 until 100
//	console.log(i);
//}

//for (var i = 3; i < 40; i += 7){    Start at 3 and count up to 40 by 7
//	console.log(i);
//}

//Break Statement <- Covered in switch earlier
//breaks are used to prematurely exit a loop

for (var i = 0; i < 20; i++){
	console.log("Testing: " + i);
	if (i === 13){
		console.log("Found 13");
		break;
	}
}

//for in loops
//do while loops, these are fun to use