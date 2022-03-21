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


//properties --- length
let greeting = "hello world";
console.log(greeting.length);

/* string methods */
// method - touppercase()

console.log(greeting.toUpperCase()); // HELLO WORLD
console.log("hey".toUpperCase()); // HEY

// substring --method // start ---start exact index...... end index- letter wanted index + 1
let word = "hello world";
console.log(word.substring(0,5)); // hello
console.log(word.substring(0,4)); // hell
console.log(word.substring(2,5)); // llo
console.log(word.substring(6,11)); // world
console.log(word.substring(0)); // hello world

console.log(word.slice(2,5)); // llo
console.log(word.slice(0,4)); // hell
console.log(word);

