function addItem() {
  var newItem = document.getElementById("newItem").value;
  if (newItem.trim() === "") {
    alert("please Enter your Name")
    return;
  }
  var items = JSON.parse(localStorage.getItem("todoItems")) || [];
  if (items.indexOf(newItem) === -1) {
    items.push(newItem);
    localStorage.setItem("todoItems", JSON.stringify(items));
    displayTodoList();
  }else{
    alert("This name is already exist")
  }
  document.getElementById("newItem").value = "";
}
function displayTodoList() {
  var todoList = document.getElementById("todoList");
  var items = JSON.parse(localStorage.getItem("todoItems")) || [];
  todoList.innerHTML = "";
  items.forEach(function(item, index) {
    var listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = `
      ${item}
      <div>
        <button type="button" class="btn btn-danger btn-sm mr-2" onclick="editItem(${index})">Edit</button>
        <button type="button" class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Delete</button>
      </div>
    `;
    todoList.appendChild(listItem);
  });
}
function deleteItem(index) {
  var items = JSON.parse(localStorage.getItem("todoItems")) || [];
  items.splice(index, 1);
  localStorage.setItem("todoItems", JSON.stringify(items));
  displayTodoList();
}
function editItem(index) {
  var items = JSON.parse(localStorage.getItem("todoItems")) || [];
  var editedItem = document.getElementById("editedItem");
  editedItem.value = items[index];
  $('#editModal').modal('show');
  editedItem.setAttribute("data-index", index);
}
function saveEditedItem() {
  var items = JSON.parse(localStorage.getItem("todoItems")) || [];
  var editedItem = document.getElementById("editedItem");
  var index = editedItem.getAttribute("data-index");
  items[index] = editedItem.value;
  localStorage.setItem("todoItems", JSON.stringify(items));
  displayTodoList();
  $('#editModal').modal('hide');
  <p></p>
}
displayTodoList();