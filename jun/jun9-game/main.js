const mini = document.querySelector(".mini");
const body = document.querySelector("body");
//standpoint of mini
let hstandpoint = 0;
let vstandpoint = 0;
//direction

const goUp = () =>{
    vstandpoint += 10;
    mini.style.top = vstandpoint + "px";
}
const goDown = () =>{
    vstandpoint -= 10;
    mini.style.top = vstandpoint + "px";
}
const goRight = () =>{
    hstandpoint += 10;
    mini.style.left = hstandpoint + "px";
}
const goLeft = () =>{
    hstandpoint -= 10;
    mini.style.left = hstandpoint + "px";
}
// arrow keys---- W A S D
function move(e){
    console.log(e);
    if(e.code == "KeyW") goUp();
    if(e.code == "KeyA") goLeft();
    if(e.code == "KeyS") goDown();
    if(e.code == "KeyD") goRight();
}
body.addEventListener("keypress",move);