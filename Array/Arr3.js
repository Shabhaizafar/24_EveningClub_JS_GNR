
/*
Wrong Mathod : X
var Arr1 = [1,2,3];
// var cloneArr = Arr1;
// console.log(Arr1);
// console.log(cloneArr);

// cloneArr.push(100);
// console.log(Arr1);
// console.log(cloneArr);
*/


// - Clone array & spread operator.

// 1) concat()
// var Arr1 = [1,2,3];
// var cloneArr = Arr1.concat(101,201,2003);
// console.log(Arr1);
// console.log(cloneArr);
// cloneArr.push(100);
// console.log(Arr1);
// console.log(cloneArr);

// 2) slice() :
// var Arr1 = [1,2,3,4,5,6,7,8,9,10];
// var cloneArr = Arr1.slice(4,8);
// console.log(Arr1);
// console.log(cloneArr);
// cloneArr.push(100);
// console.log(Arr1);
// console.log(cloneArr);

// 3) spread operator :  (...)
var Arr1 = [1,2,3,4,5,6,7,8,9,10];
var cloneArr = [...Arr1];
console.log(Arr1);
console.log(cloneArr);
cloneArr.push(100);
console.log(Arr1);
console.log(cloneArr);

