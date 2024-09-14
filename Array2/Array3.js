//     - Create an array of 10 elements and use `Array.prototype.fill` to replace all elements with the numbers from 1 to 10.

// var Arr = [11,13,14,15,16,17,18,19,20,21];
// console.log(Arr);

// for (let i = 0; i<10; i++) {
//     Arr.fill(i+1,i,i+1);
//     console.log(Arr);
// }

//////////////////////////////
//    - Find.
// var Arr = [11,13,14,15,16,17,18,19,20,21];
// console.log(Arr);
// var n = 1;
// var ans=Arr.find((a)=>{
//     return a==n;
// });
// console.log(ans);

///////////////////////////////////////////
//    - Map method.
// var Arr = [11,13,14,15,16,17,18,19,20,21];
// var ans1 =  Arr.map((a)=>{
//     return a>15;
// });


// var ans2 = Arr.filter(
//     (a)=>{
//         return a>15;
//     }
// );


// var ans3 = Arr.forEach(
//     (a)=>{
//         if(a>15){
//             console.log(a);
//         }
//     }
// );


// console.log(ans1);
// console.log(ans2);
// console.log(ans3);


/////////////////////////////////
//    - Splice method.
// var Arr = [11,13,14,15,16,17,18,19,20,21];
// // Arr.splice(0);
// var deletedValues = Arr.splice(3,2);

// console.log(Arr);
// console.log(deletedValues);


////////////////////////////
//    - Reduce.
// var Arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(Arr);
// var ans = Arr.reduce(
//     (currentValue,NextValue)=>{
//         console.log(currentValue,NextValue);
//         return NextValue+currentValue;
//     }
// );
// var Arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(Arr);
// var ans = Arr.reduce(
//     (previousValue,currentValue)=>{
//         console.log(previousValue,currentValue);
//         return currentValue+previousValue;
//     },45
// );
// console.log(ans);


// const products = [
//     {
//       id: 1,
//       name: "Laptop",
//       price: 999.99
//     },
//     {
//       id: 2,
//       name: "Smartphone",
//       price: 499.99
//     },
//     {
//       id: 3,
//       name: "Headphones",
//       price: 199.99
//     },
//     {
//       id: 4,
//       name: "Monitor",
//       price: 299.99
//     },
//     {
//       id: 5,
//       name: "Keyboard",
//       price: 49.99
//     }
//   ];
//   console.log(products);
// var ans = products.reduce(
//     (currentobj,nextobj)=>{
//         console.log(currentobj.price,nextobj.price);
//         nextobj.price = nextobj.price+currentobj.price;
//         return nextobj;
//     }
// );
// console.log(ans.price);
// console.log(products);


// 5. **Remove First Element**: Remove the first element of an array using `splice`.
// 1. **Find:**
//    - Write a function `findEvenIndex` that takes an array of integers and returns the index of the first even number using `Array.prototype.find`. If no even number is found, return `-1`.
// 5. **Find:**
//    - Create a function `findPrime` that takes an array of integers and returns the first prime number using `Array.prototype.find`. If no prime number is found, return `null`.
// 9. **Find:**
//    - Implement a function `findLongestWord` that takes an array of strings and returns the longest word using `Array.prototype.find`. If there are multiple longest words, return the first one found.
