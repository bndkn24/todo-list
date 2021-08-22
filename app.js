var todoList = [];

const inputItem = document.querySelector(".form-control");

retriveLocalStorage();

function retriveLocalStorage() {
  if (localStorage.getItem("todos") !== null) {
    todosList = JSON.parse(localStorage.getItem("todos"));
    todosList.forEach((item) => {
      showItem(item);
    });
  }
}

document.querySelector(".btn").addEventListener("click", function () {
  if (inputItem != null) {
    addToLocalStorage();
  }
});

function addToLocalStorage() {
  const itemObj = {
    name: inputItem.value,
    checked: false,
  };
  todoList.push(itemObj);
  localStorage.setItem("todos", JSON.stringify(todoList));
  showItem(itemObj);
}

function showItem(item) {
  document.querySelector(
    ".list-group"
  ).innerHTML += `<div class="list-group-item">
                    <input class="form-check-input strike" type="checkbox" value="" />
                    <span class="item"> ${item.name} </span>
                  </div>`;

  inputItem.value = "";
}
