//proto vs prototype  :
// proto : 
// var obj1 = {
//     key1 : "Value1",
//     key2 : "Value2"
// };
// var obj2 = { 
//     key3 : "Value3"
// }

// var obj2 = Object.create(obj1);
// obj2.key3 = "Value3";
// console.log(obj1);
// console.log(obj2);
// console.log(obj1.key1);
// console.log(obj2.key1);


// console.log(obj1.__proto__);
// console.log(obj2.__proto__);
// [[prototype]]

// prototype : 
function All(){
    console.log("Hello Everyone !!");
}
All();


All.NewProperty = "Royal";

All();

console.log(All.NewProperty);

console.log(All.prototype);
