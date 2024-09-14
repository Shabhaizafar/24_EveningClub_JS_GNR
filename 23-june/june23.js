// "use strict";
//    - If else statement. : 
// var age = 12;
// var product;

// if(age<=10)
// {
//     product = "Milk";
// }
// else{
//     product = "Tea";
// }
// console.log(product);

////////////////////////////////////

//    - Ternary Operator.    (  (condition) ? s1 : s2; )
// var age = 1;
// var product = (age<=10) ? "Milk" : "Tea";
// console.log(product);

/////////////////////////////////////

//    - && || operator.

//1) AND (&&)  : return true when both value are true else return false;
// var n1 = 12;
// var n2 = 13; 

// console.log(n1!=n2 && n1<n2); //true
// console.log(n1==n2 && n1<n2); //false

//2) OR  (||)  : return false when both value are false else return true;
// console.log(n1==n2 || n1<n2); //true
// console.log(n1==n2 || n1>n2); //false


// n1 = 12;
// console.log(n1);


//    - Nested if else.
// age group  :  child (<=12) ,teenager(12>  <=19) ,adult (>19   <=50) , senior (>50)
// var age = 45;
// if(age<20)
// {
//     if(age<=12)
//     {
//         console.log("Child");
//     }
//     else{
//         console.log("teenager");
//     }
// }
// else{
//     if(age<=50)
//     {
//         console.log("adult");
//     }
//     else
//     {
//         console.log("senior");
//     }
// }
//    - If elseif else.
// age group  :  child (<=12) ,teenager(12>  <=19) ,adult (>19   <=50) , senior (>50)
// var age = 51;
// if(age<=12)
// {
//     console.log("Child");
// }
// else if(age<=19)
// {
//     console.log("teenager");
// }
// else if(age<=50)
// {
//     console.log("adult");
// }
// else{
//     console.log('senior');
// }


// if('')
//     console.log("sdrg");
// else
//     console.log("sq3456789jhgfddrg");
// Falsy values: null,0,false,'',undefined,NaN

//    - Switch statement.
// var choice = +prompt("1) for addition.\n2) for Subtraction\n\nEnter the Value of N : ");

// switch (choice) {
//     case 1: console.log("Pressed 1");
//         break;
//     case 2: console.log("Pressed 2");
//         break;
//     default: console.log("Enter valid Choice!!!");
//         break;
// }

// var choice = prompt("1) add for addition.\n2) sub for Subtraction\n\nEnter the Value of N : ");

// switch (choice) {
//     case "add": console.log("Pressed add");
//         break;
//     case 'sub': console.log("Pressed sub");
//         break;
//     default: console.log("Enter valid Choice!!!");
//         break;
// }


//    - For loop.
// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }

//    - While loop.

// var i = 0;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

//    - Do while loop.
// var i =12;
// do {
//     console.log(i);
//     i++;
// } while (i<=10);


//    - Break and continue keyword.
// for (let i = 0; i <=5; i++) {
//     if(i==3)
//     {
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 0; i <3; i++) {
//     for (let j = 0; j <3; j++) {
//         if(i==1)
//         {
//             break;
//         }
//         console.log(i,j);
//     }
// }
/*
0 0
0 1
0 2

2 0
2 1
2 2
*/
// for (let i = 0; i <3; i++) {
//     for (let j = 0; j <3; j++) {
//         if(j==1)
//         {
//             break;
//         }
//         console.log(i,j);
//     }
// }
/*
0 0
1 0
2 0
*/
// for (let i = 0; i <3; i++) {
//     for (let j = 0; j <3; j++) {
//         if(i==1)
//         {
//             continue;
//         }
//         console.log(i,j);
//     }
// }
/*
0 0
0 1
0 2

2 0
2 1
2 2
*/
// for (let i = 0; i <3; i++) {
//     for (let j = 0; j <3; j++) {
//         if(j==1)
//         {
//             continue;
//         }
//         console.log(i,j);
//     }
// }

/*

*/


//    - For loop examples.
//    - While loop examples.