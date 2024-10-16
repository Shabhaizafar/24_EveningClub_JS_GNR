const btn = document.querySelector('button');
const img = document.querySelector('img');

btn.onclick =function (){
    // console.log(img.attributes);
    // console.log(img.attributes[0].value);
    // console.log(img.attributes['src']);
    // console.log(btn.innerHTML);


    img.attributes[0].value = "on.png";
    btn.innerHTML = "OFF";
    
}