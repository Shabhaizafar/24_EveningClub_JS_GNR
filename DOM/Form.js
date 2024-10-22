// const btn = document.querySelector('.btn');
// const table = document.querySelector('table');
// var temp = 1;
// btn.onclick = function(event){
//     event.preventDefault(); // refresh : stop 
//     var AllData = [ document.querySelector('#name').value,
//         document.querySelector('#email').value,
//         document.querySelector('#message').value
//     ];
//     var tr = document.createElement('tr');
//     var index = 0;

//     for (let i = 0; i < 4; i++) {
//         var td = document.createElement('td');
//         if(i==0){
//             td.append(temp);
//         }else{
//             td.append(AllData[index]);
//             index++;
//         }
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
//     temp++;
//     document.querySelector('#name').value = "";
//     document.querySelector('#email').value = "";
//     document.querySelector('#message').value = "";
// }