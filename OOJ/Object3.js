// Create a Multiple Objects. : 

function Person(fname,lname,Age){
    var user  ={};
    user.Firstname = fname;
    user.Lastname = lname;
    user.Age = Age;
    user.bioData = function (){
                        console.log(`Hello My Name is ${this.Firstname} ${this.Lastname}.And I'm ${this.Age} Years Old.`);
                    };
    return user;
}

var obj1 = Person("Ajay","Shah",10);
console.log(obj1);
obj1.bioData();

var Obj2 = Person("Raj","Patel",30);
console.log(Obj2);
Obj2.bioData();