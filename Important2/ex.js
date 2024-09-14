// => More useful things :-

//    - Iterables.   
// for of Loop
// variable > value  > index
// var num = 123456;
// var str = "Royal Technosoft pvt ltd";
// var Arr = [11,11,11,111,2,3,46,7,8];
// for (const a of Arr) {
//     console.log(a);
// }

// Strings and Arrays are Iterables.
// Object,Number,boolean are not Iterables.

//    - Optional chaining.  (?.)
var obj = { 
    fname : "Raj",
    lname : "Shah",
    // Address : {
    //     city : "GNR",
    //     state : "Gujarat"
    // }
}
// console.log(obj);//obj 
// console.log(obj.fname); // Raj
// console.log(obj.Age); //undefined
// console.log(obj.Address);// Address
console.log(obj?.Address?.state);// Gujarat
// console.log(obj.Address.nation);// undefined


// console.log(obj.Address.nation);//  error 

console.log(obj?.Address?.nation); //undefined
// console.log(obj?.Address?.["nation"]); //undefined




console.log("dertyuio");














//    - Object.assign.
//    - Sets.
//    - Maps.