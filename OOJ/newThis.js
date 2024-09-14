// In JavaScript, this keyword refers to the object that is currently executing a function or method. Its value is determined by how a function is called. this typically represents the context in which a function operates, allowing access to the properties and methods of its containing object.

// The this keyword refers to different objects depending on how it is used
// When used within a method of an object, this points to that object.
// When used by itself, this points to the global object.
// Within a function, this typically points to the global object.


//Continue
// In a function under strict mode, this becomes undefined.
// During an event, this points to the element that triggered the event.
// Methods such as call(), apply(), and bind() can reassign this to any desired object.

// console.log(this);

// //Global Object 
// console.log(window);
// console.log(typeof window);

// // console.log(this);
// // console.log(this==window);
// // console.log(this===window);

// this.abc;

// console.log(window);



//////
// JavaScript new keyword is used to create an instance of an object that has a constructor function.

// On calling the constructor function with the ‘new’ operator, the following actions are taken:

// A new empty object is created.
// The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
// The ‘this’ variable is made to point to the newly created object. It binds the property that is declared with the ‘this’ keyword to the new object.


