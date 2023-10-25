const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', ()=>{
    const newTodoText = newTodoInput.value;

    if(newTodoText !== ""){
        const newTodoItem = document.createElement('li');
        newTodoItem.innerText = newTodoText;
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = 'X';
        deleteTodoBtn.classList.add('deleteBtn');
        deleteTodoBtn.addEventListener('click', function(){
            newTodoItem.remove();
        })

        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem);
        newTodoInput.value = "";

        const error = document.getElementById('error');
        error.innerText = '';
        newTodoInput.style.border = '1px solid #ccc';
    }else {
        const error = document.getElementById('error');
        error.innerText = 'Enter a to do list';
        newTodoInput.style.border = '1px solid red';
    }
})