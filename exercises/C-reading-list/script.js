function readingList(books) {
  // Write your code here...
  let contentEl = document.getElementById("content");
  let ulElem = document.createElement("ul");
  ulElem.className += " ul-style";

  for (let book of books) {
    let liElem = document.createElement("li");
    let pElem = document.createElement("p");
    pElem.innerHTML = `<strong> ${book.title}<br>By:</strong> ${book.author}`;
    let imgElem = document.createElement("img");
    imgElem.setAttribute("src", "./img/" + `${book.title}` + ".jpg");
    book.alreadyRead === true ?
      liElem.className += " read-book" :
      liElem.className += " not-read-book";

    liElem.appendChild(pElem);
    liElem.appendChild(imgElem);
    ulElem.appendChild(liElem);
  }
  contentEl.appendChild(ulElem);
}


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);