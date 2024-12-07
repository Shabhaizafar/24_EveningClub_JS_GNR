const btn = document.querySelector("button");

btn.onclick = function (event){
    event.preventDefault();
    
    const xhttp = new XMLHttpRequest();
    var temp = 0;
    xhttp.onload = function(data){
        var obj = JSON.parse(data.target.response);
        for (const key in obj) {
                // console.log(key,obj[key].name);
            if(document.querySelector('input').value == obj[key].name){
                console.log(obj[key]);
                temp++;
            }
        }
        if(temp!=0){
            console.log("Exist");
        }else{
            console.log("Doesn't Exist");
        }
    }
    xhttp.open("GET","Data.json");
    xhttp.send();
}