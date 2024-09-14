// - Dot ( . ) vs Bracket ( [] ) Notation.

// var obj = {
//         fname : "Raj",
//         lname : "Shah",
//     Age : 12,
//     Gender : "Male",
//     key : "sdrt"
// };

// Loop ??
// basic for  loop   index ?       ===>     not poosible
// for in loop  no index      100000%    
// for of loop  with index       ===>     not poosible
// foreach      only workable for Array  ===>     not poosible
// while      loop   index ?       ===>     not poosible  
// do-while   loop   index ?       ===>     not poosible

// console.log(obj.fname);
// console.log(obj["lname"]);


// - Iterate objects.

// for (const key in obj) {
//     // console.log(key,obj.key);
//     console.log(key,obj[key]);
// }

// var obj = {
//     "first name" : "Raj",
//     lname : "Shah",
//     true : 12,
//     Gender : "Male"
// };

// console.log(obj."first name"); // invalid
// console.log(obj["first name"]);  //Valid

// console.log(typeof obj.lname);

// for (const key in obj) {
//     console.log(key,typeof key);
// }

//////////////////////////////////////
// - Computed properties.     []
// var value1 = "abc@gmail.com";
// var value2 = 123456;

// var key1 = "email";
// var key2 = "password";

// var obj = {};

// // {
// //     email : "abc@gmail.com",
// //     password : 123456
// // }



// obj[key1] = value1;


// console.log(obj);

///////////////////////////////


// 1. Access a property of an object using both dot notation and bracket notation.

// 2. Iterate over the properties of an object and print each property and its value.

// 3. Dynamically create an object based on user input, using computed property names.


// 5. Implement a check and manipulation of an object's properties: if a property exists, delete it; if not, add it with a default value.

















// 4. **Nested Objects and Iteration:**
//    - Create an object that contains other nested objects. Write a function that iterates through all nested levels and prints out the keys and values at each level.
   