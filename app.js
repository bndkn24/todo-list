const todoInput = document.querySelector(".form-control");
const todoItemsList = document.querySelector(".list-group");

let todos = [];

getFromLocalStorage();

function getFromLocalStorage() {
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
    showTodos(todos);
  }
}

document.querySelector(".btn").addEventListener("click", function () {
  addTodos(todoInput.value);
});

function addTodos(item) {
  if (item !== "") {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false,
    };
    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = "";
  }
}

function addToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodos(todos);
}

function showTodos(todos) {
  todoItemsList.innerHTML = "";

  todos.forEach(function (item) {
    let todoTags = `<div class="list-group-item">
    <input class="form-check-input" type="checkbox"/>
    <span class="item`;

    if (item.completed) {
      todoTags += " checked";
    }

    todoTags += `" data-key="${item.id}"> ${item.name} </span>\n</div>`;

    document.querySelector(".list-group").innerHTML += todoTags;
  });
}

todoItemsList.addEventListener("click", function (event) {
  if (event.target.type === "checkbox") {
    toggle(event.target.nextElementSibling.attributes["data-key"].value);
    console.log(event);
  }
});

function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}
