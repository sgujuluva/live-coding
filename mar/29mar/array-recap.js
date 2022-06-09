let animals = [ 'dog', 'cat', 'mouse'];
let animalsCopy = animals;
animalsCopy.push("giraffe");
console.log(animals);

let number = ['1', '2', '3'];
let numberOther = ['1', '2', '3', '4'];
number = numberOther;
console.log(number); // 1,2,3,4
console.log(numberOther);// 1,2,3,4

let letters = [ 'a', 'b'];
let lettersSame = [ 'a', 'b'];
console.log(letters === lettersSame); // false... as it is 2 different arrays
console.log(letters == lettersSame); // false

let a = 2;
let b = 5;
let c = 10;
if (a > b > c){
    console.log ( "the greatest is:" ,a);
}else {
    console.log ( "the greatest is:" ,b);
}