const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

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
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodos(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const storedTodo = localStorage.getItem(TODOS_KEY);

if (storedTodo !== null) {
  const parsedTodos = JSON.parse(storedTodo);
  // JSON.parse()로 localStorage에 저장된 데이터를 javascipt도 읽을 수 있는 데이터로 바꿔줌.
  toDos = parsedTodos;
  // toDos에 위에서 바꾼 데이터 저장.
  parsedTodos.forEach(paintTodos);
  // 바꾼 데이터를 forEach()를 사용하여 요소 하나하나마다 paintTodos()가 적용될 수 있도록 함.
}

// 위 if문이 없다면 새로고침했을 때 페이지에 데이터가 남아있지 않음.
