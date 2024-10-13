// // 1) using id : 
// console.log(document.getElementById('id1'));

// // 2) using class : 
// console.log(document.getElementsByClassName('class1'));
// console.log(document.getElementsByClassName('class1')[0]);
// console.log(document.getElementsByClassName('class1')[1]);
// console.log(document.getElementsByClassName('class1')[2]);   //undefined


// // 3) using element : 
// console.log(document.getElementsByTagName('h1'));
// console.log(document.getElementsByTagName('h1')[0]);



// 4) querySelector : 
// console.log(document.querySelector('h1'));  //element name
// console.log(document.querySelector('.class1'));  //class value
// console.log(document.querySelector('#id1'));  //id value

// console.log(document.querySelector('p.class1'));  //combine Selector

// 5) querySelectorAll : 

// console.log(document.querySelectorAll('h1'));
// console.log(document.querySelectorAll('h1')[0]);

// id ,class 





// 1) innerHTML 
// console.log(document.querySelector('div').innerHTML);

// 2) innerText
// console.log(document.querySelector('div').innerText);

// 3) textContent 
// console.log(document.querySelector('div').textContent);


// document.querySelector('div').innerHTML = "Changed";





var btn = document.querySelector('button');
var i = 1;
btn.onclick = function (){
    
    document.querySelector('div').innerHTML = `${i++}`;
}



