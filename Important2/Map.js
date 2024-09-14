// Map : 
// The JavaScript Map object holds key-value pairs and preserves the original insertion order.
// It supports any value, including objects and primitives, as keys or values. 
//This feature allows for efficient data retrieval and manipulation, making Map a versatile tool for managing collections.

// On iterating a map object returns the key, and value pair in the same order as inserted.



// var obj = {
//     fname : "Raj",
//     1 : "123",
//     true : false
// }
// console.log(obj);

// for (const key in obj) {
//     console.log(key ,typeof key);
// }

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];
// How to Create a Map : 
var myMap = new Map();
console.log(myMap);

console.log(typeof myMap);

//How to Add Properties in a Map

myMap.set("Fname","Raj");
myMap.set(1,"Raj");

// console.log(myMap);

myMap.forEach(
    (value,key)=>{
        console.log(key,typeof key);
    }
);


console.log(myMap.get("Fname"));

// myMap.clear();
// console.log(myMap);

console.log(myMap.entries());
console.log(myMap.keys());
console.log(myMap.values());

console.log(myMap.size);
console.log(myMap.has("Raj"));

//////////////////////////
// Create a Map:

// Create a Map and add key-value pairs. Print the Map.
/////////////////////
// Check for Key:

// Given a Map, check if it contains a specific key. Print the result.
/////////////////////

// Remove a Key:

// Remove a key from a Map. Print the Map before and after removal.
/////////////////////

// Convert Array to Map:

// Convert an array of key-value pairs to a Map. Print the Map.
/////////////////////

// Iterate over a Map:

// Iterate over a Map and print each key-value pair.
/////////////////////

// Map Size:

// Find the size of a Map and print it.
/////////////////////

// Clear a Map:

// Clear all entries from a Map. Print the Map before and after clearing.
/////////////////////

// Map from String:

// Create a Map from a string, where each character is a key and its position is the value. Print the Map.
/////////////////////