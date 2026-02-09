const mainTodoElem = document.querySelector('.todo-lists-elem');
const inputValue = document.getElementById('inputValue');
let localTodoList = [];

const getTodoList = () => {
    return JSON.parse(localStorage.getItem("todoList"));
};

const updateLocalStorage = (todoList) => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
};

localTodoList = getTodoList() || [];

const getTodoListFromLocalStorage = (currElem) => {
    const divElem = document.createElement('div');
    divElem.classList.add("main_todo_div");
    divElem.innerHTML = `<li>${currElem}</li><button class="dltbtn">Delete</button>`;
    mainTodoElem.appendChild(divElem);
}; 

const addTodoList = (e) => {
    e.preventDefault();

    const todoListValue = inputValue.value.trim();

    
    
    if(!localTodoList.includes(todoListValue)){
        if(inputValue.value !== ""){
            localTodoList.push(todoListValue);
            localTodoList =[...new Set(localTodoList)];
            localStorage.setItem('todoList', JSON.stringify(localTodoList));
        }else{
            alert("Please enter a todo item.");
            return;
        }
    getTodoListFromLocalStorage(todoListValue);
    }else{
        alert("This todo item already exists.");
    }
    inputValue.value = "";
    
};

showTodoList = () => {
    localTodoList.forEach((currElem) => {
        getTodoListFromLocalStorage(currElem);
    });
    
};

showTodoList();

const removeTodoItem = (e) => {
    console.log(e.target);
    let itemToBeRemoved = e.target.previousElementSibling.innerText;
    let parentElem = e.target.parentElement;
    console.log(itemToBeRemoved);  

    localTodoList = localTodoList.filter((currElem) => {
        return currElem !== itemToBeRemoved.toLowerCase();
    });
    
    updateLocalStorage(localTodoList);
    parentElem.remove();
    
};

mainTodoElem.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('dltbtn')){
        removeTodoItem(e);
    }
    
});

document.querySelector('.btn').addEventListener('click', (e) => {
    addTodoList(e);
}); 

 