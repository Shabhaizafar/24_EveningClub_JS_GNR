// // JavaScript inheritance is the method through which the objects inherit the properties and the methods from the other objects. It enables code reuse and structuring of relationships between objects, creating a hierarchy where a child object can access features of its parent object. Inheritance in JavaScript can be achieved in the following ways:

// // 1) Single Level Inheritance : 
// /*
// Parent Class :              A
//                             |
//                             |
//                             |
// Child Class  :              B(Inherit class A)
// */
// // class Father{
// //     constructor(fname,lname){
// //         this.FatherName = fname;
// //         this.LastName   = lname;
// //         this.Age = 50;
// //     }
// // }

// // class Son extends Father{
// //     constructor(cname,fname,lname){
// //         super(fname,lname);
// //         this.ChildName = cname;
// //     }
// //     bioData = function (){
// //         console.log(`My Fullname is ${this.ChildName} ${this.FatherName} ${this.LastName}. ${this.Age}`);
// //     }
// // }

// // const s1 = new Son("Raj","Rakeshbhai","Shah");
// // console.log(s1);

// // s1.bioData();



// // key + value 
// // object :  unordered
// // Map    :  ordered



// // var obj = {
// //     fname : "Raj",
// //     lname : "Shah",
// //     true     :   12345
// // }
// // console.log(obj);
// // for (const key in obj) {
// //     console.log(key,obj[key]);
// //     console.log(typeof key,typeof obj[key]);

// // }

// // var myMap  = new Map(); 
// // myMap.set("fname","Raj");
// // myMap.set("lname","Shah");
// // myMap.set(true,12345);

// // console.log(myMap);

// // myMap.forEach(
// //     (value,key)=>{
// //         console.log(value,key);
// //         console.log(typeof value,typeof key);
// //     }
// // );
// /////////////////////////////////////////////////////////////////
// // Basic Class and Inheritance

// // Define a Person class with a constructor that takes name and age. Define a method greet() that logs a greeting message. Create a subclass Student that inherits from Person and adds a studentId property and a method study(). Demonstrate creating an instance of Student and calling both inherited and subclass methods.


// ////////////////////////////////////////
// // Method Overriding

// // Create a base class Animal with a method makeSound(). Create a subclass Dog that // makeSound() to return "Woof". Create an instance of Dog and call the makeSound() method.

// /////////////////////////////////////////////////////////////////
// // Define a base class Shape with a method area(). Create a subclass Rectangle that extends Shape and adds width and height properties. // the area() method in Rectangle to compute the area of the rectangle. Demonstrate the use of Rectangle and compute its area.



// /////////////////////
// // 2) Multi Level Inheritance

// class GrandFather{
//     constructor(gname){
//         this.GrandFatherName = gname;
//         this.Age = 75;
//     }
//     gold = function (){
//         console.log("100kg");
//     }
// }


// class Father extends GrandFather{
//     constructor(fname,gname){
//         super(gname);
//         this.FatherName = fname;
//         // this.Age = 40;
//     }
//     silver = function (){
//         console.log("99kg");
//     }
// }
// class Child extends Father{
//     constructor(cname,fname,gname){
//         super(fname,gname);
//         this.ChildName = cname;
//         this.Age = 18;
//     }
//     game = function (){
//         console.log("Video Game");
//     }
// }
// const c1 = new Child("Raj","Rajesh","Rajendra");
// console.log(c1);
// c1.game();
// c1.silver();
// c1.gold();
// /////////////////////////////////////
// // 3) Multiple Inheritance




// function Addition(n1,n2){
//     console.log(n1+n2);
// }

// Addition(12,13);



function Addition(...values){
    console.log(values);
    var sum=0;
    for (const element of values) {
        sum+=element;
    }
    console.log(sum);
}

Addition(1,2,3,4,5,6,7,8,9,10); //55



///////////////////////////////////////////////////


// explaination reduce method with Example.\




/*
https://igorgo.nl/assets/articles/js-arrays-cheatsheet/js-arrays-aggregated.webp

https://pbs.twimg.com/media/Fr9jZ1TWAAA2cr2.jpg


https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UFDXrdSxjLSVIMBLhot5mcuQv89LobZDCA&s

https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_96A_7Sn1Zxq-UGTO9SUvYFPy2LRUN6Q0sg&s



*/