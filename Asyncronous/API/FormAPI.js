// const btn = document.querySelector("button");
// const marks = document.querySelector('input');

// btn.addEventListener('click',function(event){
//     event.preventDefault();
//     if(!marks.checkValidity()){
//         document.querySelector('span').innerHTML = marks.validationMessage;
//     }
//     else{
//         document.querySelector('span').innerHTML = "Marks Correct!!";
//     }
// });

const btn = document.querySelector('button');
// const passwordReq = "Boom@123";
const password = document.querySelector('#password');

btn.addEventListener('click',function(event){
    event.preventDefault();
    // console.log(password.value=="Boom@123");
    history.forward();
});