// Last Digit
// Create the function lastDigit that accepts two non-negative integer values and returns true if they have the same last digit, such as 27 and 57.

// The function accepts two non-negative integer arguments and returns true or false if they have the same last digit.

// Examples:

// INPUT: lastDigit(22,32); OUTPUT: true

// INPUT: lastDigit(77, 999); OUTPUT: false

// INPUT: lastDigit(33,3); OUTPUT: true


function lastDigit(num1, num2){
	if (num1 % 10 === num2 % 10){
		return true;
	} else {
		return false;
	}
}


console.log(lastDigit(22,32));
console.log(lastDigit(77,999));
console.log(lastDigit(33,3));


// describe("lastDigit", function() {
//   it("lastDigit is a function", function() {
//     var functionType = typeof lastDigit;

//     expect(functionType).toEqual("function");
//   });

//   it("lastDigit returns a boolean value (true or false)", function() {
//     var returnValue = lastDigit(22, 53),
//       booleanType = typeof returnValue;

//     expect(booleanType).toEqual("boolean");
//   });

//   it("if the two number arguments passed to lastDigit have the same last two digits (ones column) return the boolean value true", function() {
//     var returnValue = lastDigit(352, 7892);

//     expect(returnValue).toEqual(true);
//   });

//   it("if the last two digits (ones column) of the number arguments passed to last digit are NOT the same return the boolean value false", function() {
//     var returnValue = lastDigit(357, 7894);

//     expect(returnValue).toEqual(false);
//   });
// }); 

