function todoList(todos) {
  // Write your code here...
  let contents = document.querySelector("#content");

  let pageHeader = document.createElement("h1");
  pageHeader.innerText = "Our To Do List:";
  contents.appendChild(pageHeader);

  let toDoList = document.createElement("ul");

  for (let action of todos) {
    let eachItem = document.createElement("li")
    eachItem.innerText = action.todo;
    eachItem.classList.add("my-item")
    eachItem.addEventListener("click", addLineThrough)

    toDoList.appendChild(eachItem);
  }

  contents.appendChild(toDoList);
}

function addLineThrough(e) {
  e.target.style.textDecoration !== "line-through" ?
    e.target.classList.toggle("add-line-through") :
    e.target.classList.toggle("my-item");

  const todos = [
    { todo: "wash the dishes" },
    { todo: "walk the dog" },
    { todo: "learn javascript" },
    { todo: "go shopping" }
  ];

  todoList(todos);