const addBtn = document.querySelector('.add-btn');
const todoInput = document.querySelector("#todoInput");
const ul = document.querySelector('ul');
addBtn.addEventListener('click',function(){
    // ul.children[0]
    var newLi = document.createElement('li');
    newLi.classList.add('todo-item');
    newLi.innerHTML = `<span class="todo-text">${todoInput.value}</span>
        <div class="action-buttons">
          <button class="action-btn">
            <span class="material-symbols-outlined">check_circle</span>
          </button>
          <button class="action-btn">
            <span class="material-icons">edit</span>
          </button>
          <button class="action-btn">
            <span class="material-icons">delete</span>
          </button>
        </div>`;
    ul.appendChild(newLi);
    todoInput.value = "";
    document.querySelector('section').style.visibility = 'visible';
    // document.querySelector('section').style.display = 'block';

    setTimeout(() => {
        document.querySelector('section').style.visibility = 'hidden';
    }, 2000);
});

ul.addEventListener('click',function(event){
  if(event.target.innerHTML=='check_circle'){
    event.target.parentElement.parentElement.parentElement.children[0].classList.add('completed');
  }else if(event.target.innerHTML=='delete'){
      if(event.target.parentElement.parentElement.parentElement.children[0].classList.contains('completed')){
        event.target.parentElement.parentElement.parentElement.remove();
      }
  }
  else if(event.target.innerHTML=='edit'){
    if(!event.target.parentElement.parentElement.parentElement.children[0].classList.contains('completed')){
      var newTxt = prompt("Enter New Task : ");
      if(newTxt){
      event.target.parentElement.parentElement.parentElement.children[0].innerHTML = newTxt;
    }
  }
  }
});
