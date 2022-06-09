let message = "abcdefgh";
console.log(message.slice(-3, -1));
/* random integ between 5 and 10 */
let maximum= 10;
console.log(`Random integers between 5 and 15`, Math.floor(Math.random() * maximum) + 5); // 5 to 15
console.log(`Random integers between 5 and 10`, Math.floor(Math.random() * (10 -5)) + 5) ; // 5 to 10

//random numbers between 8 and 15 (15 not included)  total 7 numbers starting from 8---- { 8,9,10,11,12,13,14}
let min = 8;
let max = 15;
console.log(`The random numbers between ${min} and ${max} is:` , Math.floor(Math.random() * (max - min) + min));  // 8,9,10,11,12,13,14
console.log(`The random numbers between ${min} and ${max} is:` , Math.floor(Math.random() * (max - min + 1) + min));  // 8,9,10,11,12,13,14,15

/* logical operator
AND */

let hour = 9;
let day = "friday";
console.log(hour >=9 && day != "sunday" ? "go to work" : "sleep more");

/* truthy / falsy */
console.log("hello" ? "1" : "2"); // true -----1
console.log("" ? "1" : "2") ;  // false ----2
console.log(-1 ? "1" : "2"); // true -----1
console.log(0 ? "1" : "2"); // false-----2

console.log("hello" || "world"); // hello
console.log("hello" || 0); // hello
console.log(-0 || 0); // 0

//increment
let x = 3;
y = x++;
console.log(x);
console.log(y);

let a= 3;
console.log(a **= 0);