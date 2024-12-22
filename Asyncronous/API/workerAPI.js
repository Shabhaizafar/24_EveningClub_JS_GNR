const div = document.querySelector('div');
let w;
// console.log(div.tagName);

div.addEventListener('click',function(event){
    console.log(event.target.tagName == "BUTTON");
    if(event.target.tagName == "BUTTON"){
        if(event.target.innerHTML =="Start"){
            if(typeof(w) == "undefined"){
                w = new Worker("worker.js");
            }
        }
        else if(event.target.innerHTML =="Stop"){
            w.terminate();
            w = undefined;
        }
    }
});