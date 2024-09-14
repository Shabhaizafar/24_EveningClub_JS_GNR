// function main(){
//     var choice = prompt("1) type 'num' for Number\n2) type 'str' for string.\n\nEnter your Choice :");
//     switch (choice) {
//         case 'num': Numbers();
//             break;
//         case 'str': Strings();
//             break;
//         default: console.log("Please Enter Valid Choice !!!!");
//             break;
//     }
// }
// // main();




// function Numbers(){
//     var n1 = +prompt("Enter the Vlaue of n1 :");
//     var n2 = +prompt("Enter the Vlaue of n2 :");
//     var choice = prompt("1) '+' for Addition\n2) '-' for Subtraction.\n\nEnter your Choice : ");
//     switch (choice) {
//         case '+': Addition(n1,n2);
//             break;
//         case '-': Subtraction(n1,n2);
//             break;
//         default: console.log("Please Enter Valid Choice !!!!");
//             break;
//     }
// }

// function Strings(){
//     var s1 = +prompt("Enter the Vlaue of s1 :");
//     var s2 = +prompt("Enter the Vlaue of s2 :");
 
//     // 1) concatination 
//     // 2) concatination  with Lowercase
//     // 3) concatination  with Uppercase
//     // 4) concatination  and find total length
// }

// function Addition(a,b){
//     console.Additionlog(`Addition of  ${a} and ${b} : ${a+b}.`);
// }

// function Subtraction(s1,s2){
//     console.log(`Subtraction of ${s1} and ${s2} : ${s1-s2}.`);
// }

// 2. Implement a function `filterArray` that takes an array `arr` and a callback function `callback`. The callback function should return `true` or `false` based on some condition. `filterArray` should return a new array containing only the elements for which the callback function returns `true`.


// var Arr = [12,1,10,30,34,54,21,9,5,7];
// function filterArray(arr,callback){
//     var newArr = [];
//     for (const iterator of arr) {
//         if(callback(iterator))
//         {
//             newArr.push(iterator);
//         }
//     }
//     return newArr;
// }

// console.log(filterArray(Arr,All));

// function All(n){
//     if(n>20)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }


// 5. Create a function `forEach` that takes an array `arr` and a callback function `callback`. `forEach` should call the callback function for each element in the array.

// var Arr = [12,1,10,30,34,54,21,9,5,7];
// function filterArray(arr,callback){
//     for (const iterator of arr) {
//        callback(iterator);
//     }
// }

// filterArray(Arr,All);

// function All(n){
//     console.log(n);
// }