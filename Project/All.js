document.body.onload = function(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","temp.html");

    xhttp.onload = function(data){
        document.body.innerHTML = data.target.response;
    }
    xhttp.send();

    setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET","Homepage.html");
    
        xhttp.onload = function(data){
            document.body.innerHTML = data.target.response;
        }
        xhttp.send();
    }, 2500);
}
