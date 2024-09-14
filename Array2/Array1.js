// => Very Important Array Methods :-
// const Arr = [30,12,40,11,14,7,89];
// console.log(Arr);

//    - Sort.
// Arr.sort();
// console.log("Sorting : ",Arr); //accending

// Arr.sort(
//     (a,b)=>{
//         return a-b;
//     }
// );
// console.log("Sorting : ",Arr); //accending


// Arr.sort(
//     (a,b)=>{
//         return b-a;
//     }
// );
// console.log("Sorting : ",Arr); //decending



// Arr.sort(function (n1,n2){
//     return n1-n2;
// });
// console.log("Sorting : ",Arr); //accending

////////////////////////////////////////
// const Arr = [30,12,40,11,14,7,89];
// console.log(Arr);
// //    - Every.

// var ans = Arr.every(
//     (n)=>{
//         console.log(n);
//         return n>10;
//     }
// );
// console.log(ans);

////////////////////////////////////////////////
//    - Some.
// const Arr = [3,1,4,11,14,7,89];
// console.log(Arr);
// //    - Every.

// var ans = Arr.some(
//     (n)=>{
//         console.log(n);
//         return n>100;
//     }
// );
// console.log(ans);

///////////////////////////////////////////
//    - Fill method.
const Arr = [3,1,4,11,14,7,89];
//           0 1 2 3   4  5  6
console.log(Arr);

// Arr.fill(0);
// Arr.fill(0,2);
var ans= Arr.fill(0,2,5);



console.log(Arr);
console.log(ans);



////////////////////////////////////

//    - Foreach method.
//    - Map method.
//    - Filter.
//    - Reduce.
//    - Find.
//    - Splice method.


/*

30,21,40,11,14,7,89
21,30,40,11,14,7,89
21,11,40,30,14,7,89
21,11,40,14,30,7,89


11,12,40,14,30,7,89
11,12,40,14,30,7,89


11,12,14,40,30,7,89
11,12,14,30,40,7,89








*/