/*
Sum Of Digits:


Create the function **sumOfDigits** that adds individual digits of a number, and returns the sum.

<br>

####Examples:

```js
- INPUT: sumOfDigits(414);
- OUTPUT: 9


- INPUT: sumOfDigits(2913);
- OUTPUT: 15
```

<br>
####Tip:

You may need to use the following methods or operators in your solution:

 - [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) - Rounds any floating point number (decimal) down to closest integer value (non-decimal number).  For example:


>> ```js
>> Math.floor(5.99) ==> 5
>> Math.floor(10.2) ==> 10
>> ```


*/

// Write Code Below:




function sumOfDigits(num){
	var divisor = 10;
	var sum = 0;
	while(num !== 0){
		sum += num % divisor;
		num = Math.floor(num/divisor);
	}
	return sum;
}

console.log(sumOfDigits(1234));









































































































































// describe('sumOfDigits', function(){
// 	it('sumOfDigits is a function', function(){
// 		expect(typeof sumOfDigits).toEqual('function');
// 	});

// 	it('sumOfDigits returns a number value', function(){
// 		expect(typeof sumOfDigits(201)).toEqual('number');
// 	});

// 	it('adds each individual digit of the number argument and returns the sum', function(){
// 		expect(sumOfDigits(212)).toEqual(5);
// 		expect(sumOfDigits(2913)).toEqual(15);
// 		expect(sumOfDigits(568912)).toEqual(31);	
// 	});

// });