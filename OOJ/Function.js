// // - Call , apply and bind method.    //function 

// function Hello(){
//     console.log("Hello Everyone !!");
// }
// // Hello();



// var obj = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 13,
//     bioData : function (){
//         console.log(`My name is ${this.fname} ${this.lname}.${this.Age}.`);
//     }
// };
// console.log(obj);
// console.log(obj.fname);
// obj.bioData(); // method calling


// Hello.Number1 = 12345;

// Hello();

// //protoype
// console.log(Hello.prototype);

// Hello();
// Hello.call();
// Hello.apply();
// var ans = Hello.bind();
// ans();


const obj1 = { 
    fname : "Raj",
    lname : "Shah",
    bioData : function (hobby1,hobby2){
        console.log(`My name is ${this.fname} ${this.lname}.${hobby1},${hobby2}.`);
    }
}
const obj2 =  { 
    fname : "Ajay",
    lname : "Patel"
}
console.log(obj1);
obj1.bioData();
console.log(obj2);
// obj2.bioData();  //error


console.log("\n");

// call : 
obj1.bioData.call(obj1,"Cricket","Football");
obj1.bioData.call(obj2);

console.log("\n");
// apply 
obj1.bioData.apply(obj1,["Cricket","Football","wert"]);
obj1.bioData.apply(obj2,["1","2"]);

console.log("\n");

//bind : 
var ans1 = obj1.bioData.bind(obj1);
var ans2 = obj1.bioData.bind(obj2);
ans1();
ans2();
