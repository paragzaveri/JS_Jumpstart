/*
#### Reverse A String

Create the function "reverseString" that reverses a string, and returns the value of the reversed string. 

*NOTE: Do not use the .reverse() method*

#### Examples

```js
- INPUT: reverseString("hello");
- OUTPUT: 'olleh'
```

*/

// Write Code Below:





function reverseString(str){
	var reversedStr = "";
	for (var i = str.length -1; i >= 0; i--){
		reversedStr += str[i];
	}
	return reversedStr;
}

// console.log(reverseString("hello"));






























































































































// describe('reverseString', function(){
// 	it('reverseString is a function', function(){
// 		expect(typeof reverseString).toEqual('function');
// 	});

// 	it('reverseString returns a string value', function(){
// 		expect(typeof reverseString("Grace Hopper")).toEqual('string');
// 	});

// 	it('reverses a string (the string it reverses is the argument)', function(){
// 		expect(reverseString('Fullstack Academy')).toEqual("ymedacA kcatslluF");
// 		expect(reverseString('Hello World')).toEqual("dlroW olleH");
// 	});
	
// 	it('does not use Array.prototype.reverse', function(){
// 		spyOn(Array.prototype, 'reverse').and.callThrough();

// 		reverseString('Hello World');

// 		expect(Array.prototype.reverse.calls.any()).toEqual(false)
// 	});
// });