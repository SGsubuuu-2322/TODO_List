const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoList = document.createElement("li");

    if (todo && todo.completed) {
      todoList.classList.add("completed");
    }

    todoList.innerText = todoText;

    todoList.addEventListener("click", () => {
      todoList.classList.toggle("completed");
      updateLS();
    });
    todoList.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoList.remove();
      updateLS();
    });

    todosUL.appendChild(todoList);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  const todos = [];
  const todosEls = document.querySelectorAll(".todos li");

  todosEls.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
