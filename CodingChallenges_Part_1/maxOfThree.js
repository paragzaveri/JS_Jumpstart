// Max Of Three
// CODING CHALLENGE
// Create the function maxOfThree that evaluates three numbers and returns the largest number out of the three.

// The function takes three number arguments and returns the highest number out of three.



// EXAMPLES
// - INPUT: maxOfThree(5,4,10);
// - OUTPUT: 10


// - INPUT: maxOfThree(7,7,4);
// - OUTPUT: 7



//Can't Use Arrays or Sorting Algorithms
//Not accounting for duplicates

function maxOfThree(num1, num2, num3){
	if (num1 >= num2 && num1 >= num3){
		return num1;
	} else if (num2 >= num1 && num2 >= num3){
		return num2;
	} else{
		return num3;
	}
}




// // Test Specs - Do Not Delete
// describe('maxOfThree', function(){	

// 	it('maxOfThree is a function', function(){
// 		var functionType = typeof maxOfThree;

// 		expect(functionType).toEqual('function');		
// 	})

// 	it('maxOfThree returns a number value', function(){
// 		var returnValue = maxOfThree(5,10,15);
// 				numberType = typeof returnValue;

// 		expect(numberType).toEqual("number");

// 	})

// 	it('returns the greatest (largest) number out of the three number arguments', function(){
// 		var returnValue = maxOfThree(200, 500, 1);

// 		expect(returnValue).toEqual(500);
// 	})

// 	it('returns the greatest (largest) number if two values are equal', function(){
// 		var returnValue = maxOfThree(700, 5, 700);

// 		expect(returnValue).toEqual(700);
// 	})

// 	it('maxOfThree does NOT use Math.max or Math.min', function(){
// 		// spyOn(window, 'call').and.callThrough();
// 		spyOn(Math, 'min').and.callThrough();
// 		spyOn(Math, 'max').and.callThrough();

// 		maxOfThree();

// 		expect(Math.min.calls.any()).toEqual(false)
// 		expect(Math.max.calls.any()).toEqual(false);
// 		// expect(window.call).toHaveBeenCalled();
// 	})

	
// })





