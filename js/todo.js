const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function deleteToDo(event){
 const liToDelete = event.target.parentElement;
 liToDelete.remove();
 toDos = toDos.filter((toDo) => toDo.id !== parseInt(liToDelete.id));
 saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const checkBox = document.createElement("input");
    checkBox.setAttribute('class', 'form-check-input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', 'checkedBox');
    checkBox.addEventListener("change", checkOnOff);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function checkOnOff(event) {
    const checkBox = event.target;
    const li = checkBox.parentNode;
    if(checkBox.checked) {
        li.style = "text-decoration:line-through";
    } else {
        li.style = "";
    }
}



function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDoInput.value = "";
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


