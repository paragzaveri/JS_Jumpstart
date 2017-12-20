/*

## Description - Ask Politely

Create the function `askPolitely` that accepts a sentence as an argument. If the last character of the sentence is a question mark, then make sure the question ends with the word "please". 

If a question is _already_ polite (meaning it already ends with "please") or the sentence is _not_ a question, then return the inputted string without modification.

#####Examples

```js
askPolitely("May I borrow your pencil?");
// returns "May I borrow your pencil please?"

askPolitely("May I ask a question please?");
// returns "May I ask a question please?"

askPolitely("My name is Grace Hopper.");
// returns "My name is Grace Hopper.";
```
Write Code Below */



function askPolitely(sentence){
	if (sentence[sentence.length - 1] === "?"  && sentence.slice(-7,-1) !== "please"){
		return sentence.slice(0, -1) + " please" + "?";
	} else
	{
		return sentence;
	}
}

//without politeness
console.log(askPolitely("May I borrow your pencil?"));
//politeness included
console.log(askPolitely("May I borrow your pencil please?"));
//rude, no intent to be polite
console.log(askPolitely("Yo homeboy, let me hold that pencil."));






// describe('askPolitely', function(){
	
// 	it('askPolitely is a function', function(){
// 		var functionType = typeof askPolitely;

// 		expect(functionType).toEqual('function');
// 	});

// 	it('askPolitely returns a string value', function(){
// 		var returnValue = askPolitely("Hello World!"),
// 				stringType = typeof returnValue;

// 		expect(stringType).toEqual("string");
// 	});

// 	it("if the string argument's last character is a \"?\", the last word should be please", function(){
// 		expect(askPolitely("May I borrow your pencil?")).toEqual("May I borrow your pencil please?");
// 		expect(askPolitely("Can you go to the store?")).toEqual("Can you go to the store please?");
// 	});
// 	it("if the string argument's last character is a \"?\", and the last word is please, return the sentence without modifications", function(){
// 		expect(askPolitely("May I ask a question please?")).toEqual("May I ask a question please?");
// 		expect(askPolitely("May I borrow a dollar please?")).toEqual('May I borrow a dollar please?');
// 	});
// 	it("if the last character is not a \"?\", do not modify the sentence", function(){
// 		expect(askPolitely("My name is Grace Hopper.")).toEqual("My name is Grace Hopper.");
// 		expect(askPolitely("I attend Fullstack Academy!")).toEqual("I attend Fullstack Academy!");
// 	});
// });
