const allMethods = {
    bioData :  function (){
        console.log(`Hello My Name is ${this.Firstname} ${this.Lastname}.And I'm ${this.Age} Years Old.`);
    },
    is18 : function (){
        console.log(`${this.Age>=18}`);
    }

}


function Person(fname,lname,Age){
    var user  = Object.create(allMethods);
    user.Firstname = fname;
    user.Lastname = lname;
    user.Age = Age;
    return user;
}

var obj1 = Person("Ajay","Shah",10);
console.log(obj1);
obj1.bioData();
obj1.is18();

var Obj2 = Person("Raj","Patel",30);
console.log(Obj2);
Obj2.bioData();
Obj2.is18();
