//arrays---- original modified...

let a = [1,2,3];
let b = a;
b.push(4);

console.log(a);
console.log(b);


// arrays original not modified...

let a1 = ["x","y","z"];

function copyArray(array,newItem){
    result = [];

    for(let i of array){

        result.push(i);

    }

    result.push(newItem);
    return result;
}
console.log(copyArray(a1, "bla"));
console.log(a1);