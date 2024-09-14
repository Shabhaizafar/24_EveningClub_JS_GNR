//    - Function inside function.

// function newfu(){
//     console.log("New");
// }

// function main(){
//     console.log("Main Function");
//     function innerfu(callback){
//         console.log("Inner Function");
//         callback();
//     }
//     innerfu(newfu);
// }
// main();




//    - Lexical Scope.
//    - Block Scope Vs Function Scope.


// var n1 = 12;
// function main(){
//     console.log("Outer : ",n1);
//     var n1 = 100;
//     function innerfu(){
//         console.log("inner : ",n1);
//     }
//     innerfu();
// }
// main();

//block Scope
// {
//     var n1 = 12;
//     let n2 = 13;
//     const n3 = 14;
// }

// console.log(n1);
// console.log(n2);
// console.log(n3);


// function main(){
//     var a = 12;
//     console.log(a);
// }

// main();
// console.log(a);


// if(1){
//     let n = 12;
// console.log(n);

// }
// console.log(n);


for (var i = 0; i <5; i++) {
    console.log(i);
}
console.log(i);
