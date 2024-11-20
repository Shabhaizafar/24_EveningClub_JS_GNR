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
            <span class="material-icons">edit</span>
          </button>
          <button class="action-btn">
            <span class="material-icons">delete</span>
          </button>
        </div>`;
    ul.appendChild(newLi);
    todoInput.value = "";
    // document.querySelector('section').style.visibility = 'visible';
    document.querySelector('section').style.display = 'block';

    setTimeout(() => {
        document.querySelector('section').style.display = 'none';
    }, 2000);
});