
/*

Underscore To Camel Case

Write a function to convert a variable name from under_score format to camelCase.

Make sure you support an unlimited number of underscores in the input!


#### Examples:

```js
- INPUT: underToCamel("first_name");
- OUTPUT: "firstName"


- INPUT: underToCamel("my_income_tax_from_2015");
- OUTPUT: "myIncomeTaxFrom2015"
```

*/



// Write Code Below:



function underToCamel(str){
	var newStr = "";
	while (str.indexOf("_") !== -1){
		newStr += str.slice(0 ,str.indexOf("_"));
		str = str.slice(str.indexOf("_") + 1, str.length);// good

		str = str.toUpperCase();
		newStr += str[0];
		str = str.slice(1,str.length);
		str = str.toLowerCase();
	}
	newStr += str;
	return newStr;
}

// console.log(underToCamel("first_name"));
// console.log(underToCamel("my_income_tax_from_2015"));





















































































































// describe('underscore_toCamelCase', function(){
// 	it('underToCamel is a function', function(){
// 		expect(typeof underToCamel).toEqual('function');
// 	});

// 	it('underToCamel returns a number value', function(){
// 		expect(typeof underToCamel("html_css")).toEqual('string');
// 	});

// 	it('removes any "_" characters and makes the next character capitalized', function(){
// 		expect(underToCamel('new_york')).toEqual('newYork');
// 		expect(underToCamel('grace_hopper')).toEqual('graceHopper');	
// 	});

// 	it('removes any "_" characters and makes the next character capitalized for multiple words', function(){
// 		expect(underToCamel('new_york_the_big_apple')).toEqual('newYorkTheBigApple');
// 		expect(underToCamel('u_s_a')).toEqual('uSA');	
// 	});

// });