class Animal{
constructor(type,sound,age){
    this.type = type;
    this.sound = sound;
    this.age = age;
}
}
class Animalgroup{
    constructor(type){
    this.type = type;
    this.result = [];
    }
    addAnimals(animal){
        this.result.push(animal);
    }
}
let pet = new Animalgroup("Pets");
let wild = new Animalgroup("Wild Animals");

let animal1 = new Animal("cat" ) // how to add animals?

// otherway
/*  let animal1 = {
    animal : "cat",
    sound : "meow",
    age : 1,
} 
let animal2 = {
    animal : "dog",
    sound : "woof",
    age : 3,
}
let animal3 = {
    animal : "cow",
    sound : "moo",
    age : 8,
}
let animal4 = {
    animal : "lion",
    sound : "roar",
    age : 5,
}
let animal5 = {
    animal : "tiger",
    sound : "roar",
    age : 7,
}
 */
pet.addAnimals(animal1);
pet.addAnimals(animal2);
pet.addAnimals(animal3);

console.log(pet);

wild.addAnimals(animal4);
wild.addAnimals(animal5);

console.log(wild);