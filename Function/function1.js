// what is a Function : 
// - Block of Code.
// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

/*
In C Language: 
//function declaration 
void function_name();

void main(){
    //Function Calling
    function_name();
}
//function initialization
void function_name(){

}
*/


/*
In JS : 
declaration/inilaization 
function function_name(){
}


Function Calling // invoke
function_name();
*/

// Type of Function in JS :
// 1) Name Function/ declaration Function 
    // - without arg and without rtn 
    // - with arg and without rtn 
    // - without arg and with rtn 
    // - with arg and with rtn 

// 2) Expression Function 
    // - without arg and without rtn 
    // - with arg and without rtn 
    // - without arg and with rtn 
    // - with arg and with rtn 

// 3) Arrow Function 
    // - without arg and without rtn 
    // - with arg and without rtn 
    // - without arg and with rtn 
    // - with arg and with rtn 

// 4) Anonymous Function  
// 5) IIFE Function 
// 6) Generator Function 
// 7) callback Function 
// 8) Recursive Function 
// 9) Higher Order Function 

//ooJ
// 10)getter-setter Function 

///////////////////////////////////////////////////////////
// 1) Name Function/ declaration Function
// - without arg and without rtn 

//initialization //declaration
function sayHello(){
    console.log("Hello Everyone,Welcome to Javascript.!!!");
}
// function calling//function invoked
// sayHello();


// - with arg and without rtn 

function Addition(n1,n2){  // n1,n2  perameters
    console.log("Addition is : ",n1+n2);
}

// Addition(12,13);// 12,13 arguments


// - without arg and with rtn 

var n = 12;
function NumberSquare(){
    return n*n;
}
// // console.log(NumberSquare());

// var ans = NumberSquare();
// console.log(ans);

// var str ="Royal";

// function toUpper(){
//     return str.toUpperCase();
// }
// console.log(toUpper());


// - with arg and with rtn 

function getResult(score){
    if(score>=34){
        return "You are pass.Give me Party.";
    }
    else{
        return "You are Fail.Better Luck Next Time.";
    }
}
var ans = getResult(33.999999999999997);
// console.log(ans);

/////////////////////////////////////////////////////////////


// 2. Create a function called `calculateArea` that takes two parameters (`width` and `height`) and returns the area of a rectangle.

// 3. Write a function `isPrime` that takes a number as an argument and returns `true` if it's a prime number, otherwise `false`.

// 4. Implement a function `capitalizeFirstLetter` that accepts a string and returns the same string with the first letter capitalized.

// 5. Define a function `sumArray` that takes an array of numbers as an argument and returns the sum of all the numbers.

// 6. Create a function `reverseString` that reverses a given string without rtn.

// 7. Write a function `countVowels` that counts the number of vowels (a, e, i, o, u) in a given string and returns that count.

// 8. Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array with only the even numbers .

// 9. Define a function `mergeArrays` that takes two arrays as arguments and returns a new array that merges both arrays.

// 10. Create a function `calculateFactorial` that computes the factorial of a number (`n`) without rtn.
