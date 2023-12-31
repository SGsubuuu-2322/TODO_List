const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

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

    todosUL.appendChild(todoList);

    input.value = "";
  }
}
