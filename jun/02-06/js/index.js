// document.write("<div> this is js div </div>");
// document.write("<div>  </div>");
// KISS
// DRY
// step 1
const newElement = document.createElement("h1");
// step 2
const nodeText = document.createTextNode("Welcome to my toDo list");
// step 3
//console.log(newElement);
newElement.appendChild(nodeText);
document.body.appendChild(newElement);

const arr = [];

const addToList = (e) => {
  e.preventDefault();
  console.log(e);
};
document.querySelector("form").addEventListener("submit", addToList);
