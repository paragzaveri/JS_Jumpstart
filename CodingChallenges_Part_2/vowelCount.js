/*
#### Challenge - Vowel Count

Create the function **vowelCount(str)** that takes a **str** parameter and returns the number of vowels the string contains (ie. "Fullstack Academy" would return 5).  

Do not count 'y' as a vowel for this challenge.

<br>

####Examples

```js
- INPUT: vowelCount("Good Job");
- OUTPUT: 3


- INPUT: vowelCount('Yankees');
- OUTPUT: 3
```

*/

// Write Code Below:


//**************Solution 1

function vowelCount(str){
	var count = 0;
	for (var index = 0; index != str.length; index++){
		if (str[index].toLowerCase() === "a" || str[index].toLowerCase() === "e" 
			|| str[index].toLowerCase() === "i"|| str[index].toLowerCase() === "o" 
			|| str[index].toLowerCase() === "u") {
			count++;	
		}
	}
	return count;
}

// console.log(vowelCount("Angular"));


//***************Solution 2

function vowelCount(str){
	var vowels = 'aeiou';
	var count = 0;

	for (var i = 0; i < str.length; i++){
		if (vowels.indexOf(str[i].toLowerCase()) >= 0){
			count++;
		}	
	}
	return count;
}


// console.log(vowelCount("Angular"));




















































































































// describe('vowelCount', function(){
// 	it('vowelCount is a function', function(){
// 		expect(typeof vowelCount).toEqual('function');
// 	});

// 	it('vowelCount returns a number value', function(){
// 		expect(typeof vowelCount("Grace Hopper")).toEqual('number');
// 	});

// 	it('returns the total amount of vowels in the string argument', function(){
// 		expect(vowelCount('JavaScript')).toEqual(3);
// 		expect(vowelCount('Angular')).toEqual(3);
// 		expect(vowelCount('New York City')).toEqual(3);
// 	});

// });