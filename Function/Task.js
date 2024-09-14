// Complex Data Structures

// Write a generator function that yields values from a nested array structure (e.g., [1, [2, [3, 4]], 5]).

// How can you flatten a deeply nested array using a generator function?
// [1,2,3,4,5]



// function*flattenArray(Arr){
//     for (const element of Arr) {
//         if(Array.isArray(element)){
//             yield*flattenArray(element);
//         }
//         else{
//             yield element;
//         }
//     }
// }

// var Arr = [1, [2, [3, 4]], 5];
// var ans = [...flattenArray(Arr)];

// console.log(ans);
// for (const iterator of ans) {
//     console.log(iterator);
// }




// Check number is Armstong or not using recursion 


// 121

// 1*3 + 2*3 + 1*3 = 1+8+1 = 10

// 153 
// 1*3 + 5*3 + 3*3 = 1+125+27 = 153

// 8208 
// 8*4 + 2*4 + 0*4 + 8*4 = 8208







var num = 8208;
var sum= 0;

var len = String(num).length;
function isArmstrong(n){
    if(n==0)
    {
        return sum;
    }
    var mul = 1;
    var temp = n%10;
    for (let i = 0; i <len; i++) {
        mul=mul*temp;
    }
    sum+=mul;
    n = parseInt(n/10);
    return isArmstrong(n);
    
}
if(num==isArmstrong(num))
{
    console.log("Number is Armstrong !!!");
}
else{
    console.log("Number is not Armstrong !!!");
}


