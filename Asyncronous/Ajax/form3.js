const btn = document.querySelector('button');

// btn.addEventListener('click',function(event){
//     event.preventDefault();
//     var ans = document.querySelector('input').;
//     console.log(ans);

//     // location.href = ans[ans.length-1];
//     // location.href = "../C_Syllabus.pdf";
// });



// const fileInput = document.querySelector('input');
// fileInput.addEventListener('change', (event) => {
//     // const file = event.target.files[0]; // Get the first selected file
//     console.log(event);
// });

btn.addEventListener('click',function(){
    var xhttp = new XMLHttpRequest();
    
    
    xhttp.onreadystatechange = function (Data){
        console.log(Data.currentTarget.readyState);
    }
    // xhttp.onprogress = function(){
    //     console.log("On Progress");
    // }
    // xhttp.onload = function(event){  
    //     // console.log(event);
    //     console.log("Loading");
    // };
    // xhttp.onloadend = function(){
    //     console.log("On Load End");
    // }
    // xhttp.onloadstart = function(){
    //     console.log("On Load Start");
    // }
    xhttp.open("GET","Data.json");
    xhttp.send();
});