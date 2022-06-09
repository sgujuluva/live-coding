// add h1 via js
//step 1  - creating new element
let newElement = document.createElement("h1");
// step 2  - creating node text
let newText = document.createTextNode("Welcome to my Website");
//step 3 appending text to h1
newElement.appendChild(newText);
//append h1 to the document
document.body.appendChild(newElement);

//controlling the Submit event from the user

function onSubmit(e){
    e.preventDefault();
    console.log(e)
}
document.querySelector("form").addEventListener("submit",onSubmit);

