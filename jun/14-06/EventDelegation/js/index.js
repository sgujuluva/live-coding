const listItems = document.querySelectorAll("li");
const buttons = document.querySelectorAll("button");

// Array of listItems
// [{ htmlTag: 'li', text: 'First' } , { htmlTag: 'li', text: 'Second'}]
// Array of buttons
// [{ htmlTag: 'button', text: 'Delete'}, { htmlTag: 'button', text: 'Delete'}, { htmlTag: 'button', text: 'Delete'}]

// ! Do not use this way of adding event listeners to both the buttons and the li's
// ! Notice that we are using listItems to loop. If the buttons array has a different length, it will not work properly
// listItems.forEach((_, index) => {
//   listItems[index].addEventListener("click", () => {
//     console.log("I am an li");
//   });
//   buttons[index].addEventListener("click", () => {
//     console.log("I am a btn");
//   });
// });

// Adding event listeners to list items
for (let li of listItems) {
  li.addEventListener("click", () => {
    console.log("I am an li");
  });
}

// Adding event listeners to buttons and stopping propagation
for (let btn of buttons) {
  btn.addEventListener("click", (event) => {
    // Stopping propagation prevents the event bubbling
    event.stopPropagation();
    console.log("I am a btn");
  });
}
