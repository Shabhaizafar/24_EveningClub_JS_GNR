// - Spread operator in objects.    (...)
// var obj = {
//     fname :"Raj",
//     lname : 'Patel',
//     Age :12
// };
// console.log(obj);

// var obj2 = obj;
// console.log(obj2);

// delete obj2['Age'];
// console.log(obj);
// console.log(obj2);

// var obj2 = {...obj};
// console.log(obj2);
// delete obj['Age'];
// console.log(obj);
// console.log(obj2);

//    - Object Destructuring.


// var CollegeStudent1 = {
//     fname :"Raj",
//     lname : 'Patel',
//     Age :12,
//     Address : {
        
//         city : {
//             city1 : "AMD",
//             city2 :"GNR"
//         },
//         state : "Gujarat"
//     }
// };
// console.log(CollegeStudent1.Age);

// var {Age} = CollegeStudent1;
// var {Age:years,...newobj} = CollegeStudent1;
// console.log(years,newobj);



// - Nested Destructuring.
// var {Address:{city:{city1},state}} = CollegeStudent1;

// // console.log(CollegeStudent1.Address);
// // console.log(CollegeStudent1.Address.city);

// console.log(city1);
// console.log(state);





//////////////////////////////////

// ### Spread Operator Practice Questions:
// 1. **Combine Arrays**: Write a function that combines two arrays using the spread operator.
// 2. **Pass Array Elements**: Create a function that takes an array of numbers and passes each element as arguments to another function using the spread operator.
// 3. **Copy Arrays**: Demonstrate how to make a copy of an array using the spread operator.




// ### Destructuring in Objects Practice Questions:
// 4. **Extract Object Properties**: Write a function that extracts specific properties (`name` and `age`) from an object using destructuring.
// 5. **Function Parameters**: Implement a function that uses destructuring to extract parameters from an object passed as an argument.
// 6. **Default Values**: Create a function that uses destructuring with default values to handle missing properties in an object.




// ### Nested Destructuring Practice Questions:
// 7. **Nested Object Destructuring**: Extract nested properties (`name` and `address`) from an object that contains another object.
// 8. **Nested Array Destructuring**: Destructure nested arrays to extract specific values into variables.
// 9. **Function Return**: Write a function that returns an object with nested properties and use destructuring to extract those properties in the calling code.
