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
    var op = '';
    if(event.target.tagName=="BUTTON"){
        if(event.target.innerHTML!='AC' && event.target.innerHTML !='DEL' && event.target.innerHTML!="="){
            if(input.value[0]=='0'){
                if(event.target.innerHTML=='00'){
                    return;
                }else if(event.target.innerHTML=='.'){
                    if(op=='' && input.value.split('').includes('.')){
                        return;
                    }
                    else{
                        input.value +=event.target.innerHTML;
                        return;    
                    }
                }
            }
            else if(event.target.innerHTML=='.'){
                if(op=='' && input.value.split('').includes('.')){
                    return;
                }
                else{
                    input.value +=event.target.innerHTML;
                    return;    
                }
            }
            if(input.value[0]=='0' && input.value.length==1){
                input.value =event.target.innerHTML;
            }else{
                input.value +=event.target.innerHTML;
            }
        }else if(event.target.innerHTML=='='){
            var temp1 = '';
            var temp2 = '';
          
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
        else if(event.target.innerHTML=='AC'){
            input.value = "0";
        }
        else if(event.target.innerHTML=='DEL'){

            input.value = input.value.slice(0,input.value.length-1);
            if(input.value.length==0){
                input.value = "0";
            }
        }
    }
});


// "Zafar".slice(0,4)
//  0123 