const box = document.querySelector(".box");

let greybg = () => {
    box.style.backgroundColor = "grey";
}

 let whitebg = () => {
    box.style.backgroundColor = "white";
}
//
let orangebg = () => {
    box.style.backgroundColor = "orange";
} 
// click - eventlistner
box.addEventListener("click", greybg);
//mouseenter - event listener
box.addEventListener("mouseenter", orangebg);
//mouseleave - event listener
box.addEventListener("mouseleave", whitebg); 