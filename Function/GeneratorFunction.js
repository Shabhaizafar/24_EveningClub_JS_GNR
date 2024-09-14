// function All(){
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
// }
// All();

// Generator Function : 
/*
1) Syntax :
function * Function_name(){
    code;
}

2)
function* Function_name(){
    code;
}

3)
function *Function_name(){
    code;
}

4) 
function*Function_name(){
    code;
}
*/
// function*All(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// var output = All();
// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);


// output.next();
// console.log(output.next());
// console.log(output.next());
// console.log(output.next());
// console.log(output.next());

///////////////////////////////////////////
// Complex Data Structures

// Write a generator function that yields values from a nested array structure (e.g., [1, [2, [3, 4]], 5]).

// How can you flatten a deeply nested array using a generator function?
// [1,2,3,4,5]

// function*flattenArray(element){
//     if(Array.isArray(element)){
//         yield*flattenArray(...element);
//     }
//     else{
//         yield element;
//     }
// }


// var Arr = [1, [2, [3, 4]], 5];
// var ans = flattenArray(...Arr);

// for (const iterator of ans) {
//     console.log(iterator);
// }





//////////////////////////////////////////////////////
// function NewFu2(){
//     console.log("Hello");
//     return NewFu();
// }
// function NewFu(){
//     console.log(1);
//     console.log(2);
//     return NewFu2();

// }
// function*All(){
//     yield 1;
//     yield 2;
//     yield NewFu();
//     yield 4;
//     yield 5;
// };
// var output = All();
// var count = false;

// while(!count){
//     var ans = output.next();
//     count = ans.done;
//     console.log(ans.value);
// }

//////////////////////
// Check number is Armstong or not using recursion 


// 121

// 1*3 + 2*3 + 1*3 = 1+8+1 = 10

// 153 
// 1*3 + 5*3 + 3*3 = 1+125+27 = 153

// 8208 
// 8*4 + 2*4 + 0*4 + 8*4 = 8208