const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodos(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteTodo);
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  saveTodos();
}

function todoSubmitHandler(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  saveTodos();
  toDos.push(newTodoObj);
  paintTodos(newTodoObj);
}

todoForm.addEventListener("submit", todoSubmitHandler);

const storedTodos = localStorage.getItem(TODOS_KEY);

if (storedTodos !== null) {
  const parsedTodo = JSON.parse(storedTodos);
  toDos = parsedTodo;
  parsedTodo.forEach(paintTodos);
}
