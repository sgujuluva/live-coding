// with arrays
// find largest num
const numbers = [ 1,4,-3,8];

let max = numbers[0];

for ( let i = 0; i< numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i];
    }
}

console.log("max is:", max);



