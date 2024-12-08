const btn = document.querySelector("button");
const table = document.createElement('table');
document.querySelector('div').appendChild(table);


btn.onclick = function (event){
    event.preventDefault();
    
    const xhttp = new XMLHttpRequest();
    var temp = 0;
    xhttp.onload = function(data){
        var obj = JSON.parse(data.target.response);
        for (const key in obj) {
                // console.log(key,obj[key].name);
            if(document.querySelector('input').value == obj[key].name){
                for (const key2 in obj[key]) {
                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    var th = document.createElement('th');
                    th.append(key2);
                    td.append(obj[key][key2]);
                    tr.appendChild(th);
                    tr.appendChild(td);
                    table.appendChild(tr);
                }
                table.style.visibility = "visible";
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