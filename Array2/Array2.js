// const Arr = [30,12,40,11,14,7,89];
// console.log(Arr);
// //    - Filter.
// var ans = Arr.filter(
//     (a)=>{
//         return a>25;
// });

// console.log(ans);

// const students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 19 },
//     { name: "Diana", age: 21 },
//     { name: "Eve", age: 20 },
//     { name: "Frank", age: 23 },
//     { name: "Grace", age: 22 },
//     { name: "Hannah", age: 18 },
//     { name: "Ian", age: 21 },
//     { name: "Judy", age: 20 }
//   ];

//   console.log(...students,);
//   console.log("");
// var filterstudents = students.filter(
//     (a)=>{
//         return a.age>20;
//     }
// );

// console.log(...filterstudents);


///////////
//    - Foreach method.
const Arr = [30,12,40,11,14,7,89];
console.log(Arr);

var ans1 =  Arr.forEach(
    (a)=>{
        return a>20;
});


var ans2 = Arr.filter((a)=>{
    return a>20;
});
console.log(ans1);
console.log(ans2);








///////////////////////////////////////////////
//    - Reduce.
//    - Find.
//    - Splice method.
//    - Map method.


///////////////////////////////////////////
// sort() Method:
// Sorting Numbers: Write a function to sort an array of numbers in ascending order using the sort() method.

// Sorting Strings: Sort an array of strings alphabetically (case-sensitive).

// Custom Sorting: Sort an array of objects based on a specific property (e.g., age, name).

// Reverse Sorting: Sort an array of numbers in descending order using sort().

////////////////////////////
//every

// Check Array of Numbers: Write a function that checks if all elements in an array are numbers using the every() method.

// String Length Check: Verify if all strings in an array have a length greater than 3.

// Divisibility Check: Determine if all elements in an array of numbers are divisible by 2.

//////////////////////////
//some

// Check for Even Numbers: Write a function that checks if there are any even numbers in an array using the some() method.

// String Starting with Specific Letter: Determine if there is any string in an array that starts with the letter 'A'.


//////////////////////////////////////
// 2. **Filter Odd Numbers**: Filter out all odd numbers from an array using `filter`.



//////////////////////////////////////////

// 2. **Fill:**
//    - Create an array of 5 elements and use `Array.prototype.fill` to replace all elements with a specific value (e.g., `'filled'`).

// 10. **Fill:**
//     - Create an array of 10 elements and use `Array.prototype.fill` to replace all elements with the numbers from 1 to 10.
