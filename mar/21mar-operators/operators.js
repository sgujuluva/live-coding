// spl escape sequence
/* newline */
let string = "Hello\nWorld";
console.log(string);
/* tab */
let string1 = "Hello\tWorld";
console.log(string1);
/* backspace */
let string2 = "Hello\bWorld";
console.log(string2);

/* operators */
//equality
console.log('is 2 equal to 2?', 2 === 2);
/* non equality */
console.log('is 2 NotEqual to 2?', 2 !== 2);
/* string equality */
console.log('is "hello" equal to "good" ?', "hello" === "good");
console.log('is "hello" equal to "Hello" ?', "hello" === "Hello"); //case sensitive

console.log(`is "2" equal to 2?`, "2" === 2); // false..... string is compared to a number

console.log(`is "2" equal to 2?, "2" == 2`); // true ... 2 equal signs will convert string to number and compares the value
