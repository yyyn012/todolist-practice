const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "x";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  console.log(newTodo, todoInput.value);
  paintToDo(newTodo);
}

const storedTodos = localStorage.getItem(TODOS_KEY);

todoForm.addEventListener("submit", handleTodoSubmit);
