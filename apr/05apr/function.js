// function declaration

//different ways to declare

// 1. function keyword

let result1 = sum(5,8);  // can call the function before declaring

function sum(a,b){
    return a + b;
}

let result2 = sum (2,3); 

// 2nd way

let multiply = function(a,b){
    return a * b;
}
let multiplyResult = multiply (2,3);

// 3rd way Arrow function

let multiplyArrow = (a,b) => {
    return a*b;
}
// if the body has only one return then we can write it as:

let multiplyArrow1 = (a,b) => a*b;

// if the function has only one parameter , we can remove the round paranthesis.

let multiplyReturn = (number) => number / 10;

// can rewrite line no:33 as

let multiplyReturn1 = number => number / 10;

console.log(multiplyReturn(50));
console.log(multiplyReturn1);