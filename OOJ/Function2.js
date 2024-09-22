function Person1(fname,lname) {
    this.firstname = fname;
    this.lastname = lname;

    this.bioData = function (){
        console.log(`Hello Everyone,My Name is ${this.firstname} ${this.lastname}.`);
    }
};
// var Person2 =  (fname,lname) => class extends Person1{
    
// };
function Person2(fname,lname) {
    this.firstname = fname;
    this.lastname = lname;
}

// ES6 : class 
// class name {
//     constructor(parameters) {        
//     }
// }


// const p1 = new Person1("Raj","Shah");
// const p2 = new Person2("Ajay","Patel");

// console.log(p1);
// console.log(p2);

// p1.bioData.call(p1);
// p1.bioData.call(p2);

// js  language :   
// typescript : 