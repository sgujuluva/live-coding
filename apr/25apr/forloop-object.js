let product = {
    title : "tshirt",
    size : [ "s","m","l"],
}
// for loop

for( let i = 0; i < product.size.length ; i++){
    console.log(`-${product.size[i]}`);
}
console.log(product.size[0]);

// cannot find the indexof of an object

// console.log(indexOf(product.title));----gives error

let animals = ["cat", "cow","cougar","dog", "giraffe"];

// for...of...loop

for(let animal of animals){
    if(animal.startsWith("d")){
        console.log(animal);
    }
}