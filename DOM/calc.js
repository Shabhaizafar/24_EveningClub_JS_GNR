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
var count=0;
var flag = false;
div.addEventListener('click',function (event){
var op = '';
var outerTag = document.querySelector('.outer');
    if(event.target.tagName=="BUTTON"){
        if(event.target.innerHTML!='AC' && event.target.innerHTML !='DEL' && event.target.innerHTML!="="){
                /17-11-2024/ 
                if(flag){
                    input.value = '';
                    flag = false;
                }
                if(AllOp.includes(event.target.innerHTML)){
                    if(outerTag.innerHTML==''){
                        /switch/
                        outerTag.innerHTML = String(Number(outerTag.innerHTML)+ Number(input.value))+event.target.innerHTML;
                    }
                    else{
                        /switch/
                        outerTag.innerHTML = String(Number(outerTag.innerText.slice(0,outerTag.innerText.length-1))+ Number(input.value))+event.target.innerHTML;
                    }
                    input.value =  outerTag.innerText.slice(0,outerTag.innerText.length-1);
                    flag = true;
                    return;
                }
                /17-11-2024/ 
                if(AllOp.includes(event.target.innerHTML) && input.value[input.value.length-1]=='.'){
                    input.value = input.value.slice(0,input.value.length-1)+event.target.innerHTML;
                    return;
                }
                if(AllOp.includes(input.value[input.value.length-1])){
                    op = input.value[input.value.length-1];
                    count++;
                    if(event.target.innerHTML=='.'){
                        input.value =input.value+'0'+event.target.innerHTML;
                        return;
                    }
                }
                else if( count && input.value.split('').filter((a)=>{return a=='.'}).length==1){
                    input.value +=event.target.innerHTML;
                    return;
                }
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


// console.log(Number(document.querySelector('section').innerText));