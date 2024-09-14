// 3) Arrow Function
// - without arg and without rtn 

//initialization //declaration
var sayHello =  ()=>console.log("Hello Everyone,Welcome to Javascript.!!!");
// function calling//function invoked
// sayHello();


// - with arg and without rtn 

// var Addition = (n1,n2)=>{  // n1,n2  perameters
//     console.log("Addition is : ",n1+n2);
// }

// // Addition(12,13);// 12,13 arguments



// var Addition = n1=>console.log("Addition is : ",n1);

// Addition(12);

// var add = (n1,n2)=>{
//     return n1+n2;
// }
// console.log(add(12,13));


// // - without arg and with rtn 
// var n = 12;
// var NumberSquare =  ()=>{
//     return n*n;
// }
// console.log(NumberSquare());

// var ans = NumberSquare();
// console.log(ans);


// - with arg and with rtn 

// var getResult = (score)=>{
//     if(score>=34){
//         return "You are pass.Give me Party.";
//     }
//     else{
//         return "You are Fail.Better Luck Next Time.";
//     }
// }
// var ans = getResult(33);
// console.log(ans);

///////////////////////////

// function Expression  
// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. 


// Function Arrow
// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g 
// var str = "dog";
// // console.log(str.slice(2,3));


// var myFu = (str)=>{
//     var Arr = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 1; j <=str.length; j++) {
//             if(j>i)
//             {
//                 Arr.push(str.slice(i,j));
//             }
//         }
//     }
//     console.log(Arr.join(','));
// };

// myFu("Java");