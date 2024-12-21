const btn  = document.querySelector('button');

btn.addEventListener('click',function(){
    // history.back();
    // history.forward();
    console.log(history.go(-1));
    // console.log(history);
});