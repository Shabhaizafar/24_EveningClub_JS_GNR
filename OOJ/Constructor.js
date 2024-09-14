//using Class : 

class Person{
    constructor(fname,lname,age){
            this.Firstname = fname;
            this.Lastname = lname;
            this.Age = age;
        }
    bioData =  function (){
        console.log(`Hello My Name is ${this.Firstname} ${this.Lastname}.And I'm ${this.Age} Years Old.`);
    }
    get accessData(){
        return this.Firstname;
    }
    set changeData(newdata){
        this.Firstname = newdata;
    }
}

const obj1 = new Person("Zafar","S",1);
console.log(obj1);
obj1.bioData();
console.log(obj1.accessData);
obj1.changeData= "Ajay";
console.log(obj1.accessData);
console.log(obj1);

const obj2 = new Person("Raj","Shah",30);
console.log(obj2);
obj2.bioData();




/////////////////////////
// Getter Setter Function : 
















// Basic Getter/Setter

// Create a class Person with a private property name. Implement a getter and setter for name.
/////////////////////////////////////////////////////
// Validation in Setter

// Define a class Account with a private property balance. Implement a setter that prevents setting a negative balance and provides an error message if an invalid value is assigned.
/////////////////////////////////////////////////////
// Computed Property

// Create a class Rectangle with private properties width and height. Implement a getter for area that computes the area of the rectangle using the width and height.
/////////////////////////////////////////////////////
// Dynamic Property Access

// In a class User, create a getter for fullName that concatenates firstName and lastName properties. Implement corresponding setters to update both firstName and lastName when fullName is set.
/////////////////////////////////////////////////////
// Lazy Initialization

// Define a class ExpensiveResource with a private property resource. Implement a getter that initializes the resource only when it is first accessed.
/////////////////////////////////////////////////////
// not DONE
// Encapsulation

// Create a class Circle with a private property _radius. Implement getters and setters for radius where setting the radius should validate that it is a positive number.
// Read-Only Property

// Implement a class Temperature with a private property celsius. Provide a getter for fahrenheit that converts the Celsius temperature to Fahrenheit, but make the celsius property read-only.
// Chained Setters

// Define a class Coordinates with private properties x and y. Implement setters for x and y such that setting one coordinate updates both coordinates to keep them in sync.
// Getter/Setter for Object

// Create a class Person with a private property details (an object). Implement getters and setters to access and update specific properties within details (e.g., age, address).
// Protected Property

// Implement a class BankAccount with a private property _accountNumber. Provide a getter for accountNumber that returns the account number, but prevent it from being changed directly.