// Syncronous  vs Asyncronous :

// console.log(document.querySelector('h1').innerHTML);

// callback : 
// var value = 1;

// function temp(){
//     console.log("Temp");
// }
// function temp2(){
//     console.log("Temp2");
// }
// function Main(abc,def){
//     if(value<10){
//         def();  // callback2
//     }else{
//         abc();  //callback
//     }
// }
// Main(temp,temp2);

////////////////////////////////////////////////////////////
// Promise : 
// var value = 20;
// var myPromise = new Promise(function(success,reject){
//     if(value<10){
//         success();
//     }else{
//         reject();
//     }
// });
// myPromise.then(()=>{
//     console.log("Success");
// },()=>{
//     console.log("Reject");
// });