/*
## Description - Do You Play The Theremin?

Create the function `doYouPlayTheTheremin`. If your name starts with the letter "S" or "s", you are playing the Theremin!

**Examples**

*INPUT:* `doYouPlayTheTheremin("Nimit")`

*OUTPUT:* `"Nimit does not play the Theremin!";`
<hr>

*INPUT:* `doYouPlayTheTheremin("Scott");`

*OUTPUT:* `"Scott plays the Theremin!"`;
<hr>
## Link to Exercise:
- [Link to `doYouPlayTheTheremin` Exercise](http://repl.it/aVK)
- [Link to Codepen.io with Test Specs]()
*/

function doYouPlayTheTheremin(name){
  if (name[0].toUpperCase() === "S"){
    return (name + " plays the Theremin!");
  } else {
    return (name + " does not play the Theremin!");
  }
}

console.log(doYouPlayTheTheremin("Parag"));
console.log(doYouPlayTheTheremin("Scott"));











































































// /* Test Specs - Do Not Delete */

// describe('doYouPlayTheTheremin', function(){
// 	it('doYouPlayTheTheremin is a function', function(){
// 		var functionType = typeof doYouPlayTheTheremin;

// 		expect(functionType).toEqual('function');
// 	});

// 	it('doYouPlayTheTheremin returns a string value', function(){
// 		var returnValue = doYouPlayTheTheremin('Zeke'),
// 				stringType = typeof returnValue;

// 		expect(stringType).toEqual('string');
// 	});

// 	it('if the arguments first character is an uppercase "S" return the string "argument(name) + plays the Theremin!"', function(){
// 		// return value
// 		var upperCase = doYouPlayTheTheremin('Scott');			

// 		expect(upperCase).toEqual('Scott plays the Theremin!');
// 	});

// 	it('if the arguments first character is a lowercase "s" return the string "argument(name) + plays the Theremin!', function(){
// 		// return value
// 		var lowerCase = doYouPlayTheTheremin('stan');

// 		expect(lowerCase).toEqual("stan plays the Theremin!");
// 	});

// 	it('if the arguments first character is not an uppercase or lowercase "s" return the string "argument(name) + does not play the Theremin!', function(){
// 		var returnValue = doYouPlayTheTheremin("Omri");

// 		expect(returnValue).toEqual("Omri does not play the Theremin!");
// 	});
// });