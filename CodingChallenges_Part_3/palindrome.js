

/*

Palindrome Challenge - JavaScript JumpStart

Have the function **palindrome(str)** take the str parameter being passed, and return the boolean `true` if the argument is a palindrome (meaning that the string is the same forward as it is backward).  Otherwise, return the boolean `false`. 

Punctuation and numbers will not be part of the string.


- INPUT: palindrome("racecar");
- OUTPUT: true


- INPUT: palindrome("animal");
- OUTPUT: false

*/

// Write Code Below



function palindrome(str){
	var newStr = [];
	var bool = true;
	for (var i = str.length -1; i >= 0; i--){
		newStr.push(str[i]);
	}
	for (var i = 0; i < str.length; i++){
		if (newStr[i] !== str[i]){
			bool = false;
		}
	}
	return bool;
}

// console.log(palindrome("racecar"));
// console.log(palindrome("animal"));
















































































































// describe('palindrome', function(){
// 	it('palindrome is a function', function(){
// 		expect(typeof palindrome).toEqual('function');
// 	});

// 	it('palindrome returns a boolean value', function(){
// 		expect(typeof palindrome("codepen")).toEqual('boolean');
// 	});

// 	it('returns true if the argument is a palindrome', function(){
// 		expect(palindrome('racecar')).toEqual(true);
// 		expect(palindrome('madam')).toEqual(true);	
// 	});

// 	it('returns false if the argument is not a palindrome', function(){
// 		expect(palindrome('Mark Davis')).toEqual(false);
// 		expect(palindrome('space jam')).toEqual(false);	
// 	});

// });


