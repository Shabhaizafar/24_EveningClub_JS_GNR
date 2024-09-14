//callback function 


// function Addition(a,b){
//     console.log(a+b);
// }
// function All(callback){
//     var n1 = +prompt("Enter the Value of N1  :");
//     var n2 = +prompt("Enter the Value of N2  :");
//     callback(n1,n2);
// }
// All(Addition);


/////////////////////////////////////////////
// ### Callback Functions:
// 1. Create a function `multiply` that takes two parameters `x` and `y` and a callback function `callback`. Inside `multiply`, call the callback function with the result of `x * y`.
// 3. Write a function `delayedGreet` that takes two parameters: `name` and `callback`. Inside `delayedGreet`, use `setTimeout` to call the callback function after 2 seconds with `"Hello, <name>!"`.
// 4. Explain the concept of a "higher-order function" and provide an example of a higher-order function that accepts a callback function as an argument.
// 5. Create a function `forEach` that takes an array `arr` and a callback function `callback`. `forEach` should call the callback function for each element in the array.

////////////////////////////////////////////////////
// 2. Implement a function `filterArray` that takes an array `arr` and a callback function `callback`. The callback function should return `true` or `false` based on some condition. `filterArray` should return a new array containing only the elements for which the callback function returns `true`.