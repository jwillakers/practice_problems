
 // -------------------------------------------------------------------------------------------------------------------
 // PROBLEM #1:
 // a) create a String variable called myName and assign it to your name.
 // b) create a number variable myNumber and assign it to your favorite number
 // c) create a boolean variable myBoolean and assign it to a boolean value
 //
 // log each variable to the console. you should have one console.log statement for each.
 // -------------------------------------------------------------------------------------------------------------------
var myName = "Jennifer Williams"
	console.log(myName);
var myNumber = 7
	console.log(myNumber);
var myBoolean = "true"
	console.log(myBoolean);


 // -------------------------------------------------------------------------------------------------------------------
 // PROBLEM #2:
 // a) create a new variable called numsAdded and assign it to the addition of num1 and num2.
 // b) create a new variable numsSubtracted and assign it to the subtraction of num1 from num2
 // c) create a new variable numsMultiplied and assign it to the multiplication of num1 and num2
 // d) create a new variable numsDivided and assign it to the division of num1 by num2
 // 
 // log each variable to the console
 // -------------------------------------------------------------------------------------------------------------------
 var num1 = 20;
 var num2 = 5;
 var numsAdded = num1 + num2;
 	console.log (numsAdded)
 
 var numsSubtracted = num1 - num2;
 	console.log (numsSubtracted)
 
 var numsMultiplied = num1 * num2;
 	console.log(numsMultiplied)
 
 var numsDivided  = num1 / num2;
 	console.log(numsDivided)


 // -------------------------------------------------------------------------------------------------------------------
 // PROBLEM #3: create a new variable twentyFour and assign it to the number 24 using only the variable eight and the + operator.
 // log it to the console. hint: javascript can handle complex mathematical equations with multiple operators
 // -------------------------------------------------------------------------------------------------------------------
 var eight = 8;
 var twentyFour = eight + eight + eight;
 console.log (twentyFour)

 // -------------------------------------------------------------------------------------------------------------------
 // PROBLEM #4: the code below currently assigns the variable equationOutput to the number -30. Add parentheses so that it will assign 120
 // (hint: JavaScript follows the PEMDAS rules for order of operations)
 // -------------------------------------------------------------------------------------------------------------------
 var equationOutput = (30 - 10) * 6;
 console.log(equationOutput);


 // -------------------------------------------------------------------------------------------------------------------
 // PROBLEM #5: create a new String variable called combinedStrings and assign it to str1 concatinated with str2.
 // -------------------------------------------------------------------------------------------------------------------
 var str1 = "This is a string.";
 var str2 = "This is another string."
 var combinedStrings = str1.concat(str2);
 	console.log(combinedStrings)





 // -------------------------------------------------------------------------------------------------------------------
 // PROBLEM #6: create two new String variables and a third new variable that is the first two concatinated, separated by a space.
 // log it to the console.
 // -------------------------------------------------------------------------------------------------------------------
 	var str1 = "My dog is ";
 	var str2 = "a big dog";
 	var str3 = str1.concat(str2);
 		console.log(str3)

 // -------------------------------------------------------------------------------------------------------------------
 // PROBLEM #7: reassign a to have the value of b.
 // -------------------------------------------------------------------------------------------------------------------

 var a = true;
 var b = false;
 var a = false;
 	console.log(a)

 // -------------------------------------------------------------------------------------------------------------------
 // PROBLEM #8: complete the code below so that bool1 and bool2 are reassigned to each other's values, i.e. switch values,
 // without using true or false explicitly again.
 // hint: google "switch variable values javascript" if you get stuck
 // -------------------------------------------------------------------------------------------------------------------

 var bool1 = true;
 var bool2 = false;

 bool2 = [bool1, bool1 = bool2][0];
 console.log(bool1)
 console.log(bool2)
 //tempBool has the value true
 var tempBool = bool1;