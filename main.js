let input = document.querySelector(".new-todo");

document
  .querySelector(".new-todo")
  .addEventListener("keydown", function(event) {
    if (event.key.toLocaleLowerCase() === "enter") {
      addItemToDOM();
      input.value = "";
    }
  });

function removeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  parent.removeChild(item);
}

// Adds a new item to the todo list
function addItemToDOM() {
  let list = document.querySelector(".todo-list");

  let item = document.createElement("li");

  let divView = document.createElement("div");
  divView.classList.add("view");

  let checkBox = document.createElement("input");
  checkBox.classList.add("toggle");
  checkBox.setAttribute("type", "checkbox");

  divView.appendChild(checkBox);

  let label = document.createElement("Label");
  label.innerHTML = input.value;

  divView.appendChild(label);

  let removeButton = document.createElement("button");
  removeButton.classList.add("destroy");
  removeButton.addEventListener("click", removeItem);

  divView.appendChild(removeButton);

  item.appendChild(divView);

  list.insertBefore(item, list.childNodes[0]);
}
