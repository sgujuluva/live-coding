// multiplcation using functions
let mulNumber = 5;
function mult(number){
    return number * mulNumber;
}

//let result = mult(6);
console.log(mult(6));




// greetings

function greet(name){
    const message = `hello ${name}`;
    return message;
}

console.log(greet("julia"));
console.log(greet("steve"));


// random greet function

function randomGreet(name){
    const greetings = ["hola", "ciao", "hey", "hi"];
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const greetPerson = greetings[randomIndex];
    const message = `${greetPerson} ${name}`;
    return message;
}

console.log(randomGreet("horse"));


// with multiple arguments

function isMultipleOf(number, multiple){ // parameters / variables inside the paranthesis
    if ( number % multiple === 0){
        return true;
    }else {
        return false;
    }
}

// function call
console.log(isMultipleOf(6,5)); // false   /// arguments / values inside the paranthesis

