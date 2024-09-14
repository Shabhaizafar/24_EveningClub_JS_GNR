// Sets in JavaScript:-
// Sets are collections of unique values, meaning no duplicates are allowed.
//  They provide efficient ways to store and manage distinct elements.
// Sets support operations like adding, deleting, and checking the presence of items, enhancing performance for tasks requiring uniqueness.


// var Arr=  ["Zafar",{fname:"Raj"},{fname:"Raj"},11,12,13,14,11,13,14,15,16,17];
// console.log(Arr);

// How to Create Empty Set
// var mySet = new Set();
// console.log(mySet);


// Create a Set 
// var mySet = new Set([11,12,13,14,11,13,14,15,16,17]);
// var mySet = new Set(Arr);

// console.log(mySet);

// var mySet = new Set("Zafar");
// console.log(mySet);



// var mySet = new Set([11,12,13]);
// console.log(mySet);


//Length ==Size
// console.log(mySet.size);

// mySet.add(100);
// mySet.add(100,300);
// mySet.add(13,200);
// console.log(mySet)


// mySet.clear();
// console.log(mySet);


// mySet.delete(12);
// console.log(mySet);
// console.log(typeof mySet);

// mySet.forEach((a)=>{
//     console.log(a);
// });

// for (const element of mySet) {
//     console.log(element);
// }


//not working
// for (const key in mySet) {
//     console.log(key);
// }

// console.log(mySet[0]);

// console.log(mySet.entries());
// console.log(mySet.keys());
// console.log(mySet.values());

// console.log(mySet.has(133));

//////////////////////////////////////

// Create a Set:

// Create a Set and add the elements 1, 2, 3, 4, 5 to it. Print the Set.
//-----------------------------------
// Check for Element:

// Given a Set, check if it contains the number 3. Print the result.
//-----------------------------------
// Remove an Element:

// Remove the element 4 from a Set. Print the Set before and after removal.
//-----------------------------------
// Convert Array to Set:

// Convert an array [1, 2, 3, 4, 4, 5, 5] to a Set to remove duplicates. Print the Set.
//-----------------------------------

//-----------------------------------
// Iterate over a Set:

// Iterate over a Set and print each element.
//-----------------------------------
// Set Size:

// Find the size of a Set and print it.
//-----------------------------------

//-----------------------------------
// Clear a Set:

// Clear all elements from a Set. Print the Set before and after clearing.
//-----------------------------------
// Set from String:

// Create a Set from a string "hello". Print the Set.
//-----------------------------------
// Unique Values from Array of Objects:

// Given an array of objects, extract unique values of a specific property using a Set.
//-----------------------------------
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];
// // console.log(...people);



// var mySet = new Set(people);
// console.log(mySet);

// mySet.forEach(
//     (a)=>{
//         if(a.age>30)
//         {
//             mySet.delete(a);
//         }
// });

// console.log(mySet);
