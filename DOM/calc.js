var div = document.querySelector('div');
var input = document.querySelector('input');
var AllOp = ['+',"-","*","/","%"];
// div.onclick = function (){
//     console.log("we");
// }
// div.onclick = function (){
//     console.log("New");
// }
// console.log(document.querySelector('button').tagName);

// div.addEventListener(event,function);

div.addEventListener('click',function (event){
    if(event.target.tagName=="BUTTON"){
        if(event.target.innerHTML!='AC' && event.target.innerHTML !='DEL' && event.target.innerHTML!="="){
            input.value +=event.target.innerHTML;
        }else if(event.target.innerHTML=='='){
            var temp1 = '';
            var temp2 = '';
            var op = ''
            // console.log(input.value.split('').includes('+'));  //true 
            for (let i = 0; i < input.value.split('').length; i++) {
                if(AllOp.includes(input.value.split('')[i])){
                    var op = input.value.split('')[i];
                    temp2 = input.value.split('').slice(i+1).join('');
                    break;
                }
                temp1+=input.value.split('')[i]; 
            }
            switch(op){
                case '+' : input.value = (+temp1)+(+temp2);
                            break;
            }
        }
    }
});