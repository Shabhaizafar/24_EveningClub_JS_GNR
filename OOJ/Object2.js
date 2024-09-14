// Create a Single Object. : 

function Person(){
    var user  ={};
    user.Firstname = "Raj";
    user.Lastname = "Patel";
    user.Age = 30;
    user.bioData = function (){
                        console.log(`Hello My Name is ${user.Firstname} ${user.Lastname}.And I'm ${user.Age} Years Old.`);
                    };
    return user;
}

var obj1 = Person();
console.log(obj1);
obj1.bioData();