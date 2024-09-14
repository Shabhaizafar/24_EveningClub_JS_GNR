//IIFE :
//Imidiate Invoked Function Expression.
// (
//     function (){
//         console.log("Hello Everyone!!!");
//     }
// )()

// (
//     function (){
//         console.log("Hello Everyone!!!");
//     }
// )();

// (
//     function (){
//         console.log("Hello Everyone!!!");
//     }
// )();
// (
//     function (n1,n2){
//         console.log("Hello Everyone!!!",n1+n2);
//     }
// )(12,13);

// (
//     function (n1,n2){
//         console.log("Hello Everyone!!!",n1+n2);
//     }
// )(12,13);



var  ans = (
    function (n1,n2){
        return n1+n2;
    }
)(12,13)

console.log(ans);