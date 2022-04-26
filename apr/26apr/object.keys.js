// Object.keys()
 // returns an array of objects with all the keys inside it. 

 //Object.values()
 // returns an array of objects with all the values inside it.

 // Object.entries()
 //The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
 // o/p.... array in an array

/*  Object.fromEntries()

The Object.fromEntries() method transforms a list of key-value pairs into an object. */

 /// converting object into arrays for looping conditions


 const book = {
     title : "abc",
     author : "jhlkjthlk",
     page : 99
 }

 console.log(Object.keys(book)); // ["title", "author", "page"]
 console.log(Object.values(book)); // ["abc", "jhlkjthlk", 99]
 console.log(Object.entries(book)); // [ ["title","abc"] , ["author","jhlkjthlk"], ["page",99]]

 let bookEntries = Object.entries(book); // converted into array of array

 console.log(Object.fromEntries(bookEntries)); // converted into object from array
// { title : "abc" , author :"jhlkjthlk", page:99 }




