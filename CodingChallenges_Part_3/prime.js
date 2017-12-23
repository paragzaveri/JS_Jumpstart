
/*
Prime - Challenge:

The function `prime(num)` accepts a number argument and returns the boolean `true` if the number is a prime number otherwise it returns return `false`. 

Examples:


- INPUT: prime(5);
- OUTPUT: true


- INPUT: prime(10);
- OUTPUT: false


*/

// Write Code Below


function prime(num) {
	for (var i = 2; i < num; i ++){
		if (num % i === 0){
			return false;
		}
	}
	return true;
}









































































































































































// describe('prime', function(){
//   it('prime is a function', function(){
//     expect(typeof prime).toEqual('function');
//   });

//   it('prime returns a boolean', function(){
//     expect(typeof prime(10)).toEqual('boolean');
//   });

//   it('prime returns `true` if the number is prime', function(){
//     expect(prime(5)).toEqual(true);
//     expect(prime(7)).toEqual(true);
//   });

//   it('prime returns `false` if the number is not prime', function(){
//     expect(prime(24)).toEqual(false);
//     expect(prime(56)).toEqual(false);  
//   });
// });


