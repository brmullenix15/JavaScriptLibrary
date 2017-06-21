//Bronze
function wordstring (word1, word2){
	console.log(word1 + " " + word2);
}
wordstring("Blah", "Blurp");

//Silver
function monthlybill (water, power, heat, propertytax){
	var waterbill = water * 30;
	var powerbill = power * 30;
	var heatbill = heat * 30;
	var totalbill = heatbill + powerbill + waterbill + propertytax;
	return "Your total bill for the month is: $" + totalbill +" This bill could be higher, good job on being efficient!";
}
console.log(monthlybill(200,15,20,250));

//Gold
function sodacost(numSodas, priceSodas){
	var TotalCost = ((priceSodas * .07) + priceSodas) * numSodas;
	return numSodas + " sodas will cost you $" + TotalCost;
}
console.log(sodacost(100, 0.99));