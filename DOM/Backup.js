// const btn = document.querySelector("button");
// var i = 1;
// // functionality  : function 
// btn.onclick = function (){
//     console.log(i++);
// }



// How to Access Property Value Using a JS ?

const img = document.querySelector("img");
console.log(img.attributes);//
console.log(img.attributes[0]);//
console.log(img.attributes[0].value);//


// img.attributes[0].value = "on.png";


const btn = document.querySelector("button");
btn.onclick = function (){
    if(img.attributes[0].value == "bulb.png"){
        img.attributes[0].value = "on.png";
        btn.innerHTML = "OFF";
    }else{
        img.attributes[0].value = "bulb.png";
        btn.innerHTML = "ON";
    }
}

/*
H1 : Name  (align)



btn1 : click : increase font-size h1
btn2 : click : decrease font-size h1
*/ 
