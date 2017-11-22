//problem 1: change the conditional below so that "conditional evaluated to true" will be logged to the console

if (false){
  console.log("conditional evaluated to true");
} else {
  console.log("conditional evaluated to true");
}



//problem 2: change the operator in the conditional below so that "conditional evaluated to true" will be logged to the console
//hint: learn the difference between the comparison AND operator and the comparison OR operator

if (true !== false){
  console.log("conditional evaluated to true")
} else {
  console.log("conditional evaluated to false");
}


//problem 3: add an else if statement to the code below that will log "num is 2" if num is equal to 2.

var num = 2;

if (num == 1){
  console.log("num is 1.");
} 
else if
  (num === 2) {
  console.log("num is 2.");
}

else{
  console.log("num is something else.")
}



//problem 4: write a conditional statement that will log "true" if randomInt is less than 14, and "false" otherwise

//chooses a random number between 1 and 19
var randomInt = Math.floor(Math.random() * 20);
console.log("randomInt value is " + randomInt);

if (randomInt < 14) {
  console.log("true");
}
else {
  console.log("false");
}




//problem 5: write a conditional statement that will log "true" if randomInt is between 3 and 14, and "false" if not
//hint: you will need to use the comparison AND operator

//chooses a random number between 1 and 19
randomInt = Math.floor(Math.random() * 20);
  console.log("randomInt value is " + randomInt);

if (randomInt >3 && randomInt<14) {
  console.log("true");
}

else {
  console.log("false");
}




//problem 6: write a conditional statement that will log "true" if num is less than 4 or more than 13, and false if not


randomInt = Math.floor(Math.random() * 20);
console.log("randomInt value is " + randomInt);

if (randomInt <4 || randomInt>13) {
  console.log ("true");
}

else {
  console.log("false");
}




//problem 7: write a conditional statement that will log "less than or equal to 2" if randomInt is less than or equal to 2,
//"less than or equal to 8" if randomInt is between 2 and 8, and "greater than 8" if randomInt is greater than 8

randomInt = Math.floor(Math.random() * 20);
console.log("randomInt value is " + randomInt);

if (randomInt <=2) {
  console.log("less than or equal to 2.");
}

else if (randomInt >2 && randomInt <=8) {
  console.log ("less than or equal to 8.");
}

else if (randomInt >8) {
  console.log("greater than 8.");
}





//problem 8: the code below will log "a is equal to 2" to the console.
//fix the conditional statement so that "a is not equal to 2" will be written to the console.
//hint: if it isn't immediately obvious what's wrong here, refer to https://www.w3schools.com/jsref/jsref_operators.asp
//and read about comparison operators and assignment operators

var a = 1;

if (a != 2){
	console.log("a is equal to 2");
} 