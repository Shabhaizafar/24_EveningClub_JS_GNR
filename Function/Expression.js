// 2) Function Expression
// - without arg and without rtn 

//initialization //declaration
var sayHello = function (){
    console.log("Hello Everyone,Welcome to Javascript.!!!");
}
// function calling//function invoked
// sayHello();


// - with arg and without rtn 

var Addition =function (n1,n2){  // n1,n2  perameters
    console.log("Addition is : ",n1+n2);
}

// Addition(12,13);// 12,13 arguments


// - without arg and with rtn 
var n = 12;
var NumberSquare = function (){
    return n*n;
}
// console.log(NumberSquare());

// var ans = NumberSquare();
// console.log(ans);


// - with arg and with rtn 

var getResult =function (score){
    if(score>=34){
        return "You are pass.Give me Party.";
    }
    else{
        return "You are Fail.Better Luck Next Time.";
    }
}
var ans = getResult(33);
// console.log(ans);

/////////////////////////////////////////////////////////////
