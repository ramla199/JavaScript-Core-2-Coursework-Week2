function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content");
  let listCont = document.createElement("ul");

  for (let item of arrayOfPeople) {
    let shoppingListElem = document.createElement("li")
    shoppingListElem.innerText = item;
    listCont.appendChild(shoppingListElem);

  }
  content.append(listCont);

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
