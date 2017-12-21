
/*
Factorial

Create the function **factorial(num)** that returns the factorial of the parameter.

Not sure what a factorial is? Check [this link](http://www.rapidtables.com/math/algebra/Factorial.htm) for a refresher!

<br> 

####Example:

- INPUT: factorial(4);
- OUTPUT: 24

-INPUT: factorial(5);
-OUTPUT: 120

<br>
<hr>
<br>


*/

// Write Code Below



function factorial(num){
	var total = num;
	while(num > 1){
		total *= --num;
	}
	return total;
}


// console.log(factorial(3));






















































































































// describe('factorial', function(){
// 	it('factorial is a function', function(){
// 		expect(typeof factorial).toEqual('function');
// 	});

// 	it('factorial returns a number value', function(){
// 		expect(typeof factorial(5)).toEqual('number');
// 	});

// 	it('returns the factorial of the number argument', function(){
// 		expect(factorial(5)).toEqual(120);
// 		expect(factorial(7)).toEqual(5040);
// 		expect(factorial(10)).toEqual(3628800);
// 	});

// });


