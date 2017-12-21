
/*
Repeat A String

Create a function "repeat" that accepts two arguments, the string to repeat and the a number that represtents how many times to repeat the string argument.  Return a string that concatenates all the times the string is repeated.

*NOTE: Do NOT use the Array.prototype.repeat*

**Examples**
	
- INPUT: `repeat("yo",4);`
- OUTPUT: `'yoyoyoyo'`

- INPUT: `repeat("yo",0);`
- OUTPUT: `''`

- INPUT: `repeat("bye",6);`
- OUTPUT: `'byebyebyebyebyebye'`
*/

// Write Code Below


function repeat(str, num){
	var newStr = "";
	for (var i = 0; i < num; i++){
		newStr += str;
	}
	return newStr;
}

// console.log(repeat("yo", 4));



























































































































// describe("repeat", function() {
//     it("is empty with 0 repeats", function() {
//       expect(repeat("yo", 0)).toEqual("");
//     });
//     it("repeats its argument once", function() {
//       expect(repeat("yo", 1)).toEqual("yo");
//     });
//     it("repeats its argument twice", function() {
//       expect(repeat("yo", 2)).toEqual("yoyo");
//     });
//       it("repeats its argument many times", function() {
//       expect(repeat("yo", 10)).toEqual("yoyoyoyoyoyoyoyoyoyo");
//     });
//     it('does not use the String.prototype.repeat method', function(){
//       spyOn(String.prototype, 'repeat').and.callThrough();

//       repeat('yo',3);

//       expect(String.prototype.repeat.calls.any()).toEqual(false);
//     });
// });
